let db = require("../database/models");
let op = db.Sequelize.Op;

let genresController = {
    index: function(req,res){
        return res.render('genres');
    },
    show: function(req, res){
        let id = req.params.id;

        db.Genre.findByPk(id, {
            include:[
                {association: "movies"}
            ]
        })
            .then( function(oneGenre){
                return res.render('genreDetail', { genre: oneGenre});
            })
            .catch( function(error){
                console.log(error);
            })
    }
}

module.exports = genresController