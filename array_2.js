/*
let array = [];

array[0] = 8;
array[1] = 10;
array[2] = 20;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
*/

/*
let array = [8,10,20] 

console.log(array);
for (i=0;i<3;i++){
    console.log(array[i]);
}
array.push(30);
console.log(array);
array.push(40);
console.log(array);
array.push(50);
console.log(array);
array.push('Jáder');
console.log(array);
array.push(1.35);
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);
*/
/*
let array = ["Jáder","Sabrina","Esaúzinho"]
for (i=0;i<array.length;i++){
  console.log(array[i]);
}
*/
/*
const prompt = require ('prompt-sync')()
let continuar = true;
let dados = [];
while(continuar){
	let entrada = prompt("Digite sim para preencher dados? ");
if (entrada == "sim"){
	dados[0] = prompt('Digite nome: ');
dados[1] = prompt('Digite Sobrenome: ');
dados[2] = prompt('Digite Altura: ');
dados[3] = prompt('Digite Peso: ');
console.log(dados);
continuar = true;
} else {
	console.log("Encerrado.");
	continuar = false;
}
}
*/

/*
//EXERCÍCIO

const prompt = require ('prompt-sync')()
let dados_1 = ['NOME','SOBRENOME','IDADE','ALTURA','PESO']
let dados = []
let lista = []

for (i=0;i<5;i++){
    let x = prompt ('Digite aqui seu '+dados_1[i]+': ')
    dados[i]=x
}
for (i=0;i<5;i++){
    lista[i]=dados[i]
}
console.clear();
for (i=0;i<5;i++){
    console.log(dados_1[i]+': '+lista[i])
}
*/
const prompt = require ('prompt-sync')()
let filmes = []
let ano_lan = []
let gen=[]
let cont = true

while (cont){
    for (let i = 0; i<3;i++){
        let x = prompt('Digite o nome do filme: ')
        filmes[i]=x.toUpperCase()
        let y = prompt('Digite o ano de lançamento: ')
        y=parseInt(y)
        ano_lan[i] = y
        let b = prompt('Qual o genero desse filme? ')
        gen[i]=b
    }
    console.clear()
    for (let i = 0; i<3;i++){
        z=(2023-ano_lan[i])
        console.log(filmes[i]+' é do genero '+gen[i]+' foi lançado a exatos '+z+' anos.')
    }
    console.log('Quer parar?')
    console.log('Se sim digite SIM e NÂO para parar!')
    let a = prompt('Quer continuar?')
    if (a == 'sim'){
        console.log('Quer continuar!')
        cont=true
    }
    else{
        console.log('Quer encerrar!')
        cont=false
    }

}

