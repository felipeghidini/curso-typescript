
function echo(objeto: any) {
    return objeto;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'Joao', idade: 27 }));

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
    return objeto;
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'Joao', idade: 27 }));

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 3, 6]);
imprimir<number>([6, 3, 6]);
imprimir<string>(['1', '3', '6']);
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);

class Fila<T> {
    private fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(elemento: T) {
        this.fila.push(elemento);
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        } else {
            return null;
        }
    }

    imprimir() {
        console.log(this.fila);
    }

}

const fila = new Fila<string>('Gui', 'Ana', 'Lu', 'Pedro');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C, valor: V };

class Mapa<C, V> {
    itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        } else {
            this.itens.push(par);
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>()
    }

    imprimir() {
        console.log(this.itens);
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()


// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {
    }

    abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, ' dia').executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(13, 3, 2017);
const d2 = new Data(26, 1, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());


