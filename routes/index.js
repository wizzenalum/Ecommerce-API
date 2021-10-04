const express = require('express');
const router = express.Router();


// this is routing to routes that start with  /products 
router.use('/v1',require('./v1'))
router.use('/v2',require('./v2'))


module.exports = router;