"use strict";
// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Atriz"] = 0] = "Atriz";
    Ocupacao[Ocupacao["Padeiro"] = 1] = "Padeiro";
})(Ocupacao || (Ocupacao = {}));
var pessoa1Modo1 = {
    nome: "Ana",
    idade: 25,
    profissao: Ocupacao.Atriz
};
var pessoa2Modo1 = {
    nome: "João",
    idade: 32,
    profissao: Ocupacao.Padeiro
};
// Modo 2
var PessoaHumanaModo2 = /** @class */ (function () {
    function PessoaHumanaModo2(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    return PessoaHumanaModo2;
}());
var pessoa1Modo2 = new PessoaHumanaModo2("Ana", 25, Ocupacao.Atriz);
var pessoa2Modo2 = new PessoaHumanaModo2("João", 32, Ocupacao.Padeiro);
