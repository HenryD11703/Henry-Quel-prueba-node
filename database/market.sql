CREATE DATABASE IF NOT EXISTS market;
USE market;

CREATE TABLE tiendas (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  estado TINYINT UNSIGNED NOT NULL,
  nombre VARCHAR(30) NOT NULL,
  descripcion VARCHAR(500),
  telefono VARCHAR(20),
  direccion VARCHAR(120),
  direccion_anexo VARCHAR(40),
  direccion_barrio VARCHAR(25),
  calificacion DECIMAL(3,2) NOT NULL,
  calificacion_cantidad MEDIUMINT UNSIGNED NOT NULL,
  impuestos TINYINT UNSIGNED NOT NULL,
  dias_trabajados VARCHAR(21)
);

CREATE TABLE categorias (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30) NOT NULL,
  adultos TINYINT UNSIGNED NOT NULL
);

CREATE TABLE promociones (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  estado TINYINT UNSIGNED NOT NULL,
  nombre VARCHAR(40) NOT NULL,
  imagen VARCHAR(120),
  porcentaje TINYINT UNSIGNED NOT NULL,
  dias_semana VARCHAR(21)
);

CREATE TABLE productos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  estado TINYINT UNSIGNED NOT NULL,
  kit TINYINT UNSIGNED NOT NULL,
  barcode VARCHAR(30),
  nombre VARCHAR(60) NOT NULL,
  presentacion VARCHAR(25),
  descripcion VARCHAR(500),
  foto VARCHAR(120),
  peso DECIMAL(6,2) NOT NULL
);

CREATE TABLE tiendas_promociones (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  estado TINYINT UNSIGNED NOT NULL,
  inicio DATE,
  fin DATE,
  id_tienda SMALLINT UNSIGNED NOT NULL,
  id_promocion MEDIUMINT UNSIGNED NOT NULL,
  FOREIGN KEY (id_tienda) REFERENCES tiendas(id),
  FOREIGN KEY (id_promocion) REFERENCES promociones(id)
);

CREATE TABLE productos_stocks (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cantidad DECIMAL(8,3) NOT NULL,
  id_tienda SMALLINT UNSIGNED NOT NULL,
  id_producto INT UNSIGNED NOT NULL,
  fecha_ingreso DATE,
  FOREIGN KEY (id_tienda) REFERENCES tiendas(id),
  FOREIGN KEY (id_producto) REFERENCES productos(id)
);

CREATE TABLE productos_categorias (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_categoria SMALLINT UNSIGNED NOT NULL,
  id_producto INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id),
  FOREIGN KEY (id_producto) REFERENCES productos(id)
);

CREATE TABLE pedidos (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  instrucciones VARCHAR(500),
  entrega_fecha DATE,
  valor_productos DECIMAL(12,3) UNSIGNED NOT NULL,
  valor_envio DECIMAL(10,3) UNSIGNED NOT NULL,
  valor_descuento DECIMAL(12,3) UNSIGNED,
  valor_cupon DECIMAL(11,3) UNSIGNED,
  impuestos TINYINT UNSIGNED NOT NULL,
  valor_impuestos DECIMAL(11,3) UNSIGNED,
  valor_final DECIMAL(12,3) UNSIGNED NOT NULL,
  calificacion DECIMAL(3,2),
  id_tienda SMALLINT UNSIGNED NOT NULL,
  direccion VARCHAR(160),
  valor_comision DECIMAL(11,3),
  id_user MEDIUMINT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_tienda) REFERENCES tiendas(id)
);

CREATE TABLE pedidos_productos (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cantidad DECIMAL(9,3) NOT NULL,
  valor_unitario DECIMAL(11,3) UNSIGNED NOT NULL,
  valor_unitario_promocion DECIMAL(11,3) UNSIGNED, 
  total_teorico DECIMAL(12,3) UNSIGNED,
  total_final DECIMAL(12,3) UNSIGNED NOT NULL,
  id_promocion MEDIUMINT UNSIGNED,
  id_producto INT UNSIGNED NOT NULL,
  id_pedido MEDIUMINT UNSIGNED NOT NULL,
  FOREIGN KEY (id_promocion) REFERENCES promociones(id),
  FOREIGN KEY (id_producto) REFERENCES productos(id),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id)
);