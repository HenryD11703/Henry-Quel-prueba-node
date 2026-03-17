const { Promocion, Tienda, TiendaPromocion } = require("../models");
const { Op } = require("sequelize");
const { sequelize } = require("../config/database");

const getPromocionesPorDia = async (diaStr) => {
  // `dia` es un número entre 1 y 7 representando el día de la semana (1=Lunes, 2=Martes, ..., 7=Domingo)
  const dia = parseInt(diaStr, 10);

  if (isNaN(dia) || dia < 1 || dia > 7) {
    const err = new Error(
      "El día proporcionado no es válido. Debe ser entre 1 y 7.",
    );
    err.statusCode = 400;
    throw err;
  }

  const promociones = await Promocion.findAll({
    where: {
      [Op.and]: [
        sequelize.where(
          sequelize.fn("SUBSTRING", sequelize.col("dias_semana"), dia, 1),
          "1",
        ),
      ],
    },
    include: [
      {
        model: TiendaPromocion,
        required: false,
        where: {
          inicio: { [Op.lte]: new Date() },
          fin: { [Op.gte]: new Date() },
        },
        include: [
          {
            model: Tienda,
            attributes: ["nombre"],
          },
        ],
      },
    ],
  });

  return promociones.map((p) => ({
    idPromocion: p.id,
    nombre: p.nombre,
    tiendas: p.TiendaPromocions.map((tp) => tp.Tienda?.nombre).filter(
      (name) => name,
    ),
  }));
};

module.exports = {
  getPromocionesPorDia,
};
