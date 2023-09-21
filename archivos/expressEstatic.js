// Importas los módulos necesarios
const express = require('express');
const path = require('path');

// Creas una instancia de express
const app = express();

// Selecciona el puerto donde deseas que escuche tu servidor
const port = 3000;

// Usa la función middleware de Express para servir los archivos estáticos
// el método "join" te permite unir segmentos de rutas a directorios
app.use(express.static(path.join(__dirname, 'public')));

// Levanta el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`);
});
