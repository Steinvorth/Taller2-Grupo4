const express = require('express');
const mysql = require('mysql2');

const app = express();

// coneccion a la db
const db = mysql.createConnection({
    host: 'localhost', // Host del MySQL
    user: 'root', // usuario del MySQL
    password: '123456789', // Password
    database: 'CompanyDB' // Nombre de la DB
});

// Verifica si la conexión fue exitosa o no
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Ruta que hace un query a la base de datos y devuelve los resultados en formato JSON
app.get('/', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Database query failed' });
            return;
        }
        res.json(results);
    });
});

// Start the server on port 3000
app.listen(3004, () => {
    console.log('Server is running on http:localhost:3004/');
});
