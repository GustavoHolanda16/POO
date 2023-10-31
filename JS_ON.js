const mesa = {
    altura: '1 metro  e 20',
    peso: '30kg',
    cor: 'marrom',
    material: 'madeira'
}

console.log(mesa)

const animal= {
    tipo: 'gato',
    nome: 'gatinho',
    sons(){ console.log('miau miau')}
}
console.log(animal)
console.log(animal.tipo)
console.log(animal.nome)
animal.sons()

const livro = {}
livro.autor = 'Jane Smith'
console.log(livro)
livro.anoPublicacao=2006
console.log(livro)
delete livro.anoPublicacao
console.log(livro)

const funcionario = {}
funcionario['ocupação'] = 'vendas'
funcionario['viaja frequentemente'] = true
funcionario['primeiro territorio'] = 'Chicago'
funcionario['25'] = 'total de clientes'

console.log(funcionario)