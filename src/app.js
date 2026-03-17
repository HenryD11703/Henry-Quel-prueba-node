const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(helmet()); // headers para seguridad básica
app.use(cors()); // Permitir solicitudes desde cualquier origen
app.use(morgan("dev")); // Logging de solicitudes en consola
app.use(express.json()); // Parsear JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Routes
app.use("/api/productos", require("./routes/producto.routes"));
app.use("/api/categorias", require("./routes/categoria.routes"));

// Para las que no se encuentren rutas, se lanza un error 404
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.statusCode = 404;
  next(error);
});

// Middleware de manejo de errores global (tiene que ir al final, después de todas las rutas)
app.use(errorHandler);

module.exports = app;
