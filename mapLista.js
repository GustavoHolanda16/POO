const prompt = require('prompt-sync')()
let y = prompt('Digite quantos alunos você irá adicionar: ')
const turma1={
}
const turma2={
}
for ( let j = 0; j<y; j++){
  let x = prompt('Digite no nome do aluno: ')
  turma1[j]=x
}
for ( let j = 0; j<y; j++){
  let x = prompt('Digite no nome do aluno: ')
  turma2[j]=x
}
for ( let j = 0; j<y; j++){
  console.log(turma1[j])
  console.log(turma2[j])
}