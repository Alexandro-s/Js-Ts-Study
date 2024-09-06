const array = [10, 'Eu sou', true, {xama: 'Gojo', idade: 27}, [1,2,3]];

// adicinar um elemeto ao final do array

array.push(null, undefined);

// Remove o ultimo elemento do array

array.pop();

// adicionar elemento ao inicio do array 

array.unshift('No principio');

// Removendo o primeiro elemento

array.shift();

// Modificar um elemento especifico

array[2] = false;

// Ordenar o array numericamente 
array.sort((a,b) => a -b);

// Transformando uma array em STRING 

const arrayTypeString = array.join(', ');

// Encontrado o indice de um elemento 

const indiceDoVerdadeiro = array.indexOf(true);

// interando sobre um array 

array.forEach((elemento, i ) => {
    console.log(`Elemento ${i}: ${elemento}`);
});

// Filtrando elementos que nao sao numeros 

const onlyNumber = array.filter(elemento => typeof elemento === 'number');

// Criando um novo array com os elementos duplicados 

const arrayDuplicado = array.concat(array);

console.log('Array final:', array);
console.log('Array como string:', arrayTypeString);
console.log('Índice do verdadeiro:', indiceDoVerdadeiro);
console.log('Números:', onlyNumber);
console.log('Array duplicado:', arrayDuplicado);



// Utilizando o método map para criar um novo array com os elementos duplicados
const arrayDobrado = meuArray.map(elemento => elemento * 2); // Multiplica cada elemento por 2

// Utilizando o método reduce para somar todos os números do array
const somaDosNumeros = meuArray.reduce((acumulador, elemento) => {
    if (typeof elemento === 'number') {
        return acumulador + elemento;
    }
    return acumulador;
}, 0);

// Utilizando o método some para verificar se existe algum elemento maior que 5
const existeMaiorQueCinco = meuArray.some(elemento => typeof elemento === 'number' && elemento > 5);

// Utilizando o método every para verificar se todos os elementos são verdadeiros
const todosSaoVerdadeiros = meuArray.every(elemento => typeof elemento === 'boolean' && elemento === true);

// Utilizando o método splice para remover um elemento do meio do array
meuArray.splice(2, 1); // Remove 1 elemento a partir do índice 2

console.log('Array com elementos dobrados:', arrayDobrado);
console.log('Soma dos números:', somaDosNumeros);
console.log('Existe algum elemento maior que 5:', existeMaiorQueCinco);
console.log('Todos os elementos são verdadeiros:', todosSaoVerdadeiros);
console.log('Array após o splice:', meuArray);