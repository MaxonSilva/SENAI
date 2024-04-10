// INICIO EXERCICIO 03
const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
   const numero = parseInt(prompt(`Digite o ${i +  1} número: `));
    numeros.push(numeros);
}

for(let i = 0; i < 5; i++){
    console.log(`O ${i + 1} número é ${numeros[1]}`)
}
// FIM EXERCICIO 03


//INICIO EXERCICIO 04

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual

}, 0)


console.log("A soma dos numeros é: ", soma)
// FIM EXERCICIO 04

// INICIO EXERCICIO 05

const numerosOrdenados = [...numeros]
numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)

console.log("A lista de números ordenados é ", numerosOrdenados)

// FIM EXERCICIO 05

// INICIO EXERCICIO 06

const soPares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
        return true
    }
})


console.log("O novo array com números pares é: ", soPares)

// FIM EXERCICIO 06

// INICIO EXERCICIO 07

const quadrados = numeros.map(numeroatual => numeroatual * numeroatual)

console.log("O array dos quadrados dos números é: ", quadrados)


// FIM EXERCICIO 07
