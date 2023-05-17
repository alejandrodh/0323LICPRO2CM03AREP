var express = require('express');
var router = express.Router();
let genresController = require("../controllers/genresController")

/* GET home page. */
router.get('/', genresController.index)

module.exports = router;
