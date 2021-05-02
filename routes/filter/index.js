var router = require('express').Router();

router.use('/', require('./filter'));

module.exports = router;