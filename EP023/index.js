// Trabalhar com Object.defineProperty() e Object.defineProperties

function Produto (nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    this.estoque = estoque,
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        value: estoque,  // valor 
        writable: true,  // Pode alterar 
        configurable: true // Configutavel

    });
    
    Object.defineProperties(this, {
        nome: {
        enumerable: true, // Mostra a chave 
        value: nome,  // valor 
        writable: true,  // Pode alterar 
        configurable: false // Configutavel
        },

        preco: {
        enumerable: true, // Mostra a chave 
        value: preco,  // valor 
        writable: true,  // Pode alterar 
        configurable: true // Configutavel
        }
        
    })
}
const p = new Produto ('Mouse', 230, 9);
console.log(p);


/* Object.defineProperty(objeto, 'nomeDaPropriedade', {
    valor: valor,                // Define o valor da propriedade
    writable: true | false,      // Se pode ser modificado ou não
    enumerable: true | false,    // Se aparece em loops como for...in
    configurable: true | false,  // Se pode ser redefinida ou deletada
    get: function() { ... },     // Getter (opcional)
    set: function(valor) { ... } // Setter (opcional)
});


writable: false significa que o valor da propriedade não pode ser alterado.
enumerable: true permite que a propriedade apareça em loops como for...in ou seja listada por Object.keys().
configurable: false impede que a propriedade seja excluída ou tenha sua definição alterada.



*/