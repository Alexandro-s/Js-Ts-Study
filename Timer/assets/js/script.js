// const contagem = document.querySelector('.contagem');
// const iniciar = document.querySelector('.iniciar');
// const pause = document.querySelector('.pause');
// const zerar = document.querySelector('.zerar');

// let timer;
// let estaRodando = false;
// let decorrerTempo = 0;

// const mostrarHora = () => {
//     let data = new Date(decorrerTempo * 1000); 
//     return data.toISOString().substr(11, 8); 
// }

// const startTimer = () => {

//     if(!estaRodando) {
//         timer = setInterval(() => {
//             decorrerTempo += 1;
//             contagem.innerHTML = mostrarHora();
//         }, 1000);

//         estaRodando = true;
//     }
// };

// const pauseTimer = () => {

//     if(estaRodando) {
//         clearInterval(timer);
//         estaRodando = false;
//     }
// };

// const zerarTimer = () => {
//     clearInterval(timer);
//     estaRodando = false;
//     decorrerTempo = 0;
//     contagem.innerHTML = '00:00:00'
// }


// iniciar.addEventListener('click', (event) => {
//     startTimer();
// });

// pause.addEventListener('click', (event) => {
//     pauseTimer()
// });

// zerar.addEventListener('click', (event) => {
//    zerarTimer()
// });


const criaHoraSegundos = (segundos) => {
    // Cria um objeto Date e transforma milissegundos em segundos
    const data = new Date(segundos * 1000);
    // Acessa a data pelo método toLocaleTimeString, que recebe como primeiro parâmetro a localizacao
    // e depois um objeto para formatar o horário.
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

// Função para iniciar o timer. Ela define a variável timer com um setInterval,
// que vai se repetir a cada 1 segundo. Também atualiza o HTML do timer 
// de segundos com a função que formata os segundos.
const iniciaRelogio = () => {
    timer = setInterval(() => {
        segundos++;
        contagem.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}

// Selecionando as classes do HTML
const contagem = document.querySelector('.contagem');
const iniciar = document.querySelector('.iniciar');
const pause = document.querySelector('.pause');
const zerar = document.querySelector('.zerar');

// Inicializa os segundos em 0
let segundos = 0;

// Variável de apoio para o timer
let timer;

// Cria um evento de click para cada elemento dentro dele.
document.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.classList.contains('iniciar')) {
        contagem.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (elem.classList.contains('zerar')) {
        clearInterval(timer);
        contagem.innerHTML = '00:00:00';
        segundos = 0;
    }

    if (elem.classList.contains('pause')) {
        clearInterval(timer);
        contagem.classList.add('pausado');
    }
});




