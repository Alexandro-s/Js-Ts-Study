// TRABALHANDO COM FILTER 
const numeros = [1,2,3,10,40,100,43,23,12,101,202];

// Retorna apenas numeros menores ou igual a 10 
const numerosFilter = numeros.filter(valor => valor <= 10);

//console.log(numerosFilter);

const pessoas = [
    {nome:'Gojo', idade: 27},
    {nome: 'Makima', idade: 30},
    {nome: 'Reze', idade: 17},
    {nome: 'Maki', idade: 19},
    {nome: 'Sukuna', idade: 90},
    {nome: 'Etho', idade: 49},

];

// Filtra o tamnho da string/ obj
const pessoasComNomeGrande = pessoas.filter(obj => {
    return obj.nome.length >= 5;
})

// Filtra o maior numero
const pessoasCinquentaMais = pessoas.filter(obj => obj.idade > 50)

// Filtra por uma string especifica 
const nomeFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

// Map vai pecorrer cada elemento do meu array e aplicar alguma  regra a eles.
const pessoasId = pessoas.map((obj, indice) => {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
});

const idadeMenor = pessoas.map(obj => {
    const newIdade = {...pessoas};
    newIdade.idade = 18;

});


//  Reduce utilizado pra reduzir um array a um unico valor 

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

const somaDosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2 ).reduce((ac, valor) => ac + valor);

console.log(somaDosPares)

