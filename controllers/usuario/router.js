const router = require('express').Router();
const usuarioController = require('./usuario');

router.get('/usuarios', (req, res) => {
    res.send(
        usuarioController.listar()
    )
});

router.get('/usuarios/:id', (req, res) => {
    res.send(
        usuarioController.buscar()
    )
});

router.post('/login', (req, res) => {
    res.send(
        usuarioController.auth()
    )
})



module.exports = router;