// 1) Faça um algoritmo que dado um número, calcule e mostre o seu dobro;
var num = 100;

var res = num * 2;

alert("Resultado: " + res);


// 2) Faça um algoritmo que dado um número, calcule e mostre o valor do número elevado ao quadrado;
var num = 5;

var quadrado = num * num;

alert("Resultado: " + quadrado);


// 3) Faça um algoritmo que dado 5 números, calcule e mostre a média;
var n1 = 9;
var n2 = 8;
var n3 = 4;
var n4 = 3;
var n5 = 10;

var media = (n1 + n2 + n3 + n4 + n5) / 5;

alert("Resultado: " + media);


// 4) Faça um algoritmo que dado 4 números, calcule e mostre a soma dos três primeiros números multiplicado pelo último número;
var n1 = 6;
var n2 = 8;
var n3 = 10;
var n4 = 6;

var res = (n1 + n2 + n3) * n4;

alert("Resultado: " + res);


// 5) Faça um algoritmo que dado um número, calcule e mostre o equivalente a 30% dele.
var num = 100;

var res = num * (30/100);

alert("Resultado: " + res);


// 6) Um vendedor recebe, por mês, um salário fixo e mais um adicional de 20% do valor das vendas que ele efetuou. Faça um algoritmo que dado o salário fixo e o valor de venda do mês, calcule e mostre o salário final do vendedor. 
var salarioFixo = 8000;
var totalVendas = 10000;

var salarioFinal = salarioFixo + (totalVendas * (20/100));

alert("Salário Final: " + salarioFinal);


// 7) Um banco concede um valor para empréstimo de até 60% do saldo médio anual do cliente. Faça um algoritmo que dado o saldo médio do cliente, calcule e mostre o valor disponível para empréstimo.
var saldoMedio = 5000;

var valorEmprestimo = saldoMedio * (60/100);

alert("Valor para empréstimo: " + valorEmprestimo);