/*
const prompt = require('prompt-sync')()
let nome = prompt('digite seu nome: ')
console.log(nome)
*/

/*
const prompt = require ('prompt-sync')()

let entrada = prompt('Digite sim para imprimir a palavra POSITIVO e nao para NEGATIVO! ')

if (entrada == 'sim'){
    console.log('Digitou sim e apareceu a palavra POSITIVO')
}
else if (entrada == 'nao'){
    console.log('Digitou sim e apareceu a palavra NEGATIVO')
}
else{
    console.log('Voce não digitou nenhuma!')
}
*/
/*
const prompt = require ('prompt-sync')()
let continuar = true

while (continuar){
    let entrada = prompt('para somar e continuar digite sim: ')
    if (entrada == 'sim'){
        let x = prompt ('Digite o valor de X: ')
        x=parseFloat(x)
        console.log ('A soma de 5 +', x, ' = ',5*x)
        continuar = true
    }
    else{
        console.log('Não quer continuar!')
        continuar = false
    }
}
*/

/*
function ladosIguais( a, b, c){
	if(a == b && b == c){
		return 3;
	} else if(a == b || a == c || b == c){
		return 2;
	} else {
		return 0;
}
}
continuar = true;
while(continuar){
let a = prompt("Digite lado a: ");
let b = prompt("Digite lado b: ");
let c = prompt("Digite lado c: ");
let quantLadosIguais = ladosIguais(a,b,c);
switch(quantLadosIguais){ //avaliação do valor
    case 3: 
      console.log(" 3 lados iguais");
      break;
    case 2: 
      console.log(" 2 lados iguais");
      break;
    default:
      console.log("Nenhum lado igual");
      break;
  }
  let entrada = prompt("Digite sim para continuar: ");
  if (entrada == "sim"){
      console.log("Quer continuar.");
  continuar = true;
  } else {
      console.log("Não quer continuar.");
      contunuar = false;
  }
  }
*/

/*

//EXERCICIO

const prompt = require ('prompt-sync')()
let continuar = true
let estado

while(continuar){
    let estado = prompt('Digite a sigla do seu estado: ')
    if (estado == 'pi'|| estado == 'ce' || estado == 'ma' || estado == 'rn' || estado == 'pb' || estado == 'al' || estado == 'pe' || estado == 'se' || estado == 'ba'){
        console.log('Seu estado está localizado na região NORDESTE!') 
    }
         
    else if (estado == 'rr' || estado == 'ap' || estado == 'am' || estado == 'pa' || estado == 'ac' || estado == 'to' || estado == 'ro'){
        console.log('Seu estado está localizado na região NORTE!') 
    }
    else if (estado == 'mt' || estado == 'df' || estado == 'go' || estado == 'ms' ){
        console.log('Seu estado está localizado na região CENTRO-OESTE!')
    }
    else if (estado == 'mg' || estado == 'es' || estado == 'rj' || estado == 'sp'){
        console.log('Seu estado está localizado na região SUDESTE')
    }
    else if (estado == 'pr' || estado == 'sc' || estado == 'rs'){
        console.log('Seu estado está localizado na região SUL')
    }
    else{
        console.log('Você digitou um estado invalido!')
    }
    let confirmar = prompt ('Deseja fazer novamente? S para sim e N para não: ')
    if (confirmar == 's'){
        console.log('Você quer continuar!')
        continuar = true
    }
    else{
        console.log('Você optou por sair do programa!')
        continuar = false
    }

}
*/
const prompt = require ('prompt-sync')()
function soma (x,y){
    let resultado = x+y
    return resultado
}
function sub (x,y){
    let resultado = x-y
    return resultado
}    
let continuar = true 

while(continuar){
    let x = prompt('Digite um numero para x: ')
    x=parseFloat(x)
    let y = prompt('Digite um numero para y: ')
    y=parseFloat(y)
    let escolha = prompt ('Digite soma para SOMA e sub para SUBTRAIR: ')
    if (escolha == 'soma'){
        console.log(soma(x,y))
    }
    else{
        console.log(sub(x,y))
    }
    let cont = prompt("Você quer continuar? S para sim e N para Não: ")
    switch (cont){
        case "s" :
            console.log("Você quer ficar...")
            console.log("aguarde...")
            break
        case "n":
            console.log("Você quer sair...")
            console.log("aguarde...")
            break


    }
}


