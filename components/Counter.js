"use client";

import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCounterAction = async (action) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/counter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          counterId: props.title,
        }),
      });

      if (!response.ok) throw new Error("Failed to update counter value");

      setCount((prev) => (action === "increment" ? prev + 1 : prev - 1));
    } catch (error) {
      console.log("Error updating counter:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <div className="flex flex-row gap-4 items-center">
        <button
          className="btn btn-circle"
          onClick={() => {
            handleCounterAction("decrement");
          }}
          disabled={isLoading}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="btn btn-circle"
          onClick={() => {
            handleCounterAction("increment");
          }}
          disabled={isLoading}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
