import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AgregarReceta = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tiempoPreparacion, setTiempoPreparacion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaReceta = {
      nombre,
      ingredientes: ingredientes.split(",").map(i => i.trim()),
      pasos,
      categoria,
      tiempoPreparacion: parseInt(tiempoPreparacion),
    };

    try {
      await axios.post("http://localhost:5000/api/recetas", nuevaReceta);
      navigate("/"); // Redirigir a la lista de recetas
    } catch (error) {
      console.error("Error al añadir receta:", error);
    }
  };

  return (
    <div>
      <h1>Añadir Receta</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label>Ingredientes (separados por coma):</label>
        <input type="text" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />

        <label>Pasos:</label>
        <textarea value={pasos} onChange={(e) => setPasos(e.target.value)} required />

        <label>Categoría:</label>
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />

        <label>Tiempo de Preparación (minutos):</label>
        <input type="number" value={tiempoPreparacion} onChange={(e) => setTiempoPreparacion(e.target.value)} required />

        <button type="submit">Añadir Receta</button>
      </form>
    </div>
  );
};

export default AgregarReceta;
