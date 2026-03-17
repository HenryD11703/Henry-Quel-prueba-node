const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Pedido = sequelize.define(
  "Pedido",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    instrucciones: {
      type: DataTypes.STRING(500),
    },
    entrega_fecha: {
      type: DataTypes.DATEONLY,
    },
    valor_productos: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    valor_envio: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false,
    },
    valor_descuento: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    valor_cupon: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false,
    },
    impuestos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    valor_impuestos: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false,
    },
    valor_final: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(160),
    },
    valor_comision: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false,
    },
    id_user: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "pedidos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  },
);

module.exports = Pedido;
