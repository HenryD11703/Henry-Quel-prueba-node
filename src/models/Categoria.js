const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Categoria = sequelize.define(
  "Categoria",
  {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(30),
    },
    adultos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "categorias",
  },
);

module.exports = Categoria;
