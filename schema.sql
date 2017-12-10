DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	unique_id INT(10) NOT NULL AUTO_INCREMENT,
	item_name VARCHAR(60) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock INT(10) NULL,
	department VARCHAR(20) NULL,
	PRIMARY KEY(id)
);

