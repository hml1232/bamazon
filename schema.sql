SELECT * FROM products;


CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	itemId INT AUTO_INCREMENT,
	productName VARCHAR(60) NOT NULL,
	departmentName VARCHAR(60),
	price DECIMAL (10,2),
	stock_quantity INT NOT NULL,
	PRIMARY KEY (itemId)
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(111, "snickers", "candy", 1.50, 50);
VALUES(222, "gummy bears", "candy", 2.00, 30);
VALUES(333, "twix", "candy", 3.00, 40);
VALUES(444, "twizzlers", "candy", 2.00, 30);
VALUES(555, "sour patch kids", "candy", 2.00, 50);
VALUES(666, "swedish fish", "candy", 5.00, 40);
VALUES(777, "gummy worms", "candy", 2.00, 50);
VALUES(888, "hershey's chocolate bar", "candy", 3.00, 30);
VALUES(999, "milky way", "candy", 3.00, 40);
VALUES(900, "m&m's", "candy", 2.00, 50);