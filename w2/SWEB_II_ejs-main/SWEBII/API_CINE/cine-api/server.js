const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Importar rutas
const peliculasRoutes = require('./routes/peliculas');
const sesionesRoutes = require('./routes/sesiones');
const salasRoutes = require('./routes/salas');
const reservasRoutes = require('./routes/reservas');

app.use('/api/peliculas', peliculasRoutes);
app.use('/api/sesiones', sesionesRoutes);
app.use('/api/salas', salasRoutes);
app.use('/api/reservas', reservasRoutes);

app.get('/', (req, res) => {
    res.send('API de Cine funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
