var router = require('express').Router();

router.use('/filter', require('./filter'));
router.use('/lookup', require('./lookup'));
router.use('/random', require('./random'));
router.use('/search', require('./search'));
router.use('/cocktail', require('./cocktail'));
router.use('/ingredient', require('./ingredient'));

module.exports = router;