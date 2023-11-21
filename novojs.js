const frm = document.querySelector("input")
const ide = document.getElementById("#idade")
const resp = document.querySelector("#nome")
const resp1 = document.getElementById("#idade1")

function mostrar(){
    const nome = frm.value
    resp.innerText = "Olá " + nome
}
function revelar(){
    const idade = ide.value
    resp1.innerText = "Sua idade é: " + idade
}
