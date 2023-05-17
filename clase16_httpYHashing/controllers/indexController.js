let db = require("../database/models");
let op = db.Sequelize.Op;

let indexController = {
    index: function(req, res){
        return res.render('index'); 
    },
    search: function(req, res){
        let aBuscar = req.query.buscar;
        //Usar un método de sequelize para obtener los datos.

            //Dentro del then, renderizar la vista y mostrar la información.

        return res.send(aBuscar);
    },
    register: function(req, res){
        return res.render('register');
    },
    store: function(req, res){
        let form = req.body

        //Encriptar la contraseña antes de guardar en la base de datos.

        //Usar un método de Sequelize para guardar datos.

            //Dentro del then debería redireccionar a otra ruta.

        // return res.send(form);
        return res.redirect('/movies');

    }

}

module.exports = indexController