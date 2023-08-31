drop database conygreportfolio;

CREATE DATABASE IF NOT EXISTS conygreportfolio;
USE conygreportfolio;

CREATE TABLE Portfolio (id int primary key auto_increment, stock varchar(25), amount int, cash double);

CREATE TABLE Stocks (id int primary key auto_increment, price double, ticker varchar(25));


--/*insert into stocks values(9, 259.16, 'TSLA');
--insert into stocks values(10, 174.52, 'APPL');
--insert into stocks values(11, 316.49, 'MSFT');*/

insert into users values(2, 230.00);
insert into users values(3, 1230.00);
insert into users values(4, 937.11);
insert into users values(5, 1000000.23);
insert into users values(6, 13.99);
insert into users values(7, 81110.10);
insert into users values(8, 123.31);