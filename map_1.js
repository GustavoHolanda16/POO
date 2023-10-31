
/* Criando um objeto Map
let fruits = new Map();

// Set Map - Values
fruits.set("maçãs", 10);
fruits.set("bananas", 5);
fruits.set("laranjas", 8);

console.log(fruits)
*//*
Get Map - Values
console.log(fruits.get("maçãs"));
console.log(fruits.get("bananas"));
console.log(fruits.get("laranjas"));

console.log(fruits)
*//*
// Set new Map - Values
fruits.set("maçãs", 8);
fruits.set("bananas", 4);
fruits.set("laranjas", 3);
// Get Map - Values
console.log(fruits.get("maçãs"));
console.log(fruits.get("bananas"));
console.log(fruits.get("laranjas"));
*//*
// Set new Map - Values
fruits.delete("bananas");
// Get Map - Values
console.log(fruits.get("maçãs"));
console.log(fruits.get("bananas"));
console.log(fruits.get("laranjas"));
console.log(fruits.size);
console.log(fruits.has("bananas"));
console.log(fruits.has("laranjas"));
console.log(fruits.clear());
console.log(fruits.size);
*//*
let fruits = new Map();
fruits.set("maçãs", 8);
fruits.set("bananas", 4);
fruits.set("laranjas", 3);
fruits.forEach (function(value, key) {
  console.log(key + ' => ' + value)
})
*//*
let fruits1 = new Map();

fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

let cesta = new Map();
cesta.set("ingles", fruits1);

const fruits2 = new Map();
fruits2.set("maça", 500);
fruits2.set("bananas", 300);
fruits2.set("laranja", 200);
cesta.set("portugues", fruits2);
for (let x of cesta.keys()) {
  console.log("Key1:" + x)
  for (let y of cesta.get(x).keys()) {
  console.log("-Key2:" + y)
  console.log(cesta.get(x).get(y))
  }
}
console.log(cesta)
*/
//Exercicio
//novo mapa ja povoado
const prompt = require('prompt-sync')()
const frutasMap = new Map();
frutasMap.set(0, "maca");
frutasMap.set(1, "acerola");
frutasMap.set(2, "laranja");
frutasMap.set(3, "uva");
frutasMap.set(4, "kiwi");

let continuar = true
//loop para teste
while(continuar){
  const numeroAleatorio = Math.floor(Math.random() * 5) + 0
let x = prompt('Digite uma fruta aqui e veremos se vc acerta: ')
let y = frutasMap.get(numeroAleatorio)
const meuArray = y.split('')
const array2 = x.split('')
console.log(y)
console.log(x)
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
  }
  else if (p=='nao') {
    console.log('você vai desistir!')
    console.log('espere...')
    continuar=false
  }
}
}