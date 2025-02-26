import express from "express";
import Receta from "../db_models/Receta.js";

const router = express.Router();

// POST
router.post("/", async (req, res) => {
  try {
    const receta = new Receta(req.body);
    await receta.save();
    res.status(201).json(receta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET (de todas las recetas)
router.get("/", async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DEL (por id)
router.delete("/:id", async (req, res) => {
  try {
    await Receta.findByIdAndDelete(req.params.id);
    res.json({ message: "Receta eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener las categorías válidas
router.get("/categorias", (req, res) => {
  try {
    const categoriasValidas = Receta.schema.path("categoria").enumValues;
    res.json(categoriasValidas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener categorías" });
  }
});

// BBusqueda flexible por nombre
router.get("/buscar", async (req, res) => {
  try {
    const { nombre } = req.query;
    if (!nombre) return res.status(400).json({ error: "Falta el parámetro 'nombre'" });

    const recetas = await Receta.find({ nombre: { $regex: nombre, $options: "i" } });

    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar recetas" });
  }
});

export default router;
