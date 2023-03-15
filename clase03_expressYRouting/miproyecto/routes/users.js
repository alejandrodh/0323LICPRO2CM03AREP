var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  return res.send('respond with a resource');
});
router.get('/profile', function(req, res){
  return res.send('Estás en tu perfil')
});
router.get('/profile/edit/:manzana', function(req, res){
  //Escribimos el código que necesitemos
  return res.send('Formulario para editar el perfil de ' + req.params.manzana);
})


module.exports = router;
