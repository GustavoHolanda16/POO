// ex 1 usando while
let num_inteiro = 5;
let cont = 0, r = 0;
while (cont <5){
  r = num_inteiro * 3;
  console.log ("triplo é:" + r);
  cont = cont + 1;
}

//ex 1 usando for 
for(let contador = 1; contador <=5; contador++) {
  let x=3;
  let r= x*3;
  console.log (r);
   }

// ex 2 usando while 
let A = 3;
let B = 2;
let C = 1;
let contador = 1;
while (contador <= B) {
    C *= A;
    contador++;
}
console.log("A potência de " + A + " elevado a " + B + " é " + C);

//ex 2 usando for
let x1 = 4;
let y2 = 4;
let z = 1;
for (let contador = 1; contador <= y2; contador ++) {
  z=x1**y2;
}
console.log("A potência de " + x1 + " elevado a " + y2 + " é " + z);