const {
  Producto,
  ProductoStock,
  Tienda,
  PedidoProducto,
} = require("../models");
const { sequelize } = require("../config/database");

const getProductosConStock = async () => {
  const productos = await Producto.findAll({
    attributes: ["id", "nombre", "presentacion"],
    include: [
      {
        model: ProductoStock,
        attributes: ["cantidad"],
        include: [
          {
            model: Tienda,
            attributes: ["id", "nombre"],
          },
        ],
      },
    ],
  });

  const data = productos.map((p) => {
    return {
      idProducto: p.id,
      nombre: p.nombre,
      presentacion: p.presentacion,
      tiendas: p.ProductoStocks.map((stock) => ({
        idTienda: stock.Tienda.id,
        nombre: stock.Tienda.nombre,
        stock: parseInt(stock.cantidad, 10),
      })),
    };
  });

  return data;
};

const getProductosMasVendidos = async () => {
  const productos = await PedidoProducto.findAll({
    attributes: [
      "id_producto",
      [sequelize.fn("SUM", sequelize.col("cantidad")), "unidadesVendidas"],
    ],
    include: [
      {
        model: Producto,
        attributes: ["nombre", "presentacion"],
      },
    ],
    group: ["id_producto", "Producto.id"],
    order: [[sequelize.col("unidadesVendidas"), "DESC"]],
    limit: 10,
  });

  const data = productos.map((p) => {
    return {
      idProducto: p.id_producto,
      nombre: p.Producto.nombre,
      presentacion: p.Producto.presentacion,
      unidadesVendidas: parseInt(p.dataValues.unidadesVendidas, 10),
    };
  });

  return data;
};

module.exports = {
  getProductosConStock,
  getProductosMasVendidos,
};
