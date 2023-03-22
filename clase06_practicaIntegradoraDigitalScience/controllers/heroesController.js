let db = require('../db/index')

let heroesController = {
    index: function(req, res){
        return res.render('index', { heroes: db.lista })
    },

    show: function(req, res){
        return res.send('Detalle de un heroe.')
    },

    detail: function(req, res){
        return res.send('Bio del heroe')
    }
}
module.exports = heroesController