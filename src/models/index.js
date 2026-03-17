const Tienda = require("./Tienda");
const Categoria = require("./Categoria");
const Promocion = require("./Promocion");
const Producto = require("./Producto");
const TiendaPromocion = require("./TiendaPromocion");
const ProductoStock = require("./ProductoStock");
const ProductoCategoria = require("./ProductoCategoria");
const Pedido = require("./Pedido");
const PedidoProducto = require("./PedidoProducto");

// --- Relación Tienda <-> Promocion (Muchos a Muchos) ---
// Una tienda puede tener varias promociones y una promoción puede aplicar a varias tiendas.
Tienda.belongsToMany(Promocion, {
  through: TiendaPromocion,
  foreignKey: "id_tienda",
  otherKey: "id_promocion",
});
Promocion.belongsToMany(Tienda, {
  through: TiendaPromocion,
  foreignKey: "id_promocion",
  otherKey: "id_tienda",
});

// Definimos también las relaciones 1:N con la tabla intermedia para permitir consultas directas.
Tienda.hasMany(TiendaPromocion, { foreignKey: "id_tienda" });
TiendaPromocion.belongsTo(Tienda, { foreignKey: "id_tienda" });
Promocion.hasMany(TiendaPromocion, { foreignKey: "id_promocion" });
TiendaPromocion.belongsTo(Promocion, { foreignKey: "id_promocion" });

// --- Relación Producto <-> Categoria (Muchos a Muchos) ---
// Los productos pueden pertenecer a varias categorías y viceversa.
Producto.belongsToMany(Categoria, {
  through: ProductoCategoria,
  foreignKey: "id_producto",
  otherKey: "id_categoria",
});
Categoria.belongsToMany(Producto, {
  through: ProductoCategoria,
  foreignKey: "id_categoria",
  otherKey: "id_producto",
});

Producto.hasMany(ProductoCategoria, { foreignKey: "id_producto" });
ProductoCategoria.belongsTo(Producto, { foreignKey: "id_producto" });
Categoria.hasMany(ProductoCategoria, { foreignKey: "id_categoria" });
ProductoCategoria.belongsTo(Categoria, { foreignKey: "id_categoria" });

// --- Relación Producto <-> Tienda (Stock / Inventario) ---
// Controlamos qué productos hay en qué tiendas y su cantidad disponible.
Producto.hasMany(ProductoStock, { foreignKey: "id_producto" });
ProductoStock.belongsTo(Producto, { foreignKey: "id_producto" });

Tienda.hasMany(ProductoStock, { foreignKey: "id_tienda" });
ProductoStock.belongsTo(Tienda, { foreignKey: "id_tienda" });

// --- Relación Tienda <-> Pedido ---
// Una tienda recibe muchos pedidos.
Tienda.hasMany(Pedido, { foreignKey: "id_tienda" });
Pedido.belongsTo(Tienda, { foreignKey: "id_tienda" });

// --- Relación Pedido <-> Producto (Detalles del Pedido) ---
// Un pedido contiene múltiples productos y promociones asociadas.
Pedido.hasMany(PedidoProducto, {
  foreignKey: "id_pedido",
  as: "productosPedido",
});
PedidoProducto.belongsTo(Pedido, { foreignKey: "id_pedido" });

Producto.hasMany(PedidoProducto, { foreignKey: "id_producto" });
PedidoProducto.belongsTo(Producto, { foreignKey: "id_producto" });

Promocion.hasMany(PedidoProducto, { foreignKey: "id_promocion" });
PedidoProducto.belongsTo(Promocion, { foreignKey: "id_promocion" });

module.exports = {
  Tienda,
  Categoria,
  Promocion,
  Producto,
  TiendaPromocion,
  ProductoStock,
  ProductoCategoria,
  Pedido,
  PedidoProducto,
};
