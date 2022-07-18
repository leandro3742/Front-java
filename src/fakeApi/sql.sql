
-- USUARIOS
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'leandro@gmail.com', 'leandro', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', '123@gmail.com', 'Cintia', 1, 'ADMIN');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'cliente1@gmail.com', 'Cintia', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'cliente2@gmail.com', 'Cintia', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'cliente3@gmail.com', 'Ana', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'cliente4@gmail.com', 'Juan', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0, '123', 'cliente5@gmail.com', 'Miguel', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (0, 0, '123', 'cliente6@gmail.com', 'Lolo', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (0, 0, '123', 'cliente7@gmail.com', 'Lola', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES (1, 0,'123', 'cliente8@gmail.com', 'Juli', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES ( 1, 0, '123', 'cliente9@gmail.com', 'Julia', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES ( 1, 1, '123', 'cliente10@gmail.com', 'Maria', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES ( 1, 0, '123', 'cliente11@gmail.com', 'Mariana', 1, 'CLIENTE');
INSERT INTO `usuarios` (`activo`, `bloqueado`, `contrasenia`, `email`, `nombre`, `pago`, `tipo_usuario`) VALUES ( 1, 1, '123', 'cliente12@gmail.com', 'Sofia', 1, 'CLIENTE');

-- GENERADOR CONTENIDO
INSERT INTO `generadores_contenidos` (`contrasenia`,`precio`, `email`, `ganancia`, `metodo_pago`, `nombre`) VALUES ('123', 0,'generadorContenido@gmail.com', '0', 'Tarjeta ', 'generadorContenido1');
INSERT INTO `generadores_contenidos` (`contrasenia`,`precio`, `email`, `ganancia`, `metodo_pago`, `nombre`) VALUES ('123', 0,'netflix@gmail.com', '0', 'Tarjeta', 'Netflix');
INSERT INTO `generadores_contenidos` (`contrasenia`,`precio`, `email`, `ganancia`, `metodo_pago`, `nombre`) VALUES ('123', 0,'Disney@gmail.com', '0', 'Tarjeta', 'Disney+');
INSERT INTO `generadores_contenidos` (`contrasenia`,`precio`, `email`, `ganancia`, `metodo_pago`, `nombre`) VALUES ('123', 0,'crunchyroll@gmail.com', '0', 'Tarjeta', 'Crunchyroll');


-- SELECT * FROM contenidos c JOIN contenidos_categoria cc ON c.id = cc.contenido_id JOIN categorias cat ON cat.id = cc.categoria_id WHERE cat.nombre = "Ciencia Ficción" && c.tipo_contenido="SERIE"
-- PERSONAS ELENCO
INSERT INTO `personas` (`nombre`, `tipo_elenco`) VALUES
(1, 'Johnny Depp', 'ACTOR'),
(2, 'Cillian Murphy', 'ACTOR'),
(3, 'Millie Bobby Brown', 'ACTRIZ'),
(4, 'Jennifer Lopez', 'ACTRIZ'),
(5, 'Eduardo Franco', 'ACTOR'),
(6, 'Sadie Sink', 'ACTRIZ'),
(7, 'Clint Eastwood', 'DIRECTOR'),
(8, 'Martin Scorsese', 'DIRECTOR'),
(9, 'Carlos Rotenberg', 'PRODUCTOR');

-- CATEGORIAS
INSERT INTO `categorias` (`id`, `nombre`) VALUES
(NULL, 'Acción'),
(NULL, 'Aventuras'),
(NULL, 'Ciencia Ficción'),
(NULL, 'Comedia'),
(NULL, 'Drama'),
(NULL, 'Fantasía'),
(NULL, 'Terror');

