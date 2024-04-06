import useMergeHook from "./useMergeHook";

const arraySize = 20;

const MergeSort = () => {
  const { toggle, play, count, array, comparisons, subarray } =
    useMergeHook(arraySize);

  return (
    <>
      <p>MergeSort</p>
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
                backgroundColor: comparisons.includes(id)
                  ? "orange"
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
export default MergeSort;
