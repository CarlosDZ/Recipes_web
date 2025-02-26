import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    ingredientes: [
      {
        type: String,
        required: true,
      },
    ],
    pasos: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      enum: ["Desayuno", "Almuerzo", "Merienda", "Cena", "Postre", "Bebida", "Aperitivo"],
      required: true,
    },
    tiempoPreparacion: {
      type: Number,
      required: true,
    },
    imagen: {
      type: String,
      default: "resources/ImagePlaceholder.png",
    },
  },
  { timestamps: true } // Agrega `createdAt` y `updatedAt`
);

const Receta = mongoose.model("Receta", recetaSchema);

export default Receta;
