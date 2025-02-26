import React, { useState, useEffect } from "react";
import axios from "axios";

const AgregarReceta = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tiempoPreparacion, setTiempoPreparacion] = useState("");
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);

  // Obtener categorías desde el backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/recetas/categorias")
      .then(response => {
        setCategoriasDisponibles(response.data);
      })
      .catch(error => {
        console.error("Error al obtener categorías:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nuevaReceta = {
      nombre,
      ingredientes: ingredientes.split(",").map(i => i.trim()), // Convierte en array
      pasos,
      categoria,
      tiempoPreparacion: parseInt(tiempoPreparacion, 10)
    };

    try {
      await axios.post("http://localhost:5000/api/recetas", nuevaReceta);
      alert("Receta agregada correctamente");
    } catch (error) {
      console.error("Error al agregar la receta:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Receta</h2>
      <br />

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <br />

        <label>Ingredientes (separados por coma):</label>
        <input type="text" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
        <br />

        <label>Pasos:</label>
        <textarea value={pasos} onChange={(e) => setPasos(e.target.value)} required />
        <br />

        <label>Categoría:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Seleccione una categoría</option>
          {categoriasDisponibles.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <br />

        <label>Tiempo de preparación (minutos):</label>
        <input type="number" value={tiempoPreparacion} onChange={(e) => setTiempoPreparacion(e.target.value)} required />
        <br />

        <button type="submit">Agregar Receta</button>
      </form>
    </div>
  );
};

export default AgregarReceta;
