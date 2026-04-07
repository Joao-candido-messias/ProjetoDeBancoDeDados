const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/BibliotecaDigital')
 .then(() => console.log('MongoDB conectado'))
 .catch(err => console.error('Erro ao conectar:', err));
// Modelo Livro
const Livro = mongoose.model('Livro', {
 titulo: String,
 autor: String,
 ano: Number,
 genero: String
});
// Rotas
app.get('/livros', async (req, res) => {
 const livros = await Livro.find();
 res.json(livros);
});
app.post('/livros', async (req, res) => {
 const novoLivro = new Livro(req.body);
 await novoLivro.save();
 res.json(novoLivro);
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));