/*
let lista = []
lista[0]=1
lista[1]=2
lista[2]=3
lista[3]=4
lista[4]=5
lista[5]=6
console.log(lista)
*/
/*
const prompt = require ('prompt-sync')()
let lista=[]
for (i=0;i<5;i++){
    let x= prompt ('Digite o valor de X: ')
    x=parseInt(x)
    lista[i] = x
}
lista.push(30)
console.log(lista)
lista.pop()
console.log(lista)
lista.push(50)
console.log(lista)
lista.pop()
console.log(lista)
*/
const prompt = require ('prompt-sync')()
let continuar = true;
let dados = [];
let dados2=['Nome:', 'Sobrenome:', 'Altura:','Peso:']
while(continuar){
	let entrada = prompt("Digite sim para preencher dados? ");
if (entrada == "sim"){
	dados[0] = prompt('Digite nome: ');
    dados[1] = prompt('Digite Sobrenome: ');
    dados[2] = prompt('Digite Altura: ');
    dados[3] = prompt('Digite Peso: ');
    for(let contador = 0; contador <=3; contador++) {
        console.log(dados2[contador],dados[contador])
    }
    continuar = true;
} 
else {
	console.log("Encerrado.");
	continuar = false;
}


}
