


/*
let n1 = [10, 20, 30]
let n2 = [40, 50, 60]
let n3 = [...n1, ...n2]


console.log('n1: ' + n1)
console.log('n2: ' + n2)
console.log('n3: ' + n3)
*/

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

objs2.forEach(element => {// Dessa forma, como o objs2 fo espalhado com spread, a função forEach irá retornar os elementos de objs2
    console.log(element)
    });

console.log(objs1)
console.log(objs2)

