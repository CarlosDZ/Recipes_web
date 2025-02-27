import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaRecetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL+"/api/recetas")
      .then(response => setRecetas(response.data))
      .catch(error => console.error("Error al obtener recetas:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Recetas</h1>
      <ul>
        {recetas.map((receta) => (
          <li key={receta._id}>
            <h3><Link to={`/receta/${receta._id}`}>{receta.nombre}</Link></h3>
            <p><strong>Categoría:</strong> {receta.categoria}</p>
            <p><strong>Ingredientes:</strong> {receta.ingredientes.join(", ")}</p>
            <p><strong>Tiempo Estimado:</strong> {receta.tiempoPreparacion} Minutos</p>
            <p><strong>Pasos:</strong> {receta.pasos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRecetas;
