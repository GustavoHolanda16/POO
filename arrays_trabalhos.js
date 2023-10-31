const prompt = require ('prompt-sync')()
let lista_dados = []
let lista_cam =['NOME','ESTADO','TELEFONE','EMAIL','CPF']
let con
let cont = true
while(cont){
    for (con=0;con=4;con++){
        let x = prompt('Digite o seu',lista_cam[con],': ')
        lista_dados[con]=x
    }
    console.log=('Quer sobreescrever a lista que acabou de preencer? ')
    let conf = prompt('Digite SIM para reescrever e NAO para encerrar: ')
    if (conf=='sim'||conf=='SIM'){
        console.log('Voce quer reescrever o array!')
        console.log('Aguarde!...')
        cont = true
    }
    else{
        console.log('Você descidiu encerrar aqui!')
        console.log("Aguarde!...")
        cont = false
    }
}
