CREATE DATABASE `sneakers`;
USE `sneakers`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO `categories` VALUES (1,'Deportivas'),(2,'Urbanas');


CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(900) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;


INSERT INTO `products` VALUES 
(1,'Adidass Forum 84 White','La leyenda regresa. Dominaron las canchas de básquet en los 80 e se hicieron notar en las calles. ¿Estás listo? Sin lugar a dudas. Ponete estas zapatillas adidas Forum de corte alto y sentí el ADN basquetbolero con cada uno de tus pasos. Todos los elementos clásicos están presentes. La icónica tira de ajuste en el tobillo, el detalle en X y el cuero prémium. Hazlas tuyas.',1000,'Adidas-Forum-84-Hi-White-Gold-Foil.jpg',1),
(2,'Adidas Forum Buckle Bad Bunny Blue','El lanzamiento más esperado del año finalmente arriba con un mensaje de felicidad y dulzura acompañando el espíritu navideño. Las adidas Forum Buckle Low Bunny Blue, sucesoras de las “The First Café” x Bad Bunny, se presentan en una versión completamente rosa con el contraste proporcionado por diferentes materiales y texturas.  Los detalles que representan al conejo malo en esta increíble asociación, como el logo del tercer ojo de Bad Bunny en la lengüeta,  la frase "YO VISTO ASí" en la tira interior y el tobillo. Se ven acompañados de cordones azul pastel y verde con un estilo navideño. Por último, una suela de goma  con paredes laterales semitranslúcidas con dibujos de conejo remata el diseño. ',300,'Adidas-Forum-Buckle-Low-Bad-Bunny-Blue-Tint.jpg',2),
(3,'Adidas Forum Buckle Bad Bunny Back to school','Los detalles que representan al conejo malo en esta increíble asociación, como el logo del tercer ojo de Bad Bunny en la lengüeta,  la frase "YO VISTO ASí" en la tira interior y el tobillo. Color Negras',75000,'adidas-Forum-Low-Bad-Bunny-Back-to-School-1.jpg',2),
(4,'Adidas NMD R1 Core','Destácate en la selva de cemento. Inspiradas en un famoso modelo de running de adidas de los 80, estas zapatillas NMD_R1 brindan un ajuste tipo media gracias a su exterior de sujeción tejido. La amortiguación con retorno de energía BOOST brinda comodidad en todo momento, y las distintivas inserciones en la mediasuela las hacen 100% NMD. Si todo esto no fuera suficiente para atraer todas las miradas, con seguridad los colores chic lo harán.',40000,'adidas-NMD-R1-Core-Black-Lush-Red-2015-2017.jpg',1),
(5,'Adidas Yeezy Boost 350 V2','Al igual que muchas de las 350 V2 que hemos visto en años anteriores, esta próxima variación tiene un estilo de dos tonos. Una tonalidad negra y cruda es la que más destaca en estas zapatillas de estilo de vida, ya que se proyecta sobre la base PrimeKnit de la parte superior, los cordones, el forro interior y la tradicional marca SPLY-350 en el lateral. Las franjas laterales de monofilamento teñidas a posteriori se rellenan con un tono Dazzling Blue para dar a las zapatillas un toque de color atrevido. La entresuela acanalada tiene un tono gris carbón y alberga la habitual espuma amortiguadora BOOST en su interior.',14000,'adidas-Yeezy-Boost-350-V2-Dazzling-Blue.jpg',1);


CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;






