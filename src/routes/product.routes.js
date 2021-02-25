const express = require ('express');
const router = express.Router();

const product = require('../controllers/product.controler');
router.get('/', product.getProducts);
router.get('/:id',product.getSelectedProduct);
router.post ('/', product.createProduct);
router.put('/:id', product.modifyProduct );
router.delete('/:id', product.deleteProduct);

module.exports = router;