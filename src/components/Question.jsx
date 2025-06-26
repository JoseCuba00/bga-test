import React, { useState } from "react";

export const Question = ({ data }) => {
  const [status, setStatus] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleChange = (idx) => {
    if (status === "correct") return;
    setSelected(idx);
    if (idx === data.answerIndex) {
      setStatus("correct");
    } else {
      setStatus("wrong");
      setTimeout(() => {
        setStatus(null);
        setSelected(null);
      }, 500);
    }
  };

  return (
    <div className="question">
      <h3>
        {data.id}. {data.question}
      </h3>
      <div>
        {data.options.map((opt, idx) => {
          const name = `quiz-group-${data.id}`;
          const isSelected = selected === idx;
          const disabled = status === "correct";
          const itemClass =
            status && isSelected
              ? status === "correct"
                ? "option-item correct"
                : "option-item wrong"
              : "option-item";
          return (
            <div
              key={idx}
              className={itemClass}
              onClick={() => handleChange(idx)}
            >
              <input
                className="radio-quiz"
                type="radio"
                name={name}
                id={`radio-${data.id}-${idx}`}
                disabled={disabled}
                checked={isSelected}
              />
              <label
                htmlFor={`radio-${data.id}-${idx}`}
                style={{ fontWeight: 600, paddingLeft: "40px" }}
              >
                {opt}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
