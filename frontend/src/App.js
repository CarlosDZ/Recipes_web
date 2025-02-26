import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaRecetas from "./pages/ListaRecetas";
import AgregarReceta from "./pages/AgregarReceta";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/agregar">Añadir Receta</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ListaRecetas />} />
        <Route path="/agregar" element={<AgregarReceta />} />
      </Routes>
    </Router>
  );
};

export default App;
