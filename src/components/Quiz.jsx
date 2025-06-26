import React from "react";
import { questions } from "./data/questions";
import { Question } from "./Question";

export const Quiz = ({ variant, onReset }) => {
  const qs = questions[variant];

  return (
    <div>
      <button className="reset-button" onClick={onReset}>
        Cambiar variante
      </button>
      <div className="question-list">
        {qs.map((q) => (
          <Question key={q.id} data={q} />
        ))}
      </div>
    </div>
  );
};
