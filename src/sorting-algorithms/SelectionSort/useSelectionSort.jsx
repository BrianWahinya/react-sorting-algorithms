import { useEffect, useRef, useState } from "react";
import { genRandomNumbers, genRandomId } from "../../helpers/utils";

const arrayNums = (amount) =>
  genRandomNumbers(5, 100, amount).map((item) => ({
    id: genRandomId(),
    value: item,
  }));

const useSelectionSort = ({ arraySize }) => {
  const [sortedArray, setSortedArray] = useState([]);
  const [unsortedArray, setUnsortedArray] = useState(arrayNums(arraySize));
  const [min, setMin] = useState(null);
  const [on, setOn] = useState(false);
  const [comparisons, setComparisons] = useState([]);
  const [count, setCount] = useState(0);

  const play = () => {
    setOn(!on);
  };

  const findMin = (arr, idx = 0, submin = arr[0]) => {
    if (arr.length === idx) {
      setMin(submin);
      setComparisons((prev) => []);
      return submin;
    }
    if (!submin) {
      submin = arr[0];
    }

    setComparisons((prev) => [submin.id, arr[idx].id]);
    setCount((prev) => (prev += 1));
    if (arr[idx].value < submin.value) {
      submin = arr[idx];
    }

    return setTimeout(() => {
      findMin(arr, idx + 1, submin);
    }, 500);
  };

  useEffect(() => {
    let timeout;

    if (unsortedArray.length < 1) {
      setOn(false);
    }

    if (on && unsortedArray.length > 0 && min === null) {
      findMin(unsortedArray);
    }

    if (min && on) {
      timeout = setTimeout(() => {
        setUnsortedArray((prev) => prev.filter((elem) => elem.id !== min?.id));
        setSortedArray((prev) => [...prev, min]);
        setMin(null);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [min, on, unsortedArray]);

  return { play, on, min, count, comparisons, sortedArray, unsortedArray };
};

export default useSelectionSort;
