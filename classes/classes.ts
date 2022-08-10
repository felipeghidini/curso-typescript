class Data {
    // Publico por padrão
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 14, mes: number = 4, ano: number = 1989) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(18, 6, 1991);
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data // posso omitir os "()"
casamento.ano = 2012;
console.log(casamento);



class DataEsperta {
    constructor(public dia: number = 14, public mes: number = 4, public ano: number = 1989) {
    }
}

const aniversarioEsperto = new DataEsperta(18, 6, 1991);
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2012;
console.log(casamentoEsperto);


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    /* Criar metodo precoComDesconto, quais os parametro e o retorno ?
        Alterar metodo resumo para mostrar o preço com desconto
    */

    precoComDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());

const prod2 = new Produto('Caderno Escolar', 14.40, 0.15);
console.log(prod2.resumo());


class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    acelerar(): number {
        return this.alterarVelocidade(5);
    }

    frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
console.log(carro1.acelerar());

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(30).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// simular erros
// carro1.velocidadeAtual = 300;
// console.log('Atual -> ' + carro1.velocidadeAtual);

// carro1.velocidadeMaxima = 500;
// console.log('Maxima -> ' + carro1.velocidadeMaxima);

// carro1.alterarVelocidade(150);
// console.log('Atual -> ' + carro1.velocidadeAtual);


class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    acelerar(): number {
        return this.alterarVelocidade(35);
    }

    frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari('F40', 340);
console.log(`é uma ${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());


//Getters & Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);

// Atributos e métodos estaticos
class Matematica {
    static PI: number = 3.1416;

    static areaCirc(raio: number) {
        return this.PI * raio * raio;
    }
}

console.log(Matematica.areaCirc(4));


// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros:  number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());


class Unico {
    private static instance: Unico = new Unico();
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance;
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora());

// Somente leitura
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-12';
console.log(turboHelice);
