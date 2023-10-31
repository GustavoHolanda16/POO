function soma (x,y){
    let resultado = x+y
    return resultado
}

console.log(soma(75,74))

function soma1 (x,y){
    console.log(x+y)
}
soma1(10,5)

//Exercício

function mult (x,y){
    console.log(x*y)
}

function div (x,y){
    console.log(x/y)
}

function sub (x,y){
    console.log(x-y)
}

function ex (x,y){
    console.log(x**y)
}

function fatorial(numero) {
    let num = 1;
    for (let i = numero; i > 1; i--) {
        num *= i;
    }
    return num;
}

mult(3,5)
sub(10,5)
div (8,2)
ex (4,2)
console.log(fatorial(8))

//TRABALHO DE CASA 

function tipoTriangulo(A, B, C) {
  if (A <= 0 || B <= 0 || C <= 0) {
    return "Não forma triângulo";  //Não formam um triângulo
  }
  
  if (A === B && B === C) {
    return "Equilátero"; // Todos os lados são iguais
  } else if (A === B || B === C || A === C) {
    return "Isósceles"; // Pelo menos dois lados são iguais
  } else {
    return "Escaleno"; // Todos os lados são diferentes
  }
}


resultado = tipoTriangulo(5, 4, 5);
console.log(resultado); 


function area(x,y){
    console.log('a área do terreno é: ',x*y,'m²')
}
area(10,30)

function circu(r){
    let pi=3.14
    console.log('a area da circunferencia é: ',(pi)*(r**2))
}
circu(5)