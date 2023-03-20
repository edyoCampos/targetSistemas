/* 
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média;
*/

/*Como eu fiz ou pensei:
Esse código é responsável por manipular um array de objetos chamado faturamentoMensal, onde cada objeto
representa o faturamento de um dia específico do mês. Cada objeto contém duas propriedades: dia e valor,
representando, respectivamente, o dia do mês e o valor do faturamento naquele dia.

O código começa encontrando o menor e o maior valor de faturamento diário do mês, utilizando as funções Math.min()
e Math.max(), respectivamente, juntamente com o método map() do array, que mapeia cada objeto para seu valor de
faturamento.

Em seguida, o código filtra os dias em que houve faturamento e calcula a média mensal de faturamento, utilizando o
método filter() para filtrar os objetos cujo valor de faturamento é maior que zero e, em seguida, utilizando o método
reduce() para somar os valores de faturamento desses objetos e calcular a média mensal.

Por fim, o código conta o número de dias em que o faturamento foi superior à média mensal, utilizando novamente o
método filter() para filtrar os objetos cujo valor de faturamento é superior à média mensal e, em seguida, utilizando
a propriedade length do array resultante para obter o número de objetos filtrados.

O código imprime na tela o menor e o maior faturamento diário do mês, bem como o número de dias em que o faturamento
foi superior à média mensal.


*/

const faturamentoMensal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];

// Encontra o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoMensal.map((dia) => dia.valor));

// Encontra o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoMensal.map((dia) => dia.valor));

// Calcula a média mensal de faturamento, ignorando os dias sem faturamento
const diasComFaturamento = faturamentoMensal.filter((dia) => dia.valor > 0);
const mediaMensal =
  diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0) /
  diasComFaturamento.length;

// Conta o número de dias com faturamento acima da média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia) => dia.valor > mediaMensal
).length;

console.log(`Menor faturamento diário: ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
