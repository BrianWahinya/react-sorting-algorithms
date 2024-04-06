import useQuickHook from "./useQuickHook";

const arraySize = 20;

const QuickSort = () => {
  const { array, comparison, pivot, subarray, count, toggle, play } =
    useQuickHook(arraySize);

  return (
    <>
      <p>QuickSort</p>
      {count ? <p>No. of comparisons: {count}</p> : ""}
      <button className="btn-play" onClick={play}>
        {toggle ? "Pause" : "Play"}
      </button>
      <div className="div-sort">
        {[...array].map((item, idx) => {
          const { id, value } = item;
          return (
            <div
              className="sort-item"
              key={id}
              style={{
                height: `${value}%`,
                width: `${100 / arraySize}%`,
                backgroundColor:
                  comparison === id
                    ? "orange"
                    : pivot === id
                    ? "green"
                    : "inherit",
                borderBottom: subarray.includes(id)
                  ? "5px solid blue"
                  : "1px solid red",
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
export default QuickSort;
