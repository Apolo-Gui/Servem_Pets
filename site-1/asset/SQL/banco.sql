CREATE DATABASE servem_pets db_project;

USE db_project;

CREATE TABLE IF NOT EXISTS Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Email VARCHAR(50),
    dt_Nasc DATE,
    CEP VARCHAR(10),
    CPF VARCHAR(14),
    Telefone VARCHAR(20),
    senha VARCHAR(50)
);