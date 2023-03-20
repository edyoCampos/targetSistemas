/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem 
que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente
definido no código;
*/

/*Como eu fiz:

inicialmente eu tinha desenvolvido essa código : 

const number = parseInt(prompt("Digite um número:"));

let a = 0,
  b = 1;
let isFibonacci = false;

while (b <= number) {
  if (b === number) {
    isFibonacci = true;
    break;
  }
  const c = a + b;
  a = b;
  b = c;
}

if (isFibonacci) {
  console.log(number + " pertence à sequência de Fibonacci.");
} else {
  console.log(number + " não pertence à sequência de Fibonacci.");
}


Mas resolvi repensar a lógica do código anterior para ter um tempo de
execução menor, especialmente em relação a números grandes, utilizei 
uma fórmula matemática para verificar se o número pertence à sequência 
de Fibonacci, em vez de iterar sobre todos os números da sequência até 
chegar ao número em questão.

A fórmula é a seguinte:
5x² + 4 ou 5x² - 4

Se o resultado desta fórmula for um número quadrado perfeito, então o número pertence à sequência de Fibonacci.

*/

const number = Number(prompt("Digite um número: "));

const isPerfectSquare = (num) => {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
};

const isFibonacci =
  isPerfectSquare(5 * Math.pow(number, 2) + 4) ||
  isPerfectSquare(5 * Math.pow(number, 2) - 4);

isFibonacci
  ? console.log(`${number} pertence à sequência de Fibonacci.`)
  : console.log(`${number} não pertence à sequência de Fibonacci.`);
