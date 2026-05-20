const mongoose = require('mongoose')
const { Schema } = mongoose

const pedidoSchema = new Schema({
  mesa: {
    type:     Number,
    required: true
  },
  status: {
    type:    String,
    enum:    ['Aguardando', 'Em preparo', 'Entregue', 'Cancelado'],
    default: 'Aguardando'
  },
  cliente: {
    nome:     { type: String, required: true },
    telefone: { type: String }
  },
  garcom: {
    type: String
  },
  itens: [{
    nome:  { type: String, required: true },
    preco: { type: Number, required: true },
    qtd:   { type: Number, required: true, min: 1 }
  }],
  total: {
    type:     Number,
    required: true,
   min:      0
  },
  pago: {
    type:    Boolean,
    default: false
  },
  criado_em: {
    type:    Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Pedido', pedidoSchema)
