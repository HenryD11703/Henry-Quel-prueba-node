const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const PedidoProducto = sequelize.define(
  "PedidoProducto",
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: DataTypes.DECIMAL(9, 3),
      allowNull: false,
    },
    valor_unitario: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false,
    },
    valor_unitario_promocion: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: false,
    },
    total_teorico: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    total_final: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    id_promocion: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    id_pedido: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "pedidos_productos",
  },
);

module.exports = PedidoProducto;
