/*
const mesa = {
    altura: '1 metro  e 20',
    peso: '30kg',
    cor: 'marrom',
    material: 'madeira'
}

console.log(mesa)

const animal = {
    tipo: 'gato',
    nome: 'gatinho',
    sons() { console.log('miau miau') }
}
console.log(animal)
console.log(animal.tipo)
console.log(animal.nome)
animal.sons()

const livro = {}
livro.autor = 'Jane Smith'
console.log(livro)
livro.anoPublicacao = 2006
console.log(livro)
delete livro.anoPublicacao
console.log(livro)

const funcionario = {}
funcionario['ocupação'] = 'vendas'
funcionario['viaja frequentemente'] = true
funcionario['primeiro territorio'] = 'Chicago'
funcionario['25'] = 'total de clientes'

console.log(funcionario)

let fruit1 = {};

fruit1["cor"] = "amarela";
fruit1["nome"] = "banana";
fruit1["quantidade"] = 3;

let carrinho = {};
carrinho[1] = fruit1;

let fruit2 = {};
fruit2["cor"] = "vermelha";
fruit2["nome"] = "maçã";
fruit2["quantidade"] = 5;
carrinho[2] = fruit2;
for (let x of Object.keys(carrinho)) {
  console.log("Key1:" + x)
  for (let y of Object.keys(carrinho[x])) {
    console.log("-Key2:" + y)
    console.log(carrinho[x][y])
    }
}
*/

// Exercicio

const prompt = require('prompt-sync')()
const frutasJason = {
    "0": "maca",
    "1": "acerola",
    "2": "laranja",
    "3": "uva",
    "4": "kiwi",
}
console.log(frutasJason)
let continuar = true
//loop para teste
while(continuar){
const numeroAleatorio = Math.floor(Math.random() * 5)
let x = prompt('Digite uma fruta aqui e veremos se vc acerta: ')
let y = frutasJason[numeroAleatorio]
const meuArray = y.split('')
console.log(meuArray)
const array2 = x.split('')
//verificação de condicionais para igualdade

if (x == y) {
  console.log('Acertou a palavra é: ' + x)
}
else {
  let letras=[]
  for (let i = 0; i < meuArray.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] == meuArray[i]) {
        letras[i]=meuArray[i]
      }
    }
  }
  console.log('Errou! você digitou ' + x + ', e a resposta certa era: ')
  console.log(letras)
  
} 
//inicio para finaliazação ou repetição do teste
console.log('quer tentar de novo?')
let z = prompt('Digite sim para continuar e nao para sair: ')

if(z=='sim'){
  console.log('você vai tentar de novo!')
  console.log('espere...')
  console.clear
  continuar=true
  console.clear
}
else if (z=='nao') {
  console.log('você vai desistir!')
  console.log('espere...')
  continuar=false
}
else {
  console.log('digitou errado paizão, ai vc me quebra!')
  console.log('vaou perguntar novamente! ')
  let p = prompt('Digite sim para continuar e nao para sair: ')
  if(p=='sim'){
    console.log('você vai tentar de novo!')
    console.log('espere...')
    console.clear
    continuar=true
    console.clear
  }
  else if (p=='nao') {
    console.log('você vai desistir!')
    console.log('espere...')
    continuar=false
  }
}
}
