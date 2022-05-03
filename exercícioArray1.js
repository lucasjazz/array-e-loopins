const listaDePaises = ['Armenia', 'Brasil', 'Canadá', 'Dinamarca', 'Eslováquia'];

listaDePaises.push('França');
console.log(listaDePaises);

//removendo um item do final da lista
listaDePaises.pop();
console.log(listaDePaises);

//adicionando um item ao inicio da lista
listaDePaises.unshift('África do Sul');
console.log(listaDePaises);

//removendo um item do inicio da lista
listaDePaises.shift();
console.log(listaDePaises);

//imprimindo o ultimo item da lista
console.log(listaDePaises[listaDePaises.length - 1]);

//imprimindo o segundo item da lista
console.log(listaDePaises[1]);

//imprimindo o item de indice 2
console.log(listaDePaises[2]);