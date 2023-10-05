var anoNascimento = parseInt(prompt("Digite o ano de nascimento"));

var idade = 2023 - anoNascimento;

var mensagem = "";

if (idade >= 0 && idade <= 15){
    mensagem = "Proibido votar";
} else if( (idade >= 16 && idade <= 17) || idade >= 70 ) {
    mensagem = "Voto facultativo";
} else {
    mensagem = "Voto obrigatório";
}
alert(mensagem);