import React from "react";
import { useState } from "react";

export default function AgregarTareas({ agregar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTexto("");
    agregar(texto);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="agregar tarea"
          value={texto.titulo}
          required
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="btn btn-primary w-100">agregar tarea</button>
      </form>
    </>
  );
}
