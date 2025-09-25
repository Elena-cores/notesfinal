var express = require('express');
var router = express.Router();
const database = require('../database');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('table', { user: req.session.user});
});

module.exports = router;
*/

// router.get('/', function(req, res, next) {
/* GET users table page. */
router.get('/', async function(req, res, next) {
  try {
    
    await new Promise(resolve => setTimeout(resolve, 500)); //porque no funcionaba se añadio

    // users.data es un objeto, necesitamos convertirlo a array
    const usersData = database.users.data;
    const usersArray = Object.values(usersData);
    
    console.log('Users data:', usersData);
    console.log('Users array:', usersArray);
    
    res.render('table', { 
      title: "Users Table", 
      user: req.session.user, 
      users: usersArray 
    });
    
  } catch (error) {
    console.error('Error loading users table:', error);
    res.render('table', { 
      title: "Users Table", 
      user: req.session.user, 
      users: [] 
    });
  }
});
module.exports = router;