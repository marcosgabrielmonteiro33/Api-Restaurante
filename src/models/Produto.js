const mongoose = require('mongoose')
const { Schema } = mongoose

const produtoSchema = new Schema({
  nome: {
    type:     String,
    required: true
  },
  preco: {
    type:     Number,
    required: true,
    min:      0
  },
  categoria: {
    type:     String,
    required: true
  },
  disponivel: {
    type:    Boolean,
    default: true
  },
  ingredientes: [String],
  criado_em: {
    type:    Date,
   default: Date.now
  }
})

module.exports = mongoose.model('Produto', produtoSchema)
