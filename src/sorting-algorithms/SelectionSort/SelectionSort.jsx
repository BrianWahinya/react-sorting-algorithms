import useSelectionSort from "./useSelectionSort";
const arraySize = 10;

const SelectionSort = () => {
  const { play, on, min, comparisons, count, sortedArray, unsortedArray } =
    useSelectionSort({ arraySize });

  return (
    <>
      <p>SelectionSort</p>
      {count ? <p>No. of comparisons: {count}</p> : ""}
      <button className="btn-play" onClick={play}>
        {on ? "Pause" : "Play"}
      </button>
      <div className="div-sort">
        {[...sortedArray, ...unsortedArray].map((item, idx) => {
          const { id, value } = item;
          return (
            <div
              className="sort-item"
              key={id}
              style={{
                height: `${value}%`,
                width: `${100 / arraySize}%`,
                backgroundColor: comparisons.includes(id)
                  ? "orange"
                  : id === min?.id
                  ? "green"
                  : "inherit",
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SelectionSort;
