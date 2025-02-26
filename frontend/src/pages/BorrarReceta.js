import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EliminarReceta = () => {
  const [nombre, setNombre] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscarRecetas = async () => {
    if (!nombre) return;
    try {
      const { data } = await axios.get(`http://localhost:5000/api/recetas/buscar?nombre=${nombre}`);
      setResultados(data);
    } catch (error) {
      console.error("Error al buscar recetas", error);
    }
  };

  const eliminarReceta = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta receta?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/recetas/${id}`);
      setResultados(resultados.filter((receta) => receta._id !== id));
    } catch (error) {
      console.error("Error al eliminar receta", error);
    }
  };

  return (
    <div>
      <h2>Eliminar Recetas</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe el nombre de la receta..."
      />
      <button onClick={buscarRecetas}>Buscar</button>

      <ul>
        {resultados.map((receta) => (
          <li key={receta._id}>
            <strong><Link to={`/receta/${receta._id}`}>{receta.nombre}</Link></strong> - {receta.categoria}
            <button onClick={() => eliminarReceta(receta._id)} style={{ marginLeft: "10px", color: "red" }}>
                BORRAR
            </button>
            <br />
            <strong>ID Unico:  </strong>{receta._id}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EliminarReceta;