-- CONTENIDOS
INSERT INTO `contenidos` (`id`, `activo`, `bloqueado`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '1', '0', 'Koaoa', '0', '02:05:56', 'https://imagenes.elpais.com/resizer/FlO3Q6Foq8OEJ08hJkTdyzeOUVg=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BG4MMMWM4JOPRSXMITTKA62MUY.jpg', 'COCO', '0', 'PELICULA', 'https://www.youtube.com/watch?v=A_g3lMcWVy0&list=RDA_g3lMcWVy0&start_radio=1', 1);
INSERT INTO `contenidos` (`id`, `activo`, `bloqueado`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '1', '0', 'Koaoa', '0', '02:05:56', 'https://es.web.img2.acsta.net/c_310_420/pictures/22/05/14/13/26/5638861.jpg', 'Stranger Things', '0','SERIE', 'https://www.youtube.com/watch?v=A_g3lMcWVy0&list=RDA_g3lMcWVy0&start_radio=1', 2);
INSERT INTO `contenidos` (`id`, `activo`, `bloqueado`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '1', '0', 'Dinosaurios', '0', '02:05:56', 'https://static.cinepolis.com/resources/mx/movies/posters/264x386/39182-772229-20220531044140.jpg', 'Dinosaurios', '0','PELICULA', 'https://www.youtube.com/watch?v=A_g3lMcWVy0&list=RDA_g3lMcWVy0&start_radio=1', 1);
INSERT INTO `contenidos` (`id`, `activo`, `bloqueado`, `comienzo`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '0', '0', NULL, 'El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora, su equipo debe enfrentarse a una amenaza que podría destruirlo todo.', '0', '02:05:56', 'https://static.wikia.nocookie.net/marvel/images/2/29/Doctor_Strange_en_el_Multiverso_de_la_Locura_P%C3%B3ster_003.jpg/revision/latest?cb=20220406150939&path-prefix=es', 'Doctor Strange', '0','PELICULA', 'https://youtu.be/mCg0V88W0Xw', 1);
INSERT INTO `contenidos` (`id`, `activo`, `bloqueado`, `comienzo`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '0', '0', NULL, 'El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora, su equipo debe enfrentarse a una amenaza que podría destruirlo todo.', '0', '02:05:56', 'https://static.wikia.nocookie.net/marveldatabase/images/4/41/Death_of_Doctor_Strange_Vol_1_4.jpg/revision/latest?cb=20211208004254','Dr. Stephen Strange', '0','PELICULA', 'https://youtu.be/mCg0V88W0Xw', 1);

INSERT INTO `contenidos` (`id`, `activo`,`bloqueado`, `comienzo`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`, `tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '0','0', NULL, 'ANIME', '0', '02:05:56', 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/5/7/4/2574f9070ce48b988fe2693a60c40427.jpg','Naruto', '0','SERIE', 'https://youtu.be/aDrsItJ_HU4', 2);
INSERT INTO `contenidos` (`id`, `activo`,`bloqueado`, `descripcion`, `destacado`, `duracion`, `foto_portada`, `nombre`, `precio`,`tipo_contenido`, `video`, `gc_id`) VALUES (NULL, '1', '0', 'Pelicula para niños', '0', '02:05:56', 'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg', 'ENCANTO', '0','PELICULA', 'https://www.youtube.com/watch?v=wTi8yLyHeb8', 2);

-- GENERADOR CONTENIDO CONTENIDO
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('1', '1');
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('1', '2');
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('1', '3');
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('1', '4');
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('1', '5');
INSERT INTO `generadores_contenidos_contenido` (`generador_contenido_id`, `contenido_id`) VALUES ('2', '6');

-- CONTENIDO CATEGORIA
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('1', '3');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('2', '3');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('2', '6');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('3', '1');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('3', '3');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('3', '6');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('4', '6');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('4', '4');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('5', '3');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('5', '1');
INSERT INTO `contenido_categoria` (`contenido_id`, `categoria_id`) VALUES ('6', '3');

-- SUSCRIPCION
INSERT INTO `suscripciones` (`id`, `fecha_vencimiento`, `monto`, `tipo_suscripcion`, `gc_id`, `usuario_id`) VALUES ('1', '2022/07/20', '200', 'MENSUAL', '1', '1');

-- RANKINGS
INSERT INTO `rankings` (`id`, `id_contenido`, `id_usuario`, `puntaje`) VALUES
(1, 1, 1, 5),
(2, 1, 2, 2),
(4, 1, 3, 5);

-- VISUALIZACIONES
INSERT INTO `visualizaciones` (`id`, `terminado`, `time`, `contenido_id`, `usuario_id`) VALUES ('1', '1', '20', '1', '1'), ('2', '1', '20', '1', '2');

-- CONTENIDO PERSONA
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('1', '9');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('1', '8');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('2', '1');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('2', '7');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('3', '7');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('3', '1');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('3', '5');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('4', '5');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('4', '9');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('5', '9');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('5', '1');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('5', '6');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('6', '3');
INSERT INTO `contenidos_persona` (`contenido_id`, `persona_id`) VALUES ('6', '9');
