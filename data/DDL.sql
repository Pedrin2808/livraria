# DATA DEFINITION LANGUAGE

DROP DATABASE IF EXISTS LivrariaMinha;

CREATE DATABASE LivrariaMinha;

USE LivrariaMinha;

CREATE TABLE tb_livro (
	id int primary key auto_increment not null,
    titulo varchar(255) not null,
    autor varchar(255) not null,
    capa_url varchar(255) not null
);

CREATE TABLE tb_usuario (
	id int primary key auto_increment not null,
    usuario varchar(255) not null,
    senha varchar(255) not null
);

