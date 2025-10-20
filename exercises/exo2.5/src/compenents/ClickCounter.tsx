import { useState } from "react";

type ClickCounterProps = {
  title: string;
  message: string;
  hoverMessage : string
};

export function ClickCounter({ title, message, hoverMessage }: ClickCounterProps) {
  const [count, setCount] = useState(0);
  const [isHovered,setIsHovered] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
    const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      {isHovered && <p>{hoverMessage}</p>}
      <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        count is {count}
      </button>

      {count >= 10 && <p>{message}</p>}
    </div>
  );
}