


let n = 0
let max = 10

while(n<max){
    console.log('Número - ' + n)
    n++
    if(n>5){
        break // Loop interrompido, passa para o próximo bloco de cód
    }
}

console.log('Fim do programa')


let pares = 0

for(let i=0; i<max; i++){
    if(i%2!=0){
        continue // Irá pular essa interação do loop e ir para a próxima
    }
    pares++
}

console.log('Quantidade de números pares: ' + pares)
console.log('Fim do programa')
