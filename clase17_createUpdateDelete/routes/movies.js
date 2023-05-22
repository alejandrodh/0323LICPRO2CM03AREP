var express = require('express');
var router = express.Router();
let movieController = require("../controllers/movieController")

/* GET home page. */
router.get('/', movieController.index);
router.get('/id/:id', movieController.show);

router.post('/delete', movieController.delete); //Ruta para usar si tengo en el form un campo hidden con el valor del id que quiero borrar.
// router.post('/delete/id/:id', movieController.delete) //Ruta para usar si voy a pasar el id por parametro en la ruta.

module.exports = router;
