const prompt = require('prompt-sync')();
let alunos=[]
let turmas =[]
let cont = true;
let Id_turma = 0;
let Id_aluno = 0;
let x=0

while (cont) {
    const escolha = prompt(
        "Selecione uma opção:\n" +
        "1. Registrar dados de uma turma\n" +
        "2. Registrar dados de um novo aluno\n" +
        "3. Editar dados de um aluno\n" +
        "4. Emitir relatório\n" +
        "0. Sair\n" +
        "Digite aqui: "
    );
    console.clear();
    if (escolha == '1'){
        Id_turma++
        let nivel = prompt('Digite o nivel da turma: ')
        let modulo = prompt ('Digite o modulo da turma: ')
        let turma = {}
        turma['Cod. Turma'] = Id_turma
        turma['Nivel'] = nivel
        turma['Modulo'] = modulo
        turma['Alunos'] = alunos
        console.log(turma)
        turmas.push(turma)
        console.clear()
        console.log('Turma criada com sucesso!')
    }
    else if (escolha == '2'){
        Id_aluno++
        let nome = prompt('Digite o nome do aluno: ')
        let idade = prompt('Digite a idade do aluno: ')
        let x = prompt('Digite a qual turma esse aluno pertence: ') 

        if (!turmas[x-1]) {
            console.log('A turma não existe.');
            return;
        }
        else {
            let aluno = {
                'Cod.Aluno': Id_aluno,
                'Nome': nome,
                'Idade': idade,
                'Cod. Turma': x
            };
            alunos.push(aluno);
            turmas[x-1].Alunos.push(aluno);
            console.clear();
            console.log('Aluno cadastrado com sucesso!');
        }
    }

    else if (escolha == 3){
        
    }
    else if (escolha === '4') {
        console.log(alunos)
        console.log (turmas)
    }
    else if (escolha == '0'){
        console.log('Você escolheu sair!')
        cont=false
    }

}
