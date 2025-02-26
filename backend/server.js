import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import recetasRoutes from "./db_routes/recetas.js";
import { fileURLToPath } from "url";
import path from "path";


dotenv.config();
conectarDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/recetas", recetasRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
app.use("/resources", express.static(path.join(projectRoot, "resources")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
