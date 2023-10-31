/* meuScript.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor de x: ', (x) => {
  rl.question('Digite o valor de y: ', (y) => {
    // Converte os valores de entrada para números
    const valorX = parseFloat(x);
    const valorY = parseFloat(y);

    if (isNaN(valorX) || isNaN(valorY)) {
      console.log('Valores inválidos. Certifique-se de que x e y sejam números válidos.');
    } else {
      const soma = valorX + valorY;
      console.log(`A soma de ${valorX} e ${valorY} é igual a ${soma}`);
    }

    rl.close();
  });
});
*/
