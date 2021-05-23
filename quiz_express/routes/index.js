var express = require('express');
var router = express.Router();

//METODO INDEX PARA ROUTER QUIZZES
var index = require('../controllers/quiz.js').index;
//let index_2 = new index();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Credits */
router.get('/credits', function(req, res, next){
  res.render('credits', { title: 'Credits' });
});

/* GET Quizzes */
//Se crea el router para manejar la ruta quizzes con el metodo index importado de controllers/quiz.js
router.get('/quizzes', index);

module.exports = router;
