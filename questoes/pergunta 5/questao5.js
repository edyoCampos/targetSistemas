/*
Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de 
sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

/*
Como eu fiz:

O código tem o objetivo de inverter uma string originalString e armazenar
o resultado na variável invertedString.

O código começa inicializando a variável invertedString como uma string vazia.
Em seguida, é iniciado um loop for que começa na última posição da string original
e vai até a primeira posição, percorrendo a string de trás para frente.
O loop faz isso utilizando a variável i que é decrementada a cada iteração, iniciando
na posição final da string (comprimento da string menos um) e decrementando até chegar a zero.

Dentro do loop, a cada iteração, o caractere na posição i é adicionado à string invertedString
utilizando o operador de concatenação +=. Ao final do loop, a string invertedString contém a string
original invertida.

O resultado final é mostrado no console utilizando a função console.log().
Nesse caso, a string invertida será exibida como "aditrevni res a gnirts ed olpmxE".

*/

let originalString = "Exemplo de string a ser invertida";
let invertedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
  invertedString += originalString[i];
}

console.log(invertedString); // "aditrevni res a gnirts ed olpmxE"
