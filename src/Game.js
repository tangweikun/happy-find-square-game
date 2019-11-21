import React, { useState, useEffect } from "react";
import "./Game.css";

export function Game() {
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
      setScore(score - 20);
    }
  }

  return (
    <div className="container">
      <p>
        <span>当前得分:</span>
        <span className="score">{score}</span>
      </p>
      <div className="cell-wrapper">
        {list.map((_, index) => (
          <button
            key={index}
            className={`cell ${index === target ? "target" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
