const express = require('express');
const router = express.Router();
const upload = require('../multerConfig');
const Product = require('../models/Product');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, async (req, res) => {
  try {
    const products = await Product.find({ userId: req.user.id });
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to load products' });
  }
});

router.post('/', authenticate, upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : '';
  console.log('Add product request:', { userId: req.user.id, name, description, price, image });

  try {
    const product = new Product({
      userId: req.user.id,
      name,
      description,
      price: parseFloat(price),
      image,
    });
    const savedProduct = await product.save();
    console.log('Product saved successfully:', savedProduct.toObject());
    res.json(savedProduct);
  } catch (error) {
    console.error('Add product error:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to add product' });
  }
});

module.exports = router;