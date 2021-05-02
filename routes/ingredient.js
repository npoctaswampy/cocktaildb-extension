var router = require('express').Router();
var ingredientService = require('../service/ingredientService')

router.post('/', ingredientService.create);
router.put('/', ingredientService.update);
router.delete('/', ingredientService.remove);

module.exports = router;