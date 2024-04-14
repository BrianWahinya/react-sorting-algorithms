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

const useQuickHook = (arraySize) => {
  const [array, setArray] = useState(arrayNums(arraySize));
  const [comparison, setComparison] = useState(null);
  const [pivot, setPivot] = useState(null);
  const [subarray, setSubarray] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const play = () => {
    setToggle(!toggle);
  };

  const choosePivot = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const chosenPivot = arr[randomIndex];
    // setPivot(chosenPivot);
    return chosenPivot;
  };

  const partitionArray = async (arr, tgt, left = [], right = []) => {
    if (arr.length === 0) {
      return { left, right };
    }

    const [head, ...tail] = arr;
    if (head.id !== tgt.id) {
      setComparison(head.id);
      await delay(500);
      if (head.value < tgt.value) {
        left.push(head);
      } else {
        right.push(head);
      }

      const subtotal = [...left, tgt, ...right];
      const subids = subtotal.map((item) => item.id);
      const sub_arr = arr.filter((item) => !subids.includes(item.id));

      setArray((prev) => {
        const indexes = [...arr, ...left, ...right, tgt]
          .map((item) => prev.findIndex((x) => x.id == item.id))
          .toSorted((a, b) => a - b);
        const total = [...subtotal, ...sub_arr];
        const sub_prev = prev.toSpliced(indexes[0], total.length, ...total);
        return sub_prev;
      });
    }

    await delay(500);

    return await partitionArray(tail, tgt, left, right);
  };

  const divideArray = async (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const target = choosePivot(arr);
    const subids = arr.map((item) => item.id);
    setPivot(target.id);
    setSubarray(subids);

    await delay(500);
    const { left, right } = await partitionArray(arr, target);
    const total = [...left, target, ...right];
    setArray((prev) => {
      const indexes = total
        .map((item) => prev.findIndex((x) => x.id == item.id))
        .toSorted((a, b) => a - b);
      const sub_prev = prev.toSpliced(indexes[0], total.length, ...total);
      return sub_prev;
    });

    await delay(500);
    return [
      ...(await divideArray(left)),
      target,
      ...(await divideArray(right)),
    ];
  };

  useEffect(() => {
    if (toggle) {
      divideArray(array).then((result) => {
        setArray(result);
      });
    }
  }, [toggle]);
  return { array, comparison, pivot, subarray, count, toggle, play };
};
export default useQuickHook;
