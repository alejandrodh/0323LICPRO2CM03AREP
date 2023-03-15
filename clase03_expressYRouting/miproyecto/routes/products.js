let express = require('express');
let router = express.Router();

router.get('/detail/:id', function(req, res){
    return res.send('Estamos en el producto ' + req.params.id)
})

module.exports = router;