const numeros = [1, 2, 3, 4, 5, 6,];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);

// ... rest, ... spread

const letras = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [caixa1, caixa2, caixa3] = letras;

console.log(caixa3[1]);