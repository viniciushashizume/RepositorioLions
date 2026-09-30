function statusProduto(produto)
{
    let status = "Disponivel"
    if(produto.quantidade === 0)
    {
        produto.status = "Esgotado"
    }

}