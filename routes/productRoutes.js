const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Rota para cadastrar um novo produto
router.post('/', async (req, res) => {
  try {
    const { nome, tipo, quantidade } = req.body;
    if (quantidade < 0) {
      return res.status(400).json({ error: 'Quantidade inválida' });
    }
    const product = new Product({ nome, tipo, quantidade });
    await product.save();
    res.status(201).json(product); // Corrigido
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar produto' });
  }
});

// Rota para listar os produtos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
});

// Rota para consultar o estoque total
router.get('/total', async (req, res) => {
  try {
    const products = await Product.find();
    const total = products.reduce((sum, product) => sum + product.quantidade, 0);
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar estoque total' });
  }
});

module.exports = router;
