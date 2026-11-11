alert("JavaScript conectado!");

const produtos = [
  { id: 1, nome: "Teclado", preco: 150, estoque: 5 },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0 },
  { id: 3, nome: "Monitor", preco: 900, estoque: 3 },
  { id: 4, nome: "Headset", preco: 200, estoque: 8 },
  { id: 5, nome: "Notebook", preco: 250, estoque: 0 }
];

//Desafio 1 - Crie uma função que liste os produtos.  
function listarProdutos(produtos) {
  produtos.forEach(function(produto) {
    console.log(produto.nome);
  });
}
listarProdutos(produtos);


//Desafio 2 - Crie uma função que receba o nome de um produto, verifique e retorne o produto.
function buscarProduto(produtos, nome) {
  return produtos.find(function(produto) {
    return produto.nome === nome;
  });
}
console.log(buscarProduto(produtos, "Monitor")); // Exemplo de uso da função

//Desafio 3 - Crie uma função que retorne somente os produtos que possuem estoque maior que zero.
function filtrarEstoque(produtos) {
  return produtos.filter(function(produto) {
    return produto.estoque > 0;
  });
}
console.log(filtrarEstoque(produtos)); // Exemplo de uso da função


//Desafio 4 - Crie uma função que retorne o valor total do estoque (preço * quantidade em estoque) de todos os produtos.
function calcularValorEstoque(produtos) {
  return produtos.reduce(function(total, produto) {
    return total + (produto.preco * produto.estoque);
  }, 0);
}

console.log(calcularValorEstoque(produtos)); // Exemplo de uso da função  