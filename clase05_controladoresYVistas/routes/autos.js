let express = require('express'); 
let router = express.Router();
let productsController = require("../controllers/productsController");

router.get('/', productsController.index);

router.get('/demo', productsController.demo);

router.get('/marca/:marca', productsController.porMarca);

router.get('/color/:color', productsController.porColor);

router.get('/anio/:anio', productsController.porAnio);





module.exports = router;