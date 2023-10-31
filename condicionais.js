let condicao = true

if(condicao == true){
	console.log("Verdade!")
}

let condicao2 = true; // false
if (condicao2) { 
console.log("Verdade!"); 
} else{ 
console.log("Falso!"); 
}

condicao_um = false, condicao_dois = false;
if (condicao) { 
console.log("Condição 1 Verdade!"); 
} else if (condicao2) { 
console.log("Condição 1 Falso e Condição 2 Verdade!"); 
} else{ 
console.log("Condição 1 e Condição 2 Falso!"); 
}

condicao = true;
condicao2 = true;
if (condicao == condicao2) { 
console.log("Condição 1  e 2 são iguais!"); 
} else {
	console.log("Condição 1 e 2 são diferentes!"); 
}

// Exercio 1
let A=5,B=7
let x=A+B

if (x>10){
    console.log(x)
}

//Exercicio 2

let P=1,O=8
let X=P+O

if (X>=10){
    r=X-7
}
else{
    r=X-5
}
console.log(r)

//Exercico 3

let D=25
if (D>=20 && D<=90){
    console.log('O numero está na faixa de 20 a 90')
}
else{
    console.log('O numero esta fora da faixa de 20 a 90')
}

// Exercico 4
let H=10

if(!(H>5)){
    console.log("H não é maior que 5")
}
else{
    console.log("H é maior que 5")
}

//Trabalho de Casa

let salario=1500, novo_salario=0

if(salario<500){
    novo_salario=salario*1.5
}
else {
    if (salario>=1000){
        novo_salario=salario*1.10
    }
    else{
        novo_salario=salario*1.05
    }
}
console.log(novo_salario.toFixed(2))

// desafios
let a=10, b=4, c=45

if (a==b && b==c && c==a) {
    console.log("Este é um triangulo EQUILATERO")
}
else if (a==b &&a!=c){
    console.log('Esse é um triangulo ISOCELES!')
}
else if (b==c && b!=a){
    console.log('Esse é um triangulo ISOCELES!')
}
else if (c==a && c!=b){
    console.log('Esse é um triangulo ISOCELES!')
}
else (a!=b && a!=c && b!=c)
    console.log('Esse é um triangulo ESCALENO!')

