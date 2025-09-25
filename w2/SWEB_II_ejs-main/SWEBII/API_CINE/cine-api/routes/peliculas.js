const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const readData = () => JSON.parse(fs.readFileSync(path.join(__dirname, '../data/peliculas.json'), 'utf-8'));

// Obtener todas las películas
router.get('/', (req, res) => {
    res.json(readData());
});

// Obtener una película por ID
router.get('/:id', (req, res) => {
    const peliculas = readData();
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));
    if (!pelicula) return res.status(404).json({ error: 'Película no encontrada' });
    res.json(pelicula);
});

module.exports = router;
