SHOW TABLES;

USE exercicios;

DESCRIBE funcionarios;

-- item A --
SELECT nome, salario
FROM funcionarios
WHERE genero="F" AND salario > 2000;

-- item B --
SELECT nome, data_contratacao
FROM funcionarios
WHERE local_de_trabalho = "salao" AND data_contratacao < "2004-01-01";

-- item C --  
SELECT nome, data_nascimento
FROM funcionarios
WHERE nome LIKE "%ei%";

-- item D --
SELECT nome, salario, data_nascimento
FROM funcionarios
WHERE data_nascimento <= "1998-12-15" AND salario > 1300;

-- creating a new table from scratch --
USE davi;


CREATE TABLE Funcionarios (
id int PRIMARY KEY,
name varchar(255) NOT NULL,
salary double NOT NULL,
work_place varchar(255) NOT NULL,
contract_date date NOT NULL,
genre varchar(1) NOT NULL,
birthday date NOT NULL
);

DESCRIBE Funcionarios;

INSERT INTO Funcionarios (id, name, salary, work_place, contract_date, genre, birthday)
VALUES (1, "Davi Duarte", 6500.00, "Nubank", "2019-04-10", "M", "2001-01-04"); 

SELECT * FROM Funcionarios;






