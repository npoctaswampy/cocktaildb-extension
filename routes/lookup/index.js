var router = require('express').Router();

router.use('/', require('./lookup'));

module.exports = router;