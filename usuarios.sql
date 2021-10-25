-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 17-10-2021 a las 04:20:54
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
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `contrasena` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `usuario`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES
(1, '[sgonzales70]', '[Speedy]', '[Gonzales]', '[sgonzales70@looneytones.com.mx]', '[mouse123]'),
(2, '[agente007]', '[James]', '[bond]', '[jamesbond@agente007.com]', '[Golden123]'),
(3, '[minniemouse]', '[Minnie]', '[Mouse]', '[minniemouse@disneylatino.com]', '[House012]'),
(4, '[mickeymouse80]', '[Mickey]', '[Mouse]', '[mickeymouse@disneylatino.com]', '[House321]'),
(5, '[merymoon2000]', '[Mery]', '[Moon]', '[merymoon@club10.com.co]', '[Sweetcat123]'),
(6, '[elsa2008]', '[Elsa]', '[Frozen]', '[elsafrozen@disneylatino.com]', '[olaf543]'),
(7, '[aureliowow]', '[Aurelio]', '[Cheverony]', '[aureliocheverony@club10.com.co]', '[lobitorojo321]'),
(8, '[nbaez1991]', '[Nairo]', '[Baez]', '[nbaez@corposalud.edu.co]', '[enfermero2803]'),
(9, '[jdalvira]', '[Diego]', '[Alvira]', '[jdalvira@caracoltv.com.co]', '[CaracolTV012]'),
(10, '[hannafrozen]', '[Hanna]', '[Frozen]', '[hannafrozen@disneylatino.com]', '[Castillo567]'),
(11, '[ppicapiedra]', '[Pedro]', '[Picapiedra]', '[ppicapiedra@yabbadabbadoo.com]', '[Pebbles000]'),
(12, '[sheriffwoody]', '[Woody]', '[Pride]', '[woodypride@toystory.com]', '[Pixar001]'),
(13, '[mwazowski]', '[Mike]', '[Wazowski]', '[mwazowski@toystory.com]', '[Pixar321]'),
(14, '[sullivan14]', '[James]', '[Sullivan]', '[jsullivan@monsters.com]', '[Sulley000]'),
(15, '[geppetto]', '[Geppetto]', '[collodi]', '[geppetto@disneypixar.com]', '[pinocho321]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
