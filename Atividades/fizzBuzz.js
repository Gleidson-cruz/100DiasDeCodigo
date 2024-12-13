/*  a função chamada fizzBuzzModificado que recebe um número inteiro n como parâmetro
    e retorna um array com os números de 1 até n.

    Para múltiplos de 3, adiciona a string "Fizz" ao array.
    Para múltiplos de 5, adiciona a string "Buzz" ao array.
    Para números que são múltiplos de 3 e 5, adiciona a string "FizzBuzz" ao array.
    Para todos os outros números, adiciona o próprio número ao array. */


let array = []

function fizzBuzz(n) {
    for(i = 0 ; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz")
        } else if ( i % 5 === 0) {
            array.push("Buzz")
        } else if (i % 3 === 0) {
            array.push("Fizz")
        } else {
            array.push(i)
        }
    }
}

fizzBuzz(-1)
console.log(array)