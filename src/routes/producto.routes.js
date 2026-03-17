const express = require("express");
const router = express.Router();
const productoController = require("../controllers/producto.controller");

// GET /api/productos/mas-vendidos
router.get("/mas-vendidos", productoController.getProductosMasVendidos);

// GET /api/productos
router.get("/", productoController.getProductos);

module.exports = router;
