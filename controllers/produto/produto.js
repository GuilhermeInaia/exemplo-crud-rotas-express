
let fs = require('fs');

let produtos = fs.readFileSync('controllers/produto/produtos.json').toString()

function listar(){
    console.log(produtos)
    return produtos;
}
function criar(produto){
    produtos.push(produto);
    return produtos
}

function atualizar(){
    return "Atualizar produto"
}

function deletar(produto_id){
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}