CREATE TABLE `brand` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `categories` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `colour` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `orderdetails` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `OrderId` (`OrderId`),
  KEY `ProductId` (`ProductId`),
  CONSTRAINT `FK_orderdetails_order` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_orderdetails_products` FOREIGN KEY (`ProductId`) REFERENCES `products` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `orders` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `ShippingAdress` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_orders_users` (`UserId`),
  CONSTRAINT `FK_orders_users` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Sku` int(11) DEFAULT NULL,
  `Name` varchar(45) NOT NULL,
  `Price` int(11) NOT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `Size` int(11) NOT NULL,
  `BrandId` int(11) NOT NULL,
  `ColourId` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `CategoryId` (`CategoryId`),
  KEY `BrandId` (`BrandId`),
  KEY `ColourId` (`ColourId`),
  CONSTRAINT `FK_products_brand` FOREIGN KEY (`BrandId`) REFERENCES `brand` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_products_categories` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_products_colour` FOREIGN KEY (`ColourId`) REFERENCES `colour` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(8) NOT NULL,
  `UserName` varchar(16) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UserName` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
