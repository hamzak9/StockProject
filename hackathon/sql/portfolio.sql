drop database portfolio;

CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE TABLE Portfolio (id int primary key auto_increment, stock varchar(25), amount int, cash double);

CREATE TABLE Stocks (id int primary key auto_increment, price double, quantity int, ticker varchar(25));
CREATE TABLE USERS (id int primary key auto_increment, cash double);
CREATE TABLE ORDERS (id int primary key auto_increment, type varchar(25), ticker varchar(25), total double, shares int, date date;


--/*insert into stocks values(9, 259.16, 'TSLA');
--insert into stocks values(10, 174.52, 'APPL');
--insert into stocks values(11, 316.49, 'MSFT');*/