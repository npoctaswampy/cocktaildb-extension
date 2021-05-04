var router = require('express').Router();
var cocktailService = require('../service/cocktailService');
var lookupService = require('../service/lookup/lookupService');

router.post('/', cocktailService.create);
router.put('/:id', cocktailService.update);
router.delete('/:id', cocktailService.remove);
router.get('/:id', lookupService.cocktailLookup);


module.exports = router;