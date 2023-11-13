const prompt = require('prompt-sync')();
let turmas = []
let alunos = []
let codturma = 1
let codAluno = 1
let cont = true

while (cont) {
    console.log(
        "1. Registrar dados de uma turma\n" +
        "2. Registrar dados de um novo aluno\n" +
        "3. Editar dados de um aluno\n" +
        "4. Emitir relatório\n" +
        "0. Sair"
    );

    const escolha = prompt("Digite a opção desejada: ")
    console.clear()

    switch (escolha) {
        case '1':
            const turma = {
                codigo: codturma++,
                nivel: prompt("Nível de Ensino: "),
                modulo: prompt("Módulo da turma: "),
                alunos: []
            };
            turmas.push(turma)
            console.clear()
            console.log("Turma registrada com sucesso! Código da turma: ", turma.codigo)
            break

        case '2':
            const aluno = {
                matricula: codAluno++,
                nome: prompt("Nome do aluno: "),
                idade: parseInt(prompt("Idade: "))
            };

            let x = parseInt(prompt("A qual turma o aluno pertence: "))
            let turmaEncontrada = turmas.find(turma => turma.codigo === x)

            while (!turmaEncontrada) {
                console.log("Turma não encontrada. Tente novamente.")
                x = parseInt(prompt("Código da turma para associar o aluno: "))
                turmaEncontrada = turmas.find(turma => turma.codigo === x)
            }

            turmaEncontrada.alunos.push(aluno)
            console.clear()
            console.log("Aluno registrado!")
            break

        case '3':
            const matriculaEditar = parseInt(prompt("Digite a matrícula do aluno para editar: "))
            const turmaEditar = turmas.find(turma => turma.alunos.some(aluno => aluno.matricula === matriculaEditar))

            if (turmaEditar) {
                const alunoEditar = turmaEditar.alunos.find(aluno => aluno.matricula === matriculaEditar)
                console.log("Editando dados do aluno: "+alunoEditar.nome)

                alunoEditar.nome = prompt("Novo nome: ") || alunoEditar.nome
                alunoEditar.idade = parseInt(prompt("Nova idade: ")) || alunoEditar.idade

                console.log("Dados do aluno editados com sucesso!")
            } else {
                console.log("Aluno não encontrado. Tente novamente.")
            }
            break;

        case '4':
            console.log("Relatório de turmas e alunos:")
            turmas.forEach(turma => {
                console.log('Cod.Turma: '+turma.codigo+ ', Nível: '+turma.nivel+ ', Módulo: '+turma.modulo)
                console.log('Alunos:')
                turma.alunos.forEach(aluno => console.log('Matrícula: '+aluno.matricula+', Nome: '+aluno.nome+', Idade: '+aluno.idade))
                console.log('+++++++++++++++++++++');
            });
            break;

        case '0':
            console.log('Saindo....')
            cont=false
            

        default:
            console.log('Opção inválida. Tente novamente.')
    }
}
