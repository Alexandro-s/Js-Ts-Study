// Função que cria um multiplicador
function criaMultiplicador(multiplicador) {
    // Retorna uma função anônima (closure) que multiplica um número pelo multiplicador
    return function (numero) {
        return numero * multiplicador; // Usa o valor do multiplicador capturado pelo closure
    };
}

// Cria uma função que duplica os números
const duplica = criaMultiplicador(2); // criaMultiplicador(2) retorna uma função que multiplica qualquer número por 2

// Cria uma função que triplica os números
const triplica = criaMultiplicador(3); // criaMultiplicador(3) retorna uma função que multiplica qualquer número por 3

// Cria uma função que quadruplica os números
const quadriplica = criaMultiplicador(4); // criaMultiplicador(4) retorna uma função que multiplica qualquer número por 4

// Chama a função 'duplica' passando 3 como argumento e exibe o resultado no console
console.log(duplica(3)); // Resultado: 6 (3 * 2)

// Chama a função 'triplica' passando 2 como argumento e exibe o resultado no console
console.log(triplica(2)); // Resultado: 6 (2 * 3)

// Chama a função 'quadriplica' passando 10 como argumento e exibe o resultado no console
console.log(quadriplica(10)); // Resultado: 40 (10 * 4)
