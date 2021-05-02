var router = require('express').Router();
var cocktailService = require('../service/cocktailService');

router.post('/', cocktailService.create);
router.put('/', cocktailService.update);
router.delete('/', cocktailService.remove);

module.exports = router;