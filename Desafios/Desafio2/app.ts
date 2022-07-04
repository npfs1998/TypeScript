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


enum Ocupacao {
    Atriz,
    Padeiro
}

// Modo 1
type PessoaHumanaModo1 = {
    nome: string,
    idade: number,
    profissao: Ocupacao 
}

let pessoa1Modo1: PessoaHumanaModo1 = {
    nome: "Ana",
    idade: 25,
    profissao: Ocupacao.Atriz 
};

let pessoa2Modo1: PessoaHumanaModo1 = {
    nome: "João",
    idade: 32,
    profissao: Ocupacao.Padeiro 
};

// Modo 2
class PessoaHumanaModo2 {
    nome: string;
    idade: number;
    profissao: Ocupacao;

    constructor(nome: string, idade: number, profissao: Ocupacao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

}

let pessoa1Modo2: PessoaHumanaModo2 = new PessoaHumanaModo2("Ana", 25, Ocupacao.Atriz);
let pessoa2Modo2: PessoaHumanaModo2 = new PessoaHumanaModo2("João", 32, Ocupacao.Padeiro);


