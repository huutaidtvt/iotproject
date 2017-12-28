-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2017 at 09:11 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mqtt`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbldieukhien`
--

CREATE TABLE `tbldieukhien` (
  `id` int(11) NOT NULL,
  `MaThietBi` int(11) NOT NULL,
  `DieuKhien` int(11) NOT NULL,
  `ThoiGianDieuKhien` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbllogao`
--

CREATE TABLE `tbllogao` (
  `id` int(11) NOT NULL,
  `MaAo` int(11) NOT NULL,
  `NoiDung` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `NguoiQuanLy` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ThoiGianGhi` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblqlao`
--

CREATE TABLE `tblqlao` (
  `MaAo` int(11) NOT NULL,
  `TenAo` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PhanLoai` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TrangThaiAo` int(11) NOT NULL,
  `ThoiGianNuoi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblthietbi`
--

CREATE TABLE `tblthietbi` (
  `MaThietBi` int(11) NOT NULL,
  `MaAo` int(11) NOT NULL,
  `DonViDo` varchar(50) NOT NULL,
  `TenThietBi` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `NguongDuoi` int(11) NOT NULL,
  `NguongTren` int(11) NOT NULL,
  `ThoiGian` date NOT NULL,
  `KetNoi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblthongso`
--

CREATE TABLE `tblthongso` (
  `id` int(11) NOT NULL,
  `MaThietBi` int(11) NOT NULL,
  `GiaTri` int(11) NOT NULL,
  `ThoiGianDo` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbldieukhien`
--
ALTER TABLE `tbldieukhien`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbllogao`
--
ALTER TABLE `tbllogao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblqlao`
--
ALTER TABLE `tblqlao`
  ADD PRIMARY KEY (`MaAo`);

--
-- Indexes for table `tblthietbi`
--
ALTER TABLE `tblthietbi`
  ADD PRIMARY KEY (`MaThietBi`);

--
-- Indexes for table `tblthongso`
--
ALTER TABLE `tblthongso`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbldieukhien`
--
ALTER TABLE `tbldieukhien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbllogao`
--
ALTER TABLE `tbllogao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblqlao`
--
ALTER TABLE `tblqlao`
  MODIFY `MaAo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblthongso`
--
ALTER TABLE `tblthongso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
