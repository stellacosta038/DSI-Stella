require('dotenv').config();
const express = require('express');
const moongose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

//Middlewaer
app.use(express.json());

//Conectando ao Mongodb
moongose
.connect(process.env.MONGOOBD_URI,{userNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao MongoDB'))
.catc(err => console.log(err));

//Rotas
app.use('api/products', productRoutes);

//Inicialiando o servidor
const PORTO = process.env.PORT || 3000;
app.listen(PORTO,() => console.log(`Servidor rodando na porta ${PORTO}`));