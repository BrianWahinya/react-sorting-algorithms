import { useEffect, useRef, useState } from "react";
import { genRandomNumbers, genRandomId } from "../../helpers/utils";

const arrayNums = (amount) =>
  genRandomNumbers(5, 100, amount).map((item) => ({
    id: genRandomId(),
    value: item,
  }));

const useInsertionSort = ({ arraySize }) => {
  const [array, setArray] = useState(arrayNums(arraySize));
  const [target, setTarget] = useState(null);
  const [on, setOn] = useState(false);
  const [comparisons, setComparisons] = useState([]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const play = () => {
    setOn(!on);
  };

  const checkPrevious = (arr, idx) => {
    const previous = arr[idx - 1];
    const current = arr[idx];

    setTarget(current);
    setArray((prev) => arr);
    if (idx === 0 || previous.value <= current.value) {
      setComparisons((prev) => []);
      setIndex((prev) => prev + 1);
      return arr;
    }

    setComparisons((prev) => [previous.id]);
    setCount((prev) => (prev += 1));
    if (previous.value > current.value) {
      arr[idx - 1] = current;
      arr[idx] = previous;
    }

    return setTimeout(() => {
      checkPrevious([...arr], idx - 1);
    }, 500);
  };

  useEffect(() => {
    let timeout;

    if (index === arraySize) {
      setOn(false);
      setTarget(null);
    }

    if (on && index < arraySize) {
      timeout = setTimeout(() => {
        checkPrevious([...array], index);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [on, index]);

  return { play, on, target, array, count, comparisons };
};

export default useInsertionSort;
