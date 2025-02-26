import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/recetas")
      .then(response => setRecetas(response.data))
      .catch(error => console.error("Error al obtener recetas:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Recetas</h1>
      <ul>
        {recetas.map((receta) => (
          <li key={receta._id}>
            <h3>{receta.nombre}</h3>
            <p><strong>Categoría:</strong> {receta.categoria}</p>
            <p><strong>Ingredientes:</strong> {receta.ingredientes.join(", ")}</p>
            <p><strong>Tiempo estimado:</strong> {receta.tiempoPreparacion} Minutos</p>
            <p><strong>Pasos:</strong> {receta.pasos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
