let db = require("../database/models");
let op = db.Sequelize.Op;

let indexController = {
    index: function(req, res){
        db.Movie.findAll()
            .then( function(moviesAll){
                //
                return res.send(moviesAll);
            })
            .catch( function(error){
                console.log(error);
            })
 
    }
}

module.exports = indexController