import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaRecetas from "./pages/ListaRecetas";
import AgregarReceta from "./pages/AgregarReceta";
import Buscador from "./pages/Buscador";
import BorrarReceta from "./pages/BorrarReceta";
import RecetaDetallada from "./pages/RecetaDetallada";


const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/agregar">Añadir Receta</Link> | <Link to="/buscar">Buscador de Recetas</Link> | <Link to="/borrar">Borrar Receta</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListaRecetas />} />
        <Route path="/agregar" element={<AgregarReceta />} />
        <Route path="/buscar" element={<Buscador />} />
        <Route path="/borrar" element={<BorrarReceta />} />
        <Route path="/receta/:id" element={<RecetaDetallada />} />
      </Routes>
    </Router>
  );
};

export default App;
