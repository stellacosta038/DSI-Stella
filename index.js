require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

//Middlewaer
app.use(express.json());

//Conectando ao MongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log(err));

//Rotas
app.use('/api/products',productRoutes);

//Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
