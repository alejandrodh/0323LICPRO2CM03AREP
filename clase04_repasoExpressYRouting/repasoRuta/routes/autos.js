let express = require('express'); 
let router = express.Router();
let db = require('../db/index');

router.get('/', function(req, res){
    return res.send(db.lista);
});

router.get('/marca/:marca', function(req, res){
    //obtener el parámetro
    let marca = req.params.marca
    let resultado = []
    //for que recorra el array
    for (let i=0; i<db.lista.length; i++){
        //Condicional que mire la marca del auto vs el parámetro
        if (db.lista[i].marca == marca){
            resultado.push(db.lista[i])
        }
    }
    return res.send(resultado);
});

router.get('/color/:color', function(req, res){
    return res.send('Autos del color: ' + req.params.color)
});

router.get('/anio/:anio', function(req, res){
    return res.send('Autos del año: ' + req.params.anio)
});





module.exports = router;