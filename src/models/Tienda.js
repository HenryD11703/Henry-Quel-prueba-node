const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Tienda = sequelize.define(
  "Tienda",
  {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(30),
    },
    descripcion: {
      type: DataTypes.STRING(500),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    direccion: {
      type: DataTypes.STRING(120),
    },
    direccion_anexo: {
      type: DataTypes.STRING(40),
    },
    direccion_barrio: {
      type: DataTypes.STRING(25),
    },
    calificacion: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    calificacion_cantidad: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    impuestos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    dias_trabajados: {
      type: DataTypes.STRING(21),
    },
  },
  {
    tableName: "tiendas",
  },
);

module.exports = Tienda;
