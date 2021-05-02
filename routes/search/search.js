var router = require('express').Router();
var searchService = require('../../service/search/searchService')

router.get('/cocktail', searchService.cocktailSearch);
router.get('/ingredient', searchService.ingredientSearch);

module.exports = router;