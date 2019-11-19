import React, { useState, useEffect } from "react";
import "./Foo.css";

export function Foo() {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(0);
  const list = Array(9).fill(0);

  useEffect(() => {
    randomTarget();
  }, []);

  function randomTarget() {
    setTarget(Math.floor(Math.random() * 9));
  }

  function handleClick(index) {
    if (index === target) {
      setScore(score + 10);
      randomTarget();
    } else {
      setScore(score - 10);
    }
  }

  return (
    <div className="container">
      <p>{`当前得分:${score}`}</p>
      {list.map((_, index) => (
        <button
          key={index}
          className={`cell ${index === target ? "winner" : ""}`}
          onClick={() => handleClick(index)}
        ></button>
      ))}
    </div>
  );
}
