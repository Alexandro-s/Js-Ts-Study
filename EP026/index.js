const carro5 = {
    marca: 'Chevrolet',
    modelo: 'Onix'
};

const carroPrototype2 = {
    ligar: function() {
        console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
};

// Definindo o prototype do carro5 para carroPrototype2
Object.setPrototypeOf(carro5, carroPrototype2);
carro5.ligar();  // "Chevrolet Onix está ligado."

// Obtendo o prototype de carro5
console.log(Object.getPrototypeOf(carro5));  // { ligar: [Function: ligar] }

// 5. Usando Object.getPrototypeOf() e Object.setPrototypeOf()
// Esses métodos são a maneira moderna e recomendada de acessar e alterar o prototype de um objeto, substituindo o uso direto de __proto__.

// Object.getPrototypeOf(obj): Obtém o prototype de um objeto.
// Object.setPrototypeOf(obj, proto): Define o prototype de um objeto.