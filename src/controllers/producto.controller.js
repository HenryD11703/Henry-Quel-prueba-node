const { successResponse } = require("../utils/responseFormatter");
const productoService = require("../services/producto.service");

const getProductos = async (req, res, next) => {
  try {
    const data = await productoService.getProductosConStock();
    return successResponse(res, "consultado correctamente", data);
  } catch (error) {
    next(error);
  }
};

const getProductosMasVendidos = async (req, res, next) => {
  try {
    const data = await productoService.getProductosMasVendidos();
    return successResponse(res, "consultado correctamente", data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductos,
  getProductosMasVendidos,
};
