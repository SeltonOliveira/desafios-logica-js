let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio';

function verificarBtn() {
    console.log('O botão foi clicado!');
}

function exibirAlerta() {
    alert('Eu amo JS');
}



function verificarCidade() {
    let nomeCidade = prompt('Diga uma cidade Brasileira que você goste: ');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}


function somandoNumeros() {
    let num1 = Number(prompt('Digite o primeiro número.'));
    let num2 = Number(prompt('Digite o segundo número.'));

    let resultado = num1 + num2;

    alert(`${num1} + ${num2} = ${resultado}.`);
}

