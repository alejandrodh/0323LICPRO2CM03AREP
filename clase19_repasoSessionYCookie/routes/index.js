var express = require('express');
var router = express.Router();
let indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);
router.get('/register',indexController.register); //Mostrar el form de registro.
router.get('/login', indexController.login) //Mostrar form de login

router.post('/register', indexController.store); //Guarda al usuario en la base de datos.
router.post('/login', indexController.processLogin) //Mostrar form de login


module.exports = router;
