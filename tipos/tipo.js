"use strict";
// string
let nome = 'Joao';
console.log(nome);
// nome = 28;
// numbers
let idade = 33;
// idade = 'Ana';
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 33;
console.log(typeof minhaIdade);
// array
let hobbies = ['correr', 'pedalar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
console.log(hobbies.length);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ['Bracajá', 534, ''];
console.log(endereco);
endereco = ['Masato Sakai', 180, 'Paineiras 2'];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Preto"] = 2] = "Preto";
    Cor[Cor["Amarelo"] = 3] = "Amarelo";
    Cor[Cor["Laranja"] = 4] = "Laranja";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Amarelo);
console.log(Cor.Laranja);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2020 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade;
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
// tipo função
let calculo;
// calculo = digaOi();
// calculo();
// calculo = {};
calculo = multiplicar;
console.log(calculo(11, 13));
// objetos
let usuario = {
    nome: 'João',
    idade: 32
};
console.log(usuario);
usuario = {
    idade: 22,
    nome: 'Ana'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionario2 = {
    supervisores: ['Marco', 'Felipe'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
// Tipo Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabão',
    preco: 11,
    validaProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validaProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Felipe',
    tel1: '987654321',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Felipe',
    contaBancaria: contaBancaria,
    contatos: ['97748884', '32994995']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map