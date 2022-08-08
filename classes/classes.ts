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
