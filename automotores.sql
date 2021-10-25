-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 25-10-2021 a las 03:43:16
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `automotores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `automotores`
--

CREATE TABLE `automotores` (
  `placa` varchar(8) NOT NULL,
  `licencia de tránsito` varchar(50) NOT NULL,
  `Clase de Vehiculo` varchar(50) NOT NULL,
  `Numero de serie` varchar(50) NOT NULL,
  `Número de Motor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `automotores`
--

INSERT INTO `automotores` (`placa`, `licencia de tránsito`, `Clase de Vehiculo`, `Numero de serie`, `Número de Motor`) VALUES
('[MFL25F]', '[10019833518745]', '[MOTOCICLETA]', '[9FLA213NM20154P]', '[KLMNB48748754EDF]'),
('[MQG604]', '[100879562145]', '[AUTOMOVIL]', '[9FLJ1256487DSA]', '[JHGMN89754ASDF]'),
('[MYN83F]', '[10019832010]', '[MOTOCICLETA]', '[9FLA21352487TREGNM]', '[KLHG875421RTEDF]'),
('[QRN22D]', '[10012449508]', '[MOTOCICLETA]', '[9F2B51506FAC47122]', '[162FMJMQ288091]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `automotores`
--
ALTER TABLE `automotores`
  ADD PRIMARY KEY (`placa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
