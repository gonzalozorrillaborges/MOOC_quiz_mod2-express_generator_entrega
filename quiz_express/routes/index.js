var express = require('express');
var router = express.Router();

//METODO INDEX PARA ROUTER QUIZZES
var index = require('../controllers/quiz.js');
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
router.get('/quizzes', index.index);

module.exports = router;
