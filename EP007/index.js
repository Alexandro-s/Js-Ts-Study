// (Condicao) ? valor para verdadeiro : valor para falso;

let pontiacaoUser = 100;
let nivelUser = pontiacaoUser >= 100 ?  'Max level' : 'Leveling';

let corUser = 'pink';
let corPadrao = corUser || 'Preta';

console.log(nivelUser, corPadrao);