import useInsertionSort from "./useInsertionSort";
const arraySize = 10;

const InsertionSort = () => {
  const { play, on, target, array, count, comparisons } = useInsertionSort({
    arraySize,
  });

  return (
    <>
      <p>InsertionSort</p>
      {count ? <p>No. of comparisons: {count}</p> : ""}
      <button className="btn-play" onClick={play}>
        {on ? "Pause" : "Play"}
      </button>
      <div className="div-sort">
        {array.map((item, idx) => {
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
                  : id === target?.id
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
export default InsertionSort;
