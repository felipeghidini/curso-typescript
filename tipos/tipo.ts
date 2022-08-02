// string
let nome: string = 'Joao';
console.log(nome);
// nome = 28;

// numbers
let idade: number = 33;
// idade = 'Ana';
idade = 27.5;

console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 33;
console.log(typeof minhaIdade);

// array
let hobbies: any[] = ['correr', 'pedalar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
console.log(hobbies.length);

hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ['Bracajá', 534, ''];
console.log(endereco);

endereco = ['Masato Sakai', 180, 'Paineiras 2'];
console.log(endereco);

// enums
enum Cor {
    Cinza,
    Azul,
    Preto,
    Amarelo,
    Laranja
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);

console.log(Cor.Amarelo);
console.log(Cor.Laranja);


// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2020}
console.log(carro);

// funções
function retornaMeuNome(): string {
    // return minhaIdade;
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log('Oi');    
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 3));

// tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi();
// calculo();
// calculo = {};

calculo = multiplicar;
console.log(calculo(11, 13));

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 32
}
console.log(usuario);

usuario = {
    idade: 22,
    nome: 'Ana'
}
console.log(usuario);


// Desafio

/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (numero) e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horario (> 8)
*/ 

// alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal';
        } else {
            return 'Fora do horário';
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Marco', 'Felipe'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal';
        } else {
            return 'Fora do horário';
        }
    }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));


// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);


// Checando tipos
let valor = 30;

if (typeof valor === "number") {
    console.log('é um number');
} else {
    console.log(typeof valor);
    
}

// Tipo Never
function falha(msg: string): never {
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
}

produto.validaProduto();

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Felipe',
    tel1: '987654321',
    tel2: null
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any
podeSerNulo = 12
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor;
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Felipe',
    contaBancaria: contaBancaria,
    contatos: ['97748884', '32994995']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista);
