const express = require("express");
const { query } = require("express-validator");
const router = express.Router();
const promocionController = require("../controllers/promocion.controller");

// GET /api/promociones
router.get(
  "/",
  [
    query("dia")
      .notEmpty()
      .withMessage('El parámetro "dia" es requerido')
      .isInt({ min: 1, max: 7 })
      .withMessage('El parámetro "dia" debe ser un número entre 1 y 7'),
  ],
  promocionController.getPromociones,
);

module.exports = router;

module.exports = router;
