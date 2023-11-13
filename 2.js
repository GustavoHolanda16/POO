const prompt = require('prompt-sync')();

let alunos = new Map();
let turmas = new Map();
let cont = true;
let cod_turma = [];
let Id_turma = 0;
let Id_aluno = 1;

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

    if (escolha == '1') {
        console.log('Você escolheu registrar turma!');
        Id_turma++;
        cod_turma.push(Id_turma);

        let nivel = prompt('Nível de ensino: ');
        let modulo = prompt('Módulo de ensino: ');

        // Cada turma é um objeto com informações da turma e um array vazio de alunos
        turmas.set(Id_turma, { nivel: nivel, modulo: modulo, alunos: [] });

        console.log('Código da turma é: ', Id_turma);
    } else if (escolha == '2') {
        Id_aluno++;
        let nome = prompt('Digite o nome do aluno: ');
        let idade = prompt('Digite a idade do aluno: ');

        // Associar aluno à turma
        let codigoTurma = prompt('Digite o código da turma para associar o aluno: ');
        if (turmas.has(Number(codigoTurma))) {
            let aluno = { nome: nome, idade: idade };
            turmas.get(Number(codigoTurma)).alunos.push(aluno);
            alunos.set(Id_aluno, aluno);
            console.log('Aluno associado à turma com sucesso.');
        } else {
            console.log('Turma não encontrada. Tente novamente.');
        }
    } else if (escolha == '4') {
        console.log('Esses são os códigos das turmas já cadastradas: ' + cod_turma);
        for (let codigoTurma of cod_turma) {
            let turma = turmas.get(codigoTurma);
            console.log(`Turma ${codigoTurma} - Nível: ${turma.nivel}, Módulo: ${turma.modulo}`);
            console.log('Alunos:');
            for (let aluno of turma.alunos) {
                console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
            }
            console.log('--------------------------');
        }
    } else if (escolha == '0') {
        console.log('Saindo....');
        cont = false;
    }
}
