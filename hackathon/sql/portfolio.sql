drop database conygreportfolio;

CREATE DATABASE IF NOT EXISTS conygreportfolio;
USE conygreportfolio;

CREATE TABLE Portfolio (id int primary key auto_increment, stock varchar(25), amount int, cash double);

CREATE TABLE Stocks (id int primary key auto_increment, price double, ticker varchar(25));


--/*insert into stocks values(9, 259.16, 'TSLA');
--insert into stocks values(10, 174.52, 'APPL');
--insert into stocks values(11, 316.49, 'MSFT');*/