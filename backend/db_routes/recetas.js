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

export default router;
