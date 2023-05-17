let db = require("../database/models");
let op = db.Sequelize.Op;

let indexController = {
    index: function(req, res){
        return res.render('index'); 
    }
}

module.exports = indexController