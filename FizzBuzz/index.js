//dividendo % divisor === 0;


const fizzBuzz = (n) => {
    if (!Number.isFinite(n)) {
        return 'O valor não é um número';
    }

    // Se n for divisível por 3 e por 5, retorna 'FizzBuzz'
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    // Se n for divisível por 3, retorna 'Fizz'
    if (n % 3 === 0) return 'Fizz';
    // Se n for divisível por 5, retorna 'Buzz'
    if (n % 5 === 0) return 'Buzz';
    // Caso contrário, retorna o próprio número
    return n;
}

const n = 100;

for (let i = 1; i <= n; i++) {
    console.log(fizzBuzz(i));
}
