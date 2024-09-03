// Função para obter a data e hora atuais em formato local (pt-BR) sem notação de 12 horas
const mostrarHora = () => {
    let data = new Date();
    return data.toLocaleString('pt-BR', { hour12: false });
}

// Define um intervalo que executa a função mostrarHora a cada 1 segundo e exibe a hora no console
const timer = setInterval(() => {
    console.log(mostrarHora());
}, 1000);

// Define um temporizador que limpa (interrompe) o intervalo após 3 segundos
setTimeout(() => {
    clearInterval(timer);
}, 3000);

// Define um temporizador que exibe a mensagem 'Final código' no console após 5 segundos
setTimeout(() => {
    console.log('Final código');
}, 5000);
