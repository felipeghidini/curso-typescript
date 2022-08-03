let canal: string = 'Gaveta';
let inscritos: number = 610234;

// canal = inscritos;
console.log(`canal = ${canal}`);

// let nome: string = 'Pedro';

function soma(a: any, b: any) {
    return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean) {
    let saudacao: string;
    if (isManha) {
        saudacao = 'Bom dia';
    } else {
        saudacao = 'Boa vida';
    }
    return saudacao;
}