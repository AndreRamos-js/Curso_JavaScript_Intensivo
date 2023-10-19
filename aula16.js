


let num = [10, 20, 30, 40, 50]


for(i=0; i<num.length; i++){    // .leigth retornar a quantidade de caracteres de uma string ou o tamanho de um array.
    console.log(num[i])     // Determinar a variavel com o array e o [i] dessa forma faz com que ao invés de ser printado a posição, printa o valor de cada posicao
}



// Outra forma de fazer a mesma operação mais simplificada é o for in
for(n in num){
    console.log(num[n])
}


// Existe tambem o for of

for(n of num){
    console.log(n)
}

const objs=document.getElementsByTagName('div')

for(o of objs){
    console.log(o.innerHTML="André")
}
