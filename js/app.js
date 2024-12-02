//criar varialvel total fora da função pois a função iria zerar a variavel sempre que chamada
let total;
limpar();

function adicionar() {
    //recuperar no html os valores produto, quantidade e preço
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    //separar nome e preço do produto e retirar R$ do preço para que sea possivel realizer operaçoes matematicas
    produtos = produto.trim().split("-");
    nomeProduto = produtos[0];
    preço = produtos[1];
    preçoProduto = parseFloat(preço.replace(/R\$|\s/g, ''));
    console.log(`produto: ${nomeProduto}, preço: ${preçoProduto}`);

    //calcular subtotal
    let subTotal = (preçoProduto * quantidade);
    console.log(subTotal);

    //adicionar ao carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    
    //atualizar total
    total = total + subTotal;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById("quantidade").value = 0;

}

function limpar() {
    total = 0;
    document.getElementById("lista-produtos").innerHTML = " ";
    document.getElementById("valor-total").textContent = "R$ 0";
}