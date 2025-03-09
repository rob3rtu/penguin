"use client";

import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{props.title}</h2>
      <button
        className="btn btn-circle"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="btn btn-circle"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
