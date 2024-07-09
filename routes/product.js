// routes/product.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { authenticateAdminToken } = require('../middleware/auth');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authenticateAdminToken, productController.createProduct);
router.put('/:id', authenticateAdminToken, productController.updateProduct);
router.delete('/:id', authenticateAdminToken, productController.deleteProduct);

module.exports = router;
    