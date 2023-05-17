var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);
router.get('/register',indexController.register); //Mostrar el form de registro.

router.post('/register', indexController.store); //Guarda al usuario en la base de datos.

module.exports = router;
