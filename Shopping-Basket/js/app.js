let valorTotal = 0
limpar();

function adicionar(){
    //retrieve values- product name, quantity and value
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("$")[1];
    let quantidade = document.getElementById("quantidade").value;

    //calculate the price, our subtotal
    let preco = quantidade * valorUnitario;

    //add to cart
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML =  listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">$${preco}</span>
  </section>`

    //total sum
    valorTotal += preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `$ ${valorTotal}`
    document.getElementById("quantidade").value = "";
}

function limpar(){
    let valorTotal = 0
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "$ 0";
}