const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const readData = () => JSON.parse(fs.readFileSync(path.join(__dirname, '../data/sesiones.json'), 'utf-8'));

router.get('/', (req, res) => {
    res.json(readData());
});

module.exports = router;
