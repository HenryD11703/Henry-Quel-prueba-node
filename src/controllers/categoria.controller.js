const { successResponse } = require("../utils/responseFormatter");
const categoriaService = require("../services/categoria.service");

const getCategorias = async (req, res, next) => {
  try {
    const data = await categoriaService.getCategoriasConProductos();
    return successResponse(res, "consultado correctamente", data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategorias,
};
