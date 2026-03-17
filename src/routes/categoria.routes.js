const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria.controller");

// GET /api/categorias
router.get("/", categoriaController.getCategorias);

module.exports = router;
