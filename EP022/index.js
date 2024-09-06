// Revisando OBjetos 

// Objetos literais 

const pessoas = {
    nome: 'Jamisn',
    idade: 21,

    falaNome: function () {

        return `${this.nome} tem ${this.idade}`;
    }


}

//console.log(pessoas.falaNome())

// Objetos com contrutores 

const pessoa = new Object(); 
pessoa.nome = 'Bela';
pessoa.idade = 20;
pessoa.fala = function () {
    return `${this.nome} tem ${this.idade}, porem se acha mais velha`
};
pessoa.getDataNascimento = function () {
    const dataAtual = new Date ();
    return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa.fala());
// console.log(pessoa.getDataNascimento());


// Podemos interar um Objetcto ultilizando um for para isso 
for(let chaves in pessoa) {
    console.log(chaves);
}
