import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecetaDetalle() {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL+`/api/recetas/${id}`)
      .then((response) => setReceta(response.data))
      .catch((error) => console.error("Error al obtener la receta:", error));
  }, [id]);

  if (!receta) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{receta.nombre}</h2>
      <p><strong>Categoría:</strong> {receta.categoria}</p>
      <p><strong>Ingredientes:</strong> {receta.ingredientes.join(", ")}</p>
      <p><strong>Pasos:</strong> {receta.pasos}</p>
      <p><strong>Tiempo de preparación:</strong> {receta.tiempoPreparacion} min</p>
      <img src={process.env.REACT_APP_BACKEND_URL+`/${receta.imagen}`} alt={`No se encuentra la imagen de ${receta.nombre}`} width="200" />    </div>
  );
}

export default RecetaDetalle;
