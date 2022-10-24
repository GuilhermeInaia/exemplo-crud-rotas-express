const fs = require('fs');

let usuarios = fs.readFileSync('controllers/usuario/usuarios.db')

// listar todos os usuarios GET /usuarios
function listar(){
    
    return usuarios;
}

// buscar um usuario GET /usuario/1
function buscar(){

    let usuario = JSON.parse(usuarios).filter(us => us.id === 4);

    return usuario[0];

}

// autenticar e gerar um token POST /login (email e senha)
function auth(){
    return "auth"
}

module.exports = {
    listar, 
    buscar, 
    auth,
}