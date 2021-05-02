var router = require('express').Router();
var filterService = require('../../service/filter/filterService')

router.get('/alcohol', filterService.alcoholicFilter);
router.get('/ingredient', filterService.ingredientFilter);
router.get('/glass', filterService.glassFilter);
router.get('/category', filterService.categoryFilter);

module.exports = router;