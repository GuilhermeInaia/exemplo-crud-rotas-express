const router = require('express').Router();
const usuarioController = require('./carrinho');

router.get('/carrinho', (req, res) => {
    let token = req.headers.authorization
    res.send(usuarioController.buscarCarrinhoDoUsuario(token))
})
module.exports = router;