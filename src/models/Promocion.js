const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Promocion = sequelize.define(
  "Promocion",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(40),
    },
    imagen: {
      type: DataTypes.STRING(120),
    },
    porcentaje: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    dias_semana: {
      type: DataTypes.STRING(21),
    },
  },
  {
    tableName: "promociones",
  },
);

module.exports = Promocion;
