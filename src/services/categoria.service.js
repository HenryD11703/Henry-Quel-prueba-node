const { Categoria, ProductoCategoria } = require("../models");
const { sequelize } = require("../config/database");

const getCategoriasConProductos = async () => {
  const categorias = await Categoria.findAll({
    attributes: [
      "id",
      "nombre",
      [
        sequelize.fn("COUNT", sequelize.col("ProductoCategoria.id_producto")),
        "cantProductos",
      ],
    ],
    include: [
      {
        model: ProductoCategoria,
        attributes: [],
        required: true,
      },
    ],
    group: ["Categoria.id"],
    order: [[sequelize.col("cantProductos"), "DESC"]],
  });

  return categorias.map((c) => ({
    idCategoria: c.id,
    nombre: c.nombre,
    cantProductos: parseInt(c.dataValues.cantProductos, 10),
  }));
};

module.exports = {
  getCategoriasConProductos,
};
