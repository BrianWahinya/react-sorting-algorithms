import { useEffect, useState } from "react";
import { genRandomId, genRandomNumbers } from "../../helpers/utils";

const arrayNums = (amount) =>
  genRandomNumbers(5, 100, amount).map((item) => ({
    id: genRandomId(),
    value: item,
  }));

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const useMergeHook = (arraySize) => {
  const [array, setArray] = useState(arrayNums(arraySize));
  const [comparisons, setComparisons] = useState([]);
  const [subarray, setSubarray] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const play = () => {
    setToggle(!toggle);
  };

  const compare = async (left, right) => {
    const sorted_arr = [];
    const merged_arr = [left, right].flat();
    setSubarray(merged_arr.map((item) => item.id));

    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      setComparisons([left[i].id, right[j].id]);
      if (left[i].value < right[j].value) {
        sorted_arr.push(left[i]);
        i++;
      } else {
        sorted_arr.push(right[j]);
        j++;
      }
      await delay(500);
    }

    sorted_arr.push(...left.slice(i));
    sorted_arr.push(...right.slice(j));

    setArray((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === merged_arr[0].id);
      const sub_prev = prev.toSpliced(
        itemIndex,
        merged_arr.length,
        ...sorted_arr,
        ...merged_arr.filter(
          (item) => !sorted_arr.map((elem) => elem.id).includes(item.id)
        )
      );
      return sub_prev;
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sorted_arr);
      }, 500);
    });
  };

  const divideArray = async (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = await divideArray(arr.slice(0, middle));
    const right = await divideArray(arr.slice(middle));
    return await compare(left, right);
  };

  useEffect(() => {
    if (toggle) {
      divideArray(array).then((result) => {
        setArray(result);
        // console.log("divide-array", result);
      });
    }
  }, [toggle]);

  return { toggle, play, count, array, comparisons, subarray };
};
export default useMergeHook;
