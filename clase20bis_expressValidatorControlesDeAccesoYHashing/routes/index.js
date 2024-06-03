var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
let db = require('../database/models')
let indexController = require("../controllers/indexController");
let loginValidations = [
    body('email')
        .notEmpty().withMessage('Por favor complete el email.')
        .isEmail().withMessage('Por favor ingrese un email valido.')
        .custom(function(value){
            return db.User.findOne({
                where:[{ email: value}]
            })
            .then(function(user){
                if(!user){ //Si usuario es null lo negamos.
                    throw new Error('El email no existe')
                }
            })
        }),
    body('password')
        .notEmpty().withMessage('Por favor complete la contraseña.')
        .custom(function(value, { req }){
            return db.User.findOne({
                where:[{ email: req.body.email}]
            })
            .then(function(user){
                if(user){ //Si usuario es null lo negamos.
                    throw new Error(`Encontré usuario ${user.email} ahora tenés que validar la contraseña para dejarlo pasar...`)
                }
            })
        }),
];
let registerValidations = [];

/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);
router.get('/register',indexController.register); //Mostrar el form de registro.
router.get('/login', indexController.login) //Mostrar form de login

router.post('/register', indexController.store); //Guarda al usuario en la base de datos.
router.post('/login', loginValidations ,indexController.processLogin) //Mostrar form de login
router.post('/logout', indexController.logout)


module.exports = router;
