const produto  = {
    nome: 'Camisa',
    preco: 30,
    desconto: 0
};


Object.defineProperty(produto, 'precoComDesconto', {
    // Getter 
    get: function() {
        return this.preco - (this.preco * this.desconto);
    },

// SETTER 

    set: function(valor) {
        if (valor < 0) {
            return `Desconto Invalido`;
        } else {
            this.desconto = valor;
        }
    } 
});

console.log(produto.precoComDesconto);

produto.precoComDesconto = 0.2 // 20% 
console.log(produto.precoComDesconto)


/*


Getters e setters em JavaScript permitem criar métodos especiais para acessar e modificar as propriedades de um objeto. Eles são muito úteis para controlar como as propriedades são lidas e escritas, especialmente quando você quer validar ou processar os dados antes de atribuir ou retornar valores.

Sintaxe de Getter e Setter
Getter: É uma função que é chamada quando você tenta acessar o valor de uma propriedade.
Setter: É uma função que é chamada quando você tenta modificar o valor de uma propriedade.
Um getter não pode receber parâmetros, ele apenas retorna um valor.
Um setter pode ter um parâmetro, que é o valor que você está tentando definir na propriedade.
*/ 