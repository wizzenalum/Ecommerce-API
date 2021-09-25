const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')

// routes to all the crud functionality for the product model
router.get('/',productController.read);
router.delete('/:id',productController.delete);
router.post('/:id/update_quantity/?',productController.update);
router.post('/create',productController.create);

module.exports = router;