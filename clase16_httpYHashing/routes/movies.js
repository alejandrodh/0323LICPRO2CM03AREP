var express = require('express');
var router = express.Router();
let movieController = require("../controllers/movieController")

/* GET home page. */
router.get('/', movieController.index);
router.get('/id/:id', movieController.show);

module.exports = router;
