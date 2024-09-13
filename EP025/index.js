// Trabalhando com Objectos 

// Object.key este que vai lhe retornar um array com os valores das chaves do objeto

const hero = {
    nome: 'Alice',
    poder: 9000
};

console.log(Object.keys(hero));

// Object.values - Esse vai retornar os valores das propriedades enumeraveis desse objeto

const sword = {
    nome: 'MoonLight',
    habilidade: 'Veu do luar',
    int: 56
};

console.log(Object.values(sword));

// Object.entries() - Retorna um arrau de pares [chave, valor ] do Objecto (enumeraveis) 

const seisOlhos = {
    tecnica:'ilimitado'
};

console.log(Object.entries(seisOlhos));




// object.hasOwnProperty() esse que verifica se um objecto possui determinada propriedade (isso sem olhar na cadeia de prototipos)

const monstro = {
    nome: 'Gulang',

    descricao:function() {
        return `Para mata um ${this.nome} e preciso arracar sua cabeca quando junata ao corpo.`
    }, 

    dmg: 8
};

console.log(monstro.hasOwnProperty('nome'));
console.log(monstro.hasOwnProperty('descricao'));
console.log(monstro.hasOwnProperty('dmg'));

// Object.getOwnPropertyNames() - Estes que retorna uma array com todas asd propriedades enumeraveis e nao enumeraveis de um object.

const forja = {
    arma: 'Martelo',
    temperaturaDoFogo: 1200
};

console.log(Object.getOwnPropertyNames(forja));

const arma = {
    tipo: 'Corte',
};

const prototipo = Object.getPrototypeOf(arma);

console.log(prototipo);

// Object.is - Esse verifica se dois valores sao realmente o mesmo valor.

console.log(Object.is(25, 25));  // true
console.log(Object.is(NaN, NaN));  // true (diferente do `===`)
console.log(Object.is(0, -0));  // false

// Object.seal() - Impede a adicao ou remocao de propriedades em um objecto, mas permite modificar as propriedades existentes.

const numeros = {
    n1: 1,
    n2: 2,
    n3: 3,
};

Object.seal(numeros);

numeros.n1 = '1'; // Isso funciona;
numeros.n2 = '2'; // Isso funciona;
numeros.n3 = '3'; // Isso funciona;
numeros.n4 = 4; // isso nao funciona 

console.log(numeros);

// for in  - Itera sobre as propriedades enumeráveis de um objeto.

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
  };
  
  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }

  