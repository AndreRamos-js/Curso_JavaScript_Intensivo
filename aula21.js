
function canal(){
    let num1=10
    let num2=20
    let res=num1+num2
    return res // Pode-se usar o return para retornar o valor de uma operação através do console.log por exemplo passando a função dele
}

//console.log(canal()) // Função onde esta a operação sendo passada no console.log

function canal(){
    let num1=10
    let num2=20
    let res=num1+num2
    if(res<10){
        return 'É menor que 10'
    }else{
        return 'É maior que 10'
    }
}

console.log(canal())
