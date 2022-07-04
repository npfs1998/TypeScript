// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizarsaldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limparsaldo') as HTMLButtonElement;
let valorAdicionar = document.getElementById('valor') as HTMLInputElement;
let campoSaldo = document.getElementById('camposaldo') as HTMLSpanElement;
let mensagemerro = document.getElementById('mensagemerro') as HTMLSpanElement;

campoSaldo.innerHTML = "0"

function somarAoSaldo(soma : number) {
    campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    mensagemerro.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    mensagemerro.innerHTML = '';
    if(!Number(valorAdicionar.value)) {
        mensagemerro.innerHTML = "Valor inválido";
        return;
    }

    somarAoSaldo(Number(valorAdicionar.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
