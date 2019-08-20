DROP DATABASE IF EXISTS storageApp_db;
CREATE DATABASE storageApp_db;
USE storageApp_db;

CREATE TABLE customers (
  customer_id  INT NOT NULL AUTO_INCREMENT,
  first_name  VARCHAR(45) NOT NULL,
  last_name  VARCHAR(45) NOT NULL,
  email_address VARCHAR(75) NOT NULL ,
  phone_number   VARCHAR(11),
  host_rating INT NOT NULL,
  first_time_login BOOLEAN NOT NULL DEFAULT TRUE,
  google_id VARCHAR (255),
  PRIMARY KEY (customer_id)
);

DROP DATABASE IF EXISTS spaces_db;
CREATE DATABASE spaces_db;
USE spaces_db;

CREATE TABLE products (
  product_id int AUTO_INCREMENT NOT NULL,
  title varchar(60) NOT NULL,
  img varbinary(max),
  location varchar(30) NOT NULL,
  available BOOLEAN,
  price INTEGER(1000) NOT NULL,
  category varchar (30) NOT NULL,
  description varchar(250) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES customers(customer_id),
  PRIMARY KEY(product_id)
);