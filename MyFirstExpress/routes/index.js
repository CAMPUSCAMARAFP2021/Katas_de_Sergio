var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pepe' });
});


router.get('/inicio', (req, res, next) =>{
  res.render('movie',
  {
    title:'Primera vista',
    page:'Pagina variable'
  });
});

module.exports = router;



