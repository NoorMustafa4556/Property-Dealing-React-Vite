-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2025 at 08:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `property_dealing`
--

-- --------------------------------------------------------

--
-- Table structure for table `properties_detail`
--

CREATE TABLE `properties_detail` (
  `id` int(11) NOT NULL,
  `property_type` text NOT NULL,
  `size` float NOT NULL,
  `nature` text NOT NULL,
  `price` float NOT NULL,
  `owner_name` text NOT NULL,
  `email` text NOT NULL,
  `demand` int(11) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `properties_detail`
--

INSERT INTO `properties_detail` (`id`, `property_type`, `size`, `nature`, `price`, `owner_name`, `email`, `demand`, `Date`) VALUES
(1, 'Residential', 5, 'For Sale', 700000, 'Ali Khan', 'alikhan@gmail.com', 50000, '2025-01-08 08:37:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `properties_detail`
--
ALTER TABLE `properties_detail`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `properties_detail`
--
ALTER TABLE `properties_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
