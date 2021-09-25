const express = require('express');
const router = express.Router();
// importing the conrollers
const productController = require('../controllers/products')

// routes to all the crud functionality for the product model
router.post('/create',productController.create);
router.get('/',productController.read);
router.delete('/:id',productController.delete);
router.post('/:id/update_quantity/?',productController.update);

module.exports = router;