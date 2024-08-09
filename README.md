# Taller2-Grupo4
Taller 2 de grupo 4 Servicios Web

usa MySQL: npm install mysql2

Tabla:
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Salary DECIMAL(10, 2)
);

Insertar datos:

INSERT INTO Employees (FirstName, LastName, Email, Salary)
VALUES
('Juanito', 'Perez', 'jperez@example.com', 50000.00),
('Pedro', 'Picapiedra', 'ppiedra@example.com', 60000.00),
('Sofia', 'Mora', 'sofmora@example.com', 55000.00),
('Emily', 'Cano', 'emily_cano@example.com', 62000.00),
('David', 'Taylor', 'david.taylor@example.com', 58000.00);

Stored Procedure:
CREATE PROCEDURE GetEmployees()
BEGIN
    SELECT * FROM Employees;
END;