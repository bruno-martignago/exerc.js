var valor1 = parseInt(prompt("Digite o primeiro número"));
var valor2 = parseInt(prompt("Digite o segundo número"));
var valor3 = parseInt(prompt("Digite o terceiro número"));

if (valor1 > valor2 && valor1 > valor3) {
    alert("O primeiro valor " + valor1 + ", é o maior");
} else if (valor2 > valor1 && valor2 > valor3) {
    alert("O segundo valor " + valor2 + ", é o maior");
} else {
    alert("O terceiro valor " + valor3 + ", é o maior");
}