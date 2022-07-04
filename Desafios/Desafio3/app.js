"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizarsaldo');
var botaoLimpar = document.getElementById('limparsaldo');
var valorAdicionar = document.getElementById('valor');
var campoSaldo = document.getElementById('camposaldo');
var mensagemerro = document.getElementById('mensagemerro');
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
    mensagemerro.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    mensagemerro.innerHTML = '';
    if (!Number(valorAdicionar.value)) {
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
