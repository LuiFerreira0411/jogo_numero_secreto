//alert('Bem vindo ao jogo do numero secreto'); 
let numeroSecreto = parseInt(Math.randon() * 100 + 1); 
console.log(numeroSecreto); 
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt("Digite um número de 1 a 100");

    if (chute == numeroSecreto){
        alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
        } else {
            if (chute > numeroSecreto){
                alert(`O numero secreto é menor que ${chute}`);
            } else {
                alert(`O numero secreto é maior que ${chute}`)
            }
        }
        tentativas++;
     }


let PalavraTentaivas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//let palavraTentativa;
//if (tentativas > 1){
        //alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//} else {
        //alert(`Você acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativa`);
//}