import { useState } from "react";

type ClickCounterProps = {
  title: string;
  message: string;
};

export function ClickCounter({ title, message }: ClickCounterProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={handleClick}>
        count is {count}
      </button>

      {count >= 10 && <p>{message}</p>}
    </div>
  );
}