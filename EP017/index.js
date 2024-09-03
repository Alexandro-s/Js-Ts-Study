// Funções fábrica (Factory Functions)
function criaItem(nome, sobrenome, efeitos,lore) {
    return{
        nome, 
        sobrenome, 
        efeitos,
        lore,
       


        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        }, 
        set nomeCompleto(valor) {
            const partes = valor.split(' ');
            this.nome = partes.shift(); 
            this.sobrenome = partes.join(' ');
        },

        get descricao() {
            return `${nome} ${sobrenome} 

                 DESCRICAO 
    :-------------------------------------: 
   Efeitos: ${this.efeitos}
            
   Historia: ${this.lore}`;
        },

        set descricao(novaDescricao) {
            this.lore = novaDescricao;
        }
    };
}

const sword = criaItem('Moonlight', 'Grand Sword',  'Libera ondas de corte com a forca do luar', 'Dizem ser um pedaco da lua forjada em lamina....');

console.log(sword.descricao);