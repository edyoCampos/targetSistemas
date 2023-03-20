/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação
que cada estado teve dentro do valor total mensal da distribuidora.
*/

/*Como eu fiz:

Esse código é responsável por calcular o faturamento total e percentual de cada estado de uma
distribuidora de produtos, a partir de um objeto que contém os valores de faturamento de cada estado.

A variável faturamento é um objeto que contém as chaves com o nome de cada estado e os valores com os
respectivos valores de faturamento.

A variável total é inicializada com o valor zero e, em seguida, um laço for...in é usado para iterar sobre
as chaves do objeto faturamento. Dentro desse laço, o valor correspondente a cada chave é somado à variável
total, resultando no valor total mensal da distribuidora.

Depois de calcular o valor total, um segundo laço for...in é usado para iterar sobre as chaves do objeto faturamento.
Dentro desse laço, é calculado o percentual de representação de cada estado, que é o valor de faturamento do estado 
dividido pelo valor total multiplicado por 100. Esse percentual é então exibido no console, junto com o nome do estado.

Assim, ao executar esse código, será exibido o percentual de representação de cada estado no faturamento 
total da distribuidora.

*/

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total = 0;

// calcula o valor total mensal da distribuidora
for (let estado in faturamento) {
  total += faturamento[estado];
}

// calcula o percentual de representação de cada estado
for (let estado in faturamento) {
  let percentual = (faturamento[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
