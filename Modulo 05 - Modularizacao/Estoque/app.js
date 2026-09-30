import criarProduto from "./criarProduto.js";

function statusProduto(produto)
{
    let status = "Disponivel"
    if(produto.quantidade === 0)
    {
        status = "Esgotado"
    }
    console.log(produto.nome + " - " + produto.preco + " - " + status)
}

let produto1 = criarProduto("Playstation 5", 3500, 0)
let produto2 = criarProduto("Nintendo Switch 2", 4500, 20)

statusProduto(produto1)
statusProduto(produto2)