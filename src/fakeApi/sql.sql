-- CATEGORIAS --
INSERT INTO categorias(nombre) VALUES('Accion');
INSERT INTO categorias(nombre) VALUES('Destacado');
INSERT INTO categorias(nombre) VALUES('Lo mas visto');
INSERT INTO categorias(nombre) VALUES('Favoritos en Mantel');
INSERT INTO categorias(nombre) VALUES('Agregados recientemente');

-- GENERADORES DE CONTENIDO --
INSERT INTO generadores_contenidos(nombre, email, contrasenia, ganancia, precio, metodo_pago) VALUES('HBO', 'hbo@gmail.com', '1234', 0, 499, 'Tarjeta');
INSERT INTO generadores_contenidos(nombre, email, contrasenia, ganancia, precio, metodo_pago) VALUES('FOX', 'fox@gmail.com', '1234', 0, 200, 'Tarjeta');
INSERT INTO generadores_contenidos(nombre, email, contrasenia, ganancia, precio, metodo_pago) VALUES('ESPN', 'espn@gmail.com', '1234', 0, 150, 'Tarjeta');
INSERT INTO generadores_contenidos(nombre, email, contrasenia, ganancia, precio, metodo_pago) VALUES('DISNEY', 'disney@gmail.com', '1234', 0, 388, 'Tarjeta');

-- CONTENIDO --
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion .....', 0, '01:05:00', 0, 'PELICULA', 1, 'data:image/jpeg;base64,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');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion 1233.....', 0, '01:15:00', 0, 'PELICULA', 2,'data:image/jpeg;base64,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');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripciondssas .....', 0, '01:05:00', 0, 'PELICULA', 1,'');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion .....', 0, '01:05:00', 0, 'PELICULA', 2,'');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion .....', 0, '01:05:00', 0, 'PELICULA', 3,'');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion .....', 0, '01:05:00', 0, 'PELICULA', 1,'');
INSERT INTO contenidos(bloqueado, ranking, descripcion, destacado, duracion, precio, tipo_contenido, gc_id, foto_portada) VALUES(0, 0, 'descripcion .....', 0, '01:05:00', 0, 'PELICULA', 2,'');

-- CONTENIDO_CATEGORIA --
INSERT INTO contenido_categoria(contenido_id, categoria_id) VALUES(2,1);
INSERT INTO contenido_categoria(contenido_id, categoria_id) VALUES(4,1);
INSERT INTO contenido_categoria(contenido_id, categoria_id) VALUES(6,1);
INSERT INTO contenido_categoria(contenido_id, categoria_id) VALUES(4,2);
INSERT INTO contenido_categoria(contenido_id, categoria_id) VALUES(6,2);
