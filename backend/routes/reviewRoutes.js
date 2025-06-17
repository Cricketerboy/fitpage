const express = require('express');
const { addReview, getProducts } = require('../controllers/reviewController');
const router = express.Router();

router.post('/review', addReview);
router.get('/products', getProducts);

module.exports = router;