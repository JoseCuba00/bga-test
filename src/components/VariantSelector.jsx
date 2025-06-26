import React from "react";

export const VariantSelector = ({ onSelect }) => (
  <div>
    <h2>Selecciona una variante:</h2>
    {[1, 2, 3].map((v) => (
      <button
        key={v}
        className="variant-button"
        onClick={() => onSelect(`variant${v}`)}
      >
        Variante {v}
      </button>
    ))}
  </div>
);
