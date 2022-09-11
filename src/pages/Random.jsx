import React from "react";

const Random = () => {
  const [random, setRandom] = React.useState([]);

  const handleAddRow = () => {
    setRandom((state) => {
      return [...state, Math.random()];
    });
  };
  return (
    <>
      <button onClick={handleAddRow}>Add row</button>

      {random.length === 0 ? (
        <p> There is no data </p>
      ) : (
        random.map((numbers) => {
          return <div> Current number is : {numbers}</div>;
        })
      )}
    </>
  );
};

export default Random;
