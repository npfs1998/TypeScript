// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/

// Modo 1
let funcionarioModo1 = {
    codigo: 10,
    nome: 'João'
};


// Modo 2
let funcionarioModo2: {codigo: number, nome: string} = {
    codigo: 0,
    nome: 'João'
}
    
// Modo 3
interface funcionarioModo3 {
    codigo: number,
    nome: string
};

let funcionarioM3 = {} as funcionarioModo3;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';


// Modo 4
class funcionarioModo4 {
    codigo: number;
    nome: string;

    constructor(codigo: number, nome: string){
        this.codigo = codigo;
        this.nome = nome;
    }
}

let funcionarioM4 = new funcionarioModo4(10, 'João');
