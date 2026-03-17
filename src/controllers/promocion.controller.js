const { validationResult } = require("express-validator");
const { successResponse } = require("../utils/responseFormatter");
const promocionService = require("../services/promocion.service");

const getPromociones = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error(
        errors
          .array()
          .map((e) => e.msg)
          .join(", "),
      );
      err.statusCode = 400;
      throw err;
    }

    const { dia } = req.query;

    const data = await promocionService.getPromocionesPorDia(dia);
    return successResponse(res, "consultado correctamente", data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPromociones,
};
