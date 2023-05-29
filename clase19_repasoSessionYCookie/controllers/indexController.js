const { name } = require("ejs");
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
        let user = {
            email:form.email,
            name: form.username,
            password: form.password,
        }

        //Usar un método de Sequelize para guardar datos.
        db.User.create(user) //Pasar un objeto literal con los datos a guardar.
            .then(function(usuarioCreado){ //retorna el elemento creado
                //Dentro del then debería redireccionar a otra ruta.
                console.log(usuarioCreado);
                    // return res.send(form);
                return res.redirect('/movies');
            })
            .catch(function(e){
                console.log(e);
            })
    },
    login: function(req, res){
        //Si el usuario está logueado redirigirlo a home
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },
    processLogin: function(req, res){
        //Tengo que buscar los datos de la db.

        //Ponerlos en session.
        req.session.user = {
            email: "ale@dh.com",
            userName: "Ale"
        }
        //Preguntar si el usuario tildó el checkbox para recordarlo
        // return res.send (req.body);
        if(req.body.recordarme != undefined){
            res.cookie('cookieEspecial', 'el dato que quiero guardar', {maxAge: 1000*60*123123123})
        }

        return res.send(req.session)
        //Y si el usuario quiere, agregar la cookie para que lo recuerde.
        

        return res.send('procesando login');
    },
    logout: function(req, res){
        // destruir session
        req.session.destroy();

        //Destruyo la cookie

        return res.redirect('/');
    }

}

module.exports = indexController