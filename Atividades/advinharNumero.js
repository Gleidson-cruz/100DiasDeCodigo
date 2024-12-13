/* O sistema gera aleatoriamente um numero, e o usuario tenta acertar */

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const numAleatorio = random(1, 10);
console.log(numAleatorio);
let numero;

do {
  numero = parseInt(prompt("Digite um numero"));

  if (numero === numAleatorio) {
    console.log("Parabéns! Você acertou o número.");
  } else {
    console.log("Tente novamente!");
  }
} while (numero !== numAleatorio);
