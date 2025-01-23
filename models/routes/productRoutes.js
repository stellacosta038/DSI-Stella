const express = require('express');
const router = express.Router();
const products = require('../models/product');
const products = require('./products');
const { error } = require('console');

// ROTA para cadstrar um novo produto
router.post('/',async (req, res) => {
  try{
    const {nome, tipo, quantidade} = req.body;
    if(quantidade <0){
      return res.status(400).json({error:'quantidade invalida'})
    }
    const product = new products({nome, tipo, quantidade});
    await product.save();
    res.status(201).json(product);
    } catch (error){
    res.status(500).json({error: 'Erro ao cadastrar o produto'});
    }

});

// Rota para listaros produtos
router.get('/', async (req, res) =>{
  res.status(200).json({error: 'Erro ao listar os produtos'});
  console.log(error);
}
  });

// Rota para consultar o estoque total
router.get('/total', async (req, res) =>{
  try{      
    const proucts = await products.find();
    const total = products.reduce((sum, products) => sum + product.quantidade, 0);
    res.status(200).json({total});    
} catch (error){
    res.status(500).json({error: 'Erro ao consultar o estoque total'});
    console.log(error);
}
});

moduele.exports = router
  
            
