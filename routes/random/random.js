var router = require('express').Router();
var randomService = require('../../service/random/randomService')

router.get('/', randomService.getRandom)

module.exports = router;