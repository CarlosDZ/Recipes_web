import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Buscador = () => {
  const [nombre, setNombre] = useState("");
  const [resultados, setResultados] = useState([]);

  const buscarRecetas = async () => {
    if (!nombre) return;
    try {
      const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL+`/api/recetas/buscar?nombre=${nombre}`);
      setResultados(data);
    } catch (error) {
      console.error("Error al buscar recetas", error);
    }
  };

  return (
    <div>
      <h2>Buscar Recetas</h2>
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
            <br />
            <p><strong>Tiempo Estimado: </strong>{receta.tiempoPreparacion} Minutos</p>
            <p><strong>Preparacion: </strong>{receta.pasos}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;
