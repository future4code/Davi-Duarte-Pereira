USE exercicios;

DESCRIBE correntistas;

-- item A -- 
SELECT primeiro_nome, email
FROM correntistas
WHERE pais = "Brazil" AND conta_corrente < 0;

-- item B --
SELECT primeiro_nome, genero
FROM correntistas
WHERE pais = "Peru" OR aniversario < "1990-01-01";

-- item C --
SELECT ultimo_nome
FROM correntistas
WHERE primeiro_nome LIKE "a%";

-- item D --
SELECT primeiro_nome, aniversario, conta_corrente
FROM correntistas
WHERE aniversario >= "2001-01-01" AND conta_corrente > 1000;

-- building structure from scratch -- 
DESCRIBE correntistas;

USE davi;

SHOW TABLES;

CREATE TABLE Correntistas (
id int(11) PRIMARY KEY,
primeiro_nome varchar(50) NULL,
ultimo_nome varchar(50) NULL,
email varchar(50) NULL,
genero varchar(50) NULL,
conta_corrente double NOT NULL,
pais varchar(50) NULL,
aniversario date NULL
);


INSERT INTO Correntistas (id, primeiro_nome, ultimo_nome, email, genero, conta_corrente, pais, aniversario)
VALUES (1231, "Davi", "Duarte", "davi@gmail.com", "M", 453043284, "Brazil", "2001-01-04"),
		(2324, "Astro", "Dev", "astroDev@gmail.com", "M", 1, "Space", "2019-09-07"),
		(3453, "Sarah", "Migliorini", "sarahM@gmail.com", "F", 23432523, "Brazil", "2000-10-11"),
		(4123, "Vinicius", "Morais", "viniMora@hotmail.com", "M", 10000, "Germany", "1991-12-09"),
		(54353, "Djinane", "Vieira", "naneVieira@outlook.com", "F", 5000, "United States", "1972-10-23");
		
	
