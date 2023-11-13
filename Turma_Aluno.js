const prompt = require('prompt-sync')()
let alunos = new Map();
let turmas = new Map();
let cont=true
let cod_turma = []
let Id_turma = 0
let Id_aluno = 1

while(cont){
    const escolha = prompt(
        "Selecione uma opção:\n" +
        "1. Registrar dados de uma turma\n" +
        "2. Registrar dados de um novo aluno\n" +
        "3. Editar dados de um aluno\n" +
        "4. Emitir relatório\n" +
        "0. Sair\n"+
        "Digite aqui: "
    );
    console.clear()
    if (escolha == '1'){
        console.log('Voce escolheu REGISTRAR TURMA!')
        Id_turma++
        cod_turma.push(Id_turma)
        let nivel = prompt('Nivel de ensino: ')
        let modulo = prompt('Modulo de ensino: ')
        turmas.set(Id_turma,{nivel: nivel,modulo:modulo,aluno:[]})
        console.log(turmas)
    }
    else if(escolha == '2'){
        Id_aluno++
        let nome = prompt ('Digite o nome do aluno: ')
        let idade = prompt('Digite a idade do aluno: ')
        console.log('Voce escolheu REGISTRAR ALUNO!')
        let verificar = prompt('Digite a turma desse aluno: ')
        if (turmas.has(Number(verificar))){
           let aluno = {nome:nome,idade:idade}
           turmas.get(Number(verificar)).alunos.push(aluno)
           alunos.set(Id_aluno,aluno)
           console.log('Processo finalizado!')
        }
        else{
            console.log('Você digitou uma turma inexistente!')
            console.log('Tente novamente!\n'+'Saindo...')
        }
    
        
        


    }
    else if (escolha == '4'){
        console.log('Esses são os codigos das turmas ja cadastradas: '+cod_turma)
        for (let x in cod_turma){
            console.log(x)
        }

    }
    else if (escolha == '0'){
        console.log('saindo....')
        cont = false
    }
    
}
