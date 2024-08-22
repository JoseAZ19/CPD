const express = require('express');
const path = require('path');

const app = express();

// Usar el puerto proporcionado por el entorno o el 80 por defecto
const port = process.env.PORT || 80;

// Definir la carpeta "public" como la carpeta para archivos estáticos
app.use(express.static(path.join(__dirname, 'Public')));

// Ruta para servir la página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html')); // Asegúrate de que este archivo exista
});

// Manejo básico de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});