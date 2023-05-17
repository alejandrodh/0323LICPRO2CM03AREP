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
    
    }
}

module.exports = indexController