var express = require('express');
var router = express.Router();
const users = require('../users');  // Ajusta la ruta

router.get('/', function(req, res, next) {
    // Convertir el objeto users en array
    const usersArray = Object.values(users);
    
    res.render('table', { 
        title: "Users Table", 
        users: usersArray,
        user: req.session.user // Pasar el usuario de la sesión
    });
});

module.exports = router;