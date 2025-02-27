import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const conexion = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Conectado a la base de datos: ${conexion.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
