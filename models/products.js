const mongodb = require('mongose');
const { stringify } = require('querystring');
const productSchema = new mongose.Schema({
  nome: {type: string, required: true},
  tipo: {type: string, required: true},
  quantidade: {type: number, required: true, min:0},
});
module.exports = mongose.model('Product', productSchema);