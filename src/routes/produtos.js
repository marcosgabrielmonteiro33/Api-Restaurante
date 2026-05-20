const express = require('express')
const router  = express.Router()
const Produto = require('../models/Produto')

// GET /produtos — listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find()
    res.json(produtos)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

// GET /produtos/:id — buscar um produto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id)
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' })
 res.json(produto)
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

// POST /produtos — criar um novo produto
router.post('/', async (req, res) => {
  try {
    const produto = await Produto.create(req.body)
    res.status(201).json(produto)
  } catch (err) {
    res.status(400).json({ erro: err.message })
  }
})

// PATCH /produtos/:id — atualizar um produto
router.patch('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' })
    res.json(produto)
  } catch (err) {
    res.status(400).json({ erro: err.message })
  }
})

// DELETE /produtos/:id — remover um produto
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id)
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' })
    res.json({ mensagem: 'Produto removido com sucesso' })
  } catch (err) {
    res.status(500).json({ erro: err.message })
  }
})

module.exports = router
