//Exercicio 1.

let diaDaSemana = prompt("Qual e o dia da semana?");
if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!")
}

// Exercicio 2.

let numero = prompt("Digite um número:");
if (numero > 0) {
    alert(`O numero ${numero} é positivo`);
} else if(numero < 0) {
    alert(`O numero ${numero} é negativo`);
} else if(numero = 0) {
    alert(`O numero ${numero} é zero`);
}

// Exercicio 3.

let pontuacao = prompt("Digite sua pontuação:");
if (pontuacao >= 100) {
    alert("Parabéns, você ganhou!");
} else {
    alert("Você perdeu, Tente novamente!")
}