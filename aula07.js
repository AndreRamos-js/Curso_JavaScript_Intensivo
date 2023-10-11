/*
Operadores Lógicos
    && - and
    || - or
    ! - not
*/

let n1,n2,n3

n1=5
n2=10
n3=15

console.log(n1>n2) // False porque n1 não é maior que n2
console.log(n1>n2) && (n2>n1) // Continua False porque False and True = False
console.log(n2>n1) || (n1>n2) // True porque True or False = True

// Na ordem de precedencia o que define no and e or é: (False and True = False), (True and False = False),
                                                    //(True or False = True), (False or True = True)
                                                    

if((n3>n2) && (n1>n3)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}