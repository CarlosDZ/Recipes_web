const express = require("express");
const dotenv = require("dotenv");
const conectarDB = require("./config/db");

dotenv.config();
conectarDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
