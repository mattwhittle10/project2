DROP DATABASE IF EXISTS storageApp_db;
CREATE DATABASE storageApp_db;
USE storageApp_db;

-- ***Matt, can we change "products" to "listings"? Let me know what you think! Calli***

CREATE TABLE products (
  product_id int AUTO_INCREMENT NOT NULL,
  title VARCHAR(60) NOT NULL,
  img_url VARCHAR NOT NULL,
  location VARCHAR(30) NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  price INTEGER(10) NOT NULL,
  category VARCHAR (30) NOT NULL,
  secure BOOLEAN NOT NULL,
  description VARCHAR(250) NOT NULL,
  PRIMARY KEY(product_id),
  FOREIGN KEY (product_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

CREATE TABLE customers (
  customer_id  INT NOT NULL AUTO_INCREMENT,
  first_name  VARCHAR(45) NOT NULL,
  last_name  VARCHAR(45) NOT NULL,
  email_address VARCHAR(75) NOT NULL ,
  phone_number   VARCHAR(11),
  host_rating INT NOT NULL DEFAULT 0,
  first_time_login BOOLEAN NOT NULL DEFAULT true,
  google_id VARCHAR (255),
  PRIMARY KEY (customer_id)
);

-- ***alternative idea instead of type***

-- indoor BOOLEAN DEFAULT false,
-- secure BOOLEAN DEFAULT false, 
-- full_time_access BOOLEAN DEFAULT false, 
-- monitored BOOLEAN DEFAULT false, 
--temp_controlled BOOLENA DEFAULT false

-- # of trues /5 would be their listings rating. 
-- all of these need be be true to get a 5 star listing.
-- add these options when making the add-property form.




