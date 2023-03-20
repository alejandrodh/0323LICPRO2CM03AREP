let db = require('../db/index');

let productsController = {
    demo: function(req, res){
        return res.render("demo", {
            tituloPrincipal: "Página de demo desde dato variable y desde el controlador.",
            nombres:["Ale", "María", "Azu", "Ivanka"]
        }) //render es el método que permite llamar una vista.
    },
    index: function(req, res){
        return res.send(db.lista);
    },
    store:function(req, res){
        return res.send()
    },
    porMarca: function(req, res){
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
    },
    porColor:function(req, res){
        return res.send('Autos del color: ' + req.params.color)
    },
    porAnio:function(req, res){
        return res.send('Autos del año: ' + req.params.anio)
    }
}

module.exports = productsController