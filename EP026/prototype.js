/*

Em js, prototype e um mecanismo pelo qual objectos podem herda propriedades e metodos e propriedades de outros objectos. Cada fucntion me js tem uma propriedade chamada prototype, que e um objeto que contem propriedades e metodos que podem ser compartilhados entre todas as instancia criadas a partir dessa funcao.

*/

function Hero (fantasmaNobre, name) {
    this.fantasmaNobre = fantasmaNobre;
    this.name = name;
}

Hero.prototype.np = function() {
   console.log(`${this.name} chama seus NP ${this.fantasmaNobre}...`);
};

const hero = new Hero ('Emiya',' Unlimited Blades Works');

hero.np();

console.log(hero.__proto__ === Hero.prototype);  // true




// Como definir um método no prototype
// Quando você cria um objeto a partir de uma função construtora, pode adicionar métodos ao prototype dessa função, em vez de defini-los diretamente dentro da função construtora.

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    // Não estamos definindo métodos aqui dentro da função construtora
}

// Definindo o método no prototype do Carro
Carro.prototype.ligar = function() {
    console.log(`${this.marca} ${this.modelo} está ligado.`);
};

// Criando instâncias de Carro
const carro1 = new Carro('Honda', 'Civic');
const carro2 = new Carro('Ford', 'Focus');

// Chamando o método
carro1.ligar();  // "Honda Civic está ligado."
carro2.ligar();  // "Ford Focus está ligado."