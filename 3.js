const prompt = require('prompt-sync')();
let turmas =[];
let alunos = [];
let ultimaMatricula = 1;

function adicionarAluno(){
  let nomeAluno = prompt ("Nome do Aluno: ")
  let idadeAluno = prompt ("Idade do Aluno: ")
  let matriculaAluno = ultimaMatricula;
  
  let aluno = {}
  aluno.Cod = ultimaMatricula
  aluno.nome = nomeAluno;
  aluno.idade = idadeAluno;
  aluno.id  = matriculaAluno;
  alunos.push(aluno)
  ultimaMatricula++;
}

let continuar = true;

while(continuar){
  console.log("-- Escola Online ---")
  console.log("Adicione alunos")


  console.log('Cadastro Alunos?')
  console.log('1 - Para cadastrar alunos')
  console.log('2 - Para ver registros')
  console.log('3 - Para sair')
  let x = prompt('Digite aqui: ')
  console.clear()
  
  if (x == "1"){
    console.log('Vamos continuar...')
    adicionarAluno();
    console.clear()
  }
  else if (x == '2'){
    alunos.forEach(aluno => {
        console.log('Tabela de Alunos:')
        console.log('---------------------------')
        console.log('Cod.Matricula:',aluno.Cod);
        console.log('Nome:',aluno.nome)
        console.log('Idade:',aluno.idade)
        console.log('---------------------------')
    
      });
  }
  else if (x=='3'){
    console.log('Vamos sair...')
    continuar=false
  }
  else{
    console.log('Escolha errada!')
  }
}
