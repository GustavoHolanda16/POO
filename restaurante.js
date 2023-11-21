const ent1 = document.querySelector('#nome')
const ent2 = document.querySelector('#val')
const ent3 = document.querySelector('#kg')
const sai1 = document.querySelector('#nomeres')
const sai2 = document.querySelector('#valor')
function preco(){
    const nome = ent1.value
    const val = ent2.value
    const kg = ent3.value
    const total = val*kg
    sai1.innerText = 'Restaurante '+nome
    sai2.innerText = 'Valor da Refeição é: R$'+total
}