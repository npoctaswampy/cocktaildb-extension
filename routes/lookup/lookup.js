var router = require('express').Router();
var lookupService = require('../../service/lookup/lookupService')

router.get('/cocktail', lookupService.cocktailLookup)
router.get('/ingredient', lookupService.ingredientLookup)

module.exports = router;