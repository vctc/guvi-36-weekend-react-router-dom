import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(10);

  const handleClick = () => {
    setCounter((value) => {
      return value + 1;
    });
    console.log("counter is", counter);
    // setCounter((count) => count + 1);
  };

  return (
    <>
      {" "}
      <h1>Counter is {counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Counter;
