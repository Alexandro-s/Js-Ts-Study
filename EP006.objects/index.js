
// Generate objects dynamically
function  shaman (nome, tecnicaInata, expansaoDeDominio) {

    return {nome, tecnicaInata, expansaoDeDominio };

}

const xama = shaman('Gojo Satoro', 'Ilimitado', 'Vazio Infinito');
console.log(xama);






// Methods inside objects 
const maldicao = {
    nome: 'Sukuna',
    tecnicaInata: 'Desmantelar',
    expansaoDeDominio: 'Santuario Malevolente',


    maisUmavez() {
        console.log(`Expasão de dominio ${this.expansaoDeDominio}`);
    }

}
maldicao.maisUmavez();