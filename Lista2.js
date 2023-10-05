// Lista 2 – Exercícios de cálculos simples

// 1. Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores: sucessor e antecessor.
var num = parseInt(prompt("Digite um número")); 

var ant = num - 1;
var suc = num + 1;

console.log("Antecessor: " + ant);
console.log("sucessor: " + suc);

// 2. Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar.
var qtdeDolares = parseFloat(prompt("Digite a qtde de dólares"));
var cotacao = parseFloat(prompt("Digite a cotação do dólar"));

var valorEmReais = qtdeDolares * cotacao;

console.log("Valor em reais: " + valorEmReais);



// 3. Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas.
var anoNascimento = parseInt(prompt("Digite o ano de nascimento"));
var anoAtual = parseInt(prompt("Digite o ano atual"));

var idadeEmAnos = anoAtual - anoNascimento;
var idadeEmMeses = idadeEmAnos * 12;
var idadeEmSemanas = idadeEmAnos * 52;
var idadeEmDias = idadeEmAnos * 365;

console.log("Idade em anos: " + idadeEmAnos);
console.log("Idade em meses: " + idadeEmMeses);
console.log("Idade em semanas: " + idadeEmSemanas);
console.log("Idade em dias: " + idadeEmDias);


// 4. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
var custoFabrica = parseFloat(prompt("Digite o custo de fábrica"));

// debugger;
var valorDistribuidor = custoFabrica * (28/100);
var valorImpostos = custoFabrica * (45/100);

var custoConsumidor = custoFabrica + valorDistribuidor + valorImpostos;

console.log("Custo ao consumidor: " + custoConsumidor);


// 5. Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
// var totalEleitores = parseInt(prompt("Digite o total de eleitores"));
var totalVotosBrancos = parseInt(prompt("Digite o total de votos brancos"));
var totalVotosNulos = parseInt(prompt("Digite o total de votos nulos"));
var totalVotosValidos = parseInt(prompt("Digite o total de votos válidos"));

var totalEleitores = totalVotosBrancos + totalVotosNulos + totalVotosValidos;

var percVotosBrancos = totalVotosBrancos/totalEleitores * 100;
var percVotosNulos = totalVotosNulos/totalEleitores * 100;
var percVotosValidos = totalVotosValidos/totalEleitores * 100;

console.log("Percentual de votos brancos: " + percVotosBrancos + "%");
console.log("Percentual de votos nulos: " + percVotosNulos + "%");
console.log("Percentual de votos válidos: " + percVotosValidos + "%");



var kmPercorridos = parseFloat(prompt("Digite a qtde de kms percorridos"));
var diasAlugados = parseInt(prompt("Digite a qtde de dias alugados"));

var valorPorKm = kmPercorridos * 0.2;
var valorPorDia = diasAlugados * 90;

var valorTotal = valorPorKm + valorPorDia;

console.log("Valor total: " + valorTotal);



