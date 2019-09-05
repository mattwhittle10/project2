DROP DATABASE IF EXISTS storage_db;
CREATE DATABASE storage_db;
USE storage_db;

CREATE TABLE customers (
customer_id  INTEGER NOT NULL AUTO_INCREMENT,
first_name  VARCHAR(45) NOT NULL,
last_name  VARCHAR(45) NOT NULL,
username VARCHAR(45),
email_address VARCHAR(75),
phone_number   VARCHAR(20),
host_rating INTEGER NOT NULL DEFAULT 0,
first_time_login BOOLEAN NOT NULL DEFAULT TRUE,
google_id VARCHAR (255),
thumbnail VARCHAR(255),
PRIMARY KEY (customer_id)
);

CREATE TABLE products (
product_id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(60) NOT NULL,
img_url VARCHAR(300) NOT NULL,
address VARCHAR(30) NOT NULL,
city varchar(20) NOT NULL,
state varchar(2) NOT NULL,
zip int(10)NOT NULL,
available BOOLEAN NOT NULL DEFAULT TRUE,
price INTEGER(5) NOT NULL,
category VARCHAR (30) NOT NULL,
secure BOOLEAN NOT NULL,
description VARCHAR(250) NOT NULL,
customer_id  INTEGER ,
PRIMARY KEY(product_id),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

CREATE TABLE products_archive (
product_id INTEGER NOT NULL,
title VARCHAR(60) NOT NULL,
img_url VARCHAR(300) NOT NULL,
address VARCHAR(30) NOT NULL,
city varchar(20) NOT NULL,
state varchar(2) NOT NULL,
zip int(10)NOT NULL,
available BOOLEAN NOT NULL DEFAULT TRUE,
price INTEGER(5) NOT NULL,
category VARCHAR (30) NOT NULL,
secure BOOLEAN NOT NULL,
description VARCHAR(250) NOT NULL,
customer_id  INTEGER 
);




