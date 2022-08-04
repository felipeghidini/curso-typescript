"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar casaco';
    console.log(acao);
}
const cpf = '123.456.789-99';
// cpf = '123.4345.233';
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'Interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Arrow function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 3));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(3, 2));
const saudacao = () => console.log('Ola!');
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('Joao');
// this
// function normalComThis() {
//     console.log(this);    
// }
// normalComThis();
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' });
// normalComThisEspecial();
// // this???
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
//     arrowComThisEspecial();
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('FIM!');
}
contagemRegressiva();
contagemRegressiva(3);
// spread & rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['Joao', 'Maria', 'Fernanda'];
const turmaB = ['Felipe', 'Rafael', 'Amanda', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 632);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const preco = item.preco;
console.log(nomeItem);
console.log(preco);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Template string
const usuarioID = 'SuporteCod3r';
const notificacoes = '9';
// const boasVindas = 'Boas vindas ' + usuarioID +
//         ' Notificações: ' + notificacoes;
// console.log(boasVindas);
const boasVindas = `
Boas vindas ${usuarioID}
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes} 
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// DESAFIO 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// DESAFIO 2
const dizerOla = function (nome = 'Pessoa') {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// DESAFIO 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// DESAFIO 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// DESAFIO 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// DESAFIO 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// CALBACK
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err));
//# sourceMappingURL=ecmascript.js.map