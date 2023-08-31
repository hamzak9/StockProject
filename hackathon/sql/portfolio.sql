drop database portfolio;

CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

-- CREATE TABLE Portfolio (id int primary key auto_increment, stock varchar(25), amount int, cash double);

-- CREATE TABLE Stocks (id int primary key auto_increment, price double, quantity int, ticker varchar(25));
-- CREATE TABLE USERS (id int primary key auto_increment, cash double);
CREATE TABLE ORDERS (id int primary key auto_increment, type varchar(25), ticker varchar(25), total double, shares int, date date);

INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (1, '2023-08-29 15:09:03.105887', 15, 'AAPL', 2766.372, 'Buy');

-- Insert the second record
INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (2, '2023-08-29 16:13:06.997371', 1, 'BIG', 7.95, 'Buy');

-- Insert the third record
INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (3, '2023-08-29 16:14:26.269063', 1, 'BIG', 7.95, 'Sell');

-- Insert the fourth record
INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (4, '2023-08-29 20:07:01.279413', 15, 'AAPL', 3857.7000000000003, 'Buy');

-- Insert the fifth record
INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (5, '2023-08-29 20:11:14.113902', 15, 'AAPL', 3857.7000000000003, 'Buy');

-- Insert the sixth record
INSERT INTO orders (id, date, shares, ticker, total, type)
VALUES (6, '2023-08-29 20:12:01.435786', 15, 'TSLA', 3857.7000000000003, 'Buy');

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