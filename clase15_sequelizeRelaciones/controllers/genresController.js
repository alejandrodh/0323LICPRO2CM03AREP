let db = require("../database/models");
let op = db.Sequelize.Op;

let genresController = {
    index: function(req, res){
        db.Genre.findAll({
            include:[
                {association: "movies"}
            ]
        })
            .then( function(genresAll){
                //
                return res.send(genresAll);
            })
            .catch( function(error){
                console.log(error);
            })
 
    }
}

module.exports = genresController