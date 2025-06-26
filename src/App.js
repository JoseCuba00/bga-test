import React, { useState } from "react";
import { VariantSelector } from "./components/VariantSelector";
import { Quiz } from "./components/Quiz";

export default function App() {
  const [variant, setVariant] = useState(null);
  return (
    <div className="container">
      <h1 className="title">Quiz de Seguridad Marítima</h1>
      {variant ? (
        <Quiz variant={variant} onReset={() => setVariant(null)} />
      ) : (
        <VariantSelector onSelect={setVariant} />
      )}
    </div>
  );
}
