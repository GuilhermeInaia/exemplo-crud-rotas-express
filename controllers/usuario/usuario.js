const fs = require('fs');

let usuarios = fs.readFileSync('controllers/usuario/usuarios.db')

// listar todos os usuarios GET /usuarios
function listar(){
    usuarios = JSON.parse(usuarios).map(us => {
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
        }
    })
    return usuarios;
}

// buscar um usuario GET /usuario/1
function buscar(idQueVeioNaURL){

    let usuario = JSON.parse(usuarios).filter(us => us.id == idQueVeioNaURL);

    return usuario[0];

}

// autenticar e gerar um token POST /login (email e senha)
function auth(emailReq, senhaReq){
    // SELECT *c FROM usuarios WHERE email = 'A@a.com'
    let usuario = JSON.parse(usuarios).filter(us => us.email === emailReq);
    
    // se não encontrou nenhum usuario, é pq nenhum usuario existe
    if (usuario.length === 0){
        return "Usuario não encontrado";
    }

    // testando se a senha confere
    if(usuario[0].senha !== senhaReq) {
        return "Senha incorreta"
    }

    // se chegou até aqui, entao email se senha confere
    // gernado token do usuario
    let token = "@#FRE" + usuario[0].senha + "oindcoin";
    token = token.split("").reverse().join("");

    //salvando o token no db/file
    usuarios = JSON.parse(usuarios). map(us => {
        us.token = token;
        return us;
    })

    return token;
}

module.exports = {
    listar, 
    buscar, 
    auth,
}