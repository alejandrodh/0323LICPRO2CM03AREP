let db = require("../database/models");
let op = db.Sequelize.Op;

let indexController = {
    index: function(req, res){
        db.Movie.findAll()
            .then( function(moviesAll){
                //return res.send(moviesAll);
                return res.render('movies', {movies: moviesAll});
            })
            .catch( function(error){
                console.log(error);
            })
 
    },
        show: function(req, res){
            let id = req.params.id;
            db.Movie.findByPk(id, {
                include:[
                    {association: "genre"}
                ]
            })
                .then( function(oneMovie){
                    //return res.send(moviesAll);
                    return res.render('movieDetail', {movie: oneMovie});
                })
                .catch( function(error){
                    console.log(error);
                })
    
    },
    delete: function(req, res){
        //Tendremos que pensar el código del controlador dependiendo de qué estrategia usemos para identificar el id del elemento a borrar. En este caso estamos usando la estrategia del campo hidden dentro del formulario. 
        let id = req.body.id;

        // return res.send(id);

        db.Movie.destroy({
            where: { id:id }
        })
            .then(function(){
                return res.redirect('/movies');
            })
            .catch(function(e){
                console.log(e);
            })

    }
}

module.exports = indexController