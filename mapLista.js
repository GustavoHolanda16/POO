




const prompt = require('prompt-sync')()
const frutasMap ={
    "0": "maca",
    "1": "acerola",
    "2": "laranja",
    "3": "uva",
    "4": "kiwi",
}
let continuar = true
//loop para teste
while(continuar){
  const numeroAleatorio = Math.floor(Math.random() * 5) 
let x = prompt('Digite uma fruta aqui e veremos se vc acerta: ')
let y = frutasMap[numeroAleatorio]
console.log(y)
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