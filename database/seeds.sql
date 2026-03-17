USE market;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE pedidos_productos;
TRUNCATE TABLE pedidos;
TRUNCATE TABLE productos_stocks;
TRUNCATE TABLE productos_categorias;
TRUNCATE TABLE tiendas_promociones;
TRUNCATE TABLE promociones;
TRUNCATE TABLE productos;
TRUNCATE TABLE categorias;
TRUNCATE TABLE tiendas;
SET FOREIGN_KEY_CHECKS = 1;

-- 1. Tiendas
INSERT INTO tiendas (estado, nombre, descripcion, telefono, direccion, calificacion, calificacion_cantidad, impuestos) VALUES
(1, 'Mas x menos', 'Supermercado local', '555-0101', 'Calle 1 #2-3', 4.5, 100, 19),
(1, 'Exito', 'Cadena nacional', '555-0102', 'Carrera 45 #10', 4.2, 250, 19),
(1, 'D1', 'Tienda de descuento', '555-0103', 'Avenida Siempre Viva', 4.0, 500, 5);

-- 2. Categorias
INSERT INTO categorias (nombre, adultos) VALUES
('Frutas y verduras', 0),
('Bebidas', 0),
('Alcohol', 1),
('Despensa', 0);

-- 3. Productos
INSERT INTO productos (estado, kit, barcode, nombre, presentacion, descripcion, peso) VALUES
(1, 0, '7701234567890', 'Gaseosa postobon', '355ml', 'Gaseosa sabor manzana', 0.40),
(1, 0, '7701234567891', 'Cerveza aguila', '1litro', 'Cerveza nacional', 1.00),
(1, 0, '7701234567892', 'Manzana roja', 'und', 'Manzana fresca importada', 0.20),
(1, 0, '7701234567893', 'Arroz Diana', '1kg', 'Arroz blanco premium', 1.00);

-- 4. Productos Categorias
INSERT INTO productos_categorias (id_categoria, id_producto) VALUES
(2, 1), (3, 2), (2, 2), (1, 3), (4, 4);

-- 5. Productos Stocks
INSERT INTO productos_stocks (cantidad, id_tienda, id_producto, fecha_ingreso) VALUES
(100.000, 1, 1, CURDATE()), -- Gaseosa en Mas x menos
(250.000, 2, 1, CURDATE()), -- Gaseosa en Exito
(50.000, 3, 2, CURDATE()),  -- Cerveza en D1
(500.000, 2, 4, CURDATE()); -- Arroz en Exito

-- 6. Promociones
-- El README dice "miércoles (3)". Si 0 es Lunes, 1 Martes, 2 es Miércoles.
INSERT INTO promociones (estado, nombre, porcentaje, dias_semana) VALUES
(1, 'Miercoles Felices', 15, '0010000'), 
(1, 'Fin de Semana Loco', 20, '0000011'),
(1, 'Lunes de Ahorro', 10, '1000000');

-- 7. Tiendas Promociones
INSERT INTO tiendas_promociones (estado, inicio, fin, id_tienda, id_promocion) VALUES
(1, '2025-01-01', '2026-12-31', 1, 1), 
(1, '2025-01-01', '2026-12-31', 2, 1), 
(1, '2025-01-01', '2026-12-31', 3, 1);

-- 8. Pedidos
INSERT INTO pedidos (
    valor_productos, valor_envio, valor_descuento, valor_cupon, 
    impuestos, valor_impuestos, valor_final, calificacion, 
    id_tienda, direccion, valor_comision, id_user
) VALUES
(10000, 2000, 0, 0, 19, 1900, 13900, 5, 1, 'Calle Prueba 123', 1000, 1);

-- 9. Pedidos Productos
INSERT INTO pedidos_productos (cantidad, valor_unitario, valor_unitario_promocion, total_teorico, total_final, id_promocion, id_producto, id_pedido) VALUES
(56.000, 2000, 2000, 112000, 112000, 1, 1, 1), -- Gaseosa
(22.000, 5000, 5000, 110000, 110000, 1, 2, 1); -- Cerveza
