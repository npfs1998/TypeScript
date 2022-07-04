"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/
// Modo 1
var funcionarioModo1 = {
    codigo: 10,
    nome: 'João'
};
// Modo 2
var funcionarioModo2 = {
    codigo: 0,
    nome: 'João'
};
;
var funcionarioM3 = {};
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';
// Modo 4
var funcionarioModo4 = /** @class */ (function () {
    function funcionarioModo4(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
    return funcionarioModo4;
}());
var funcionarioM4 = new funcionarioModo4(10, 'João');
