const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Definir la carpeta "public" como la carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, 'Public')));

// Ruta para servir la página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'MainPage.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});