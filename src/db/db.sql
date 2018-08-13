CREATE DATABASE IF NOT exists company;

USE company;

CREATE TABLE employees(
	id INT(11) NOT NULL auto_increment,
    name varchar(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

insert into employees values 
(1, 'Kagura', 4500 ),
(2, 'Gin', 4000 ),
(3, 'Shin', 8500 );

select * from employees;

DESCRIBE employees;