"use strict"

function teste(){
    if(true){
        let nome='André'
        console.log('Dentro do if do teste: ' + nome)
    }
    console.log('Dentro da função teste mas não do if: ' + nome) // Caso a variavel fosse declarada com var esse console.log seria printado
}

teste()

console.log('Fora de teste: ' + nome) // Ao chegar aqui dará erro, pois esta tentando chamar uma variavel sem estar no escopo da função dela

const sobrenome='Ramos' // Essa é uma variavel que o valor não pode ser alterado.
