function calendario() {


}

document.addEventListener('DOMContentLoaded', (event) => {

    function addZero(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function formataMes(data) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[data.getMonth()];
    }

    function formataDiaSemana(data) {
        const semana = ['Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
        return semana[data.getDay()]
    }
    function formataData(data, mes, diaSemana) {
        const dia = addZero(data.getDate());
        const ano = data.getFullYear();
        const hora = addZero(data.getHours());
        const min = addZero(data.getMinutes());

        return `${diaSemana}, ${dia} de ${mes} de ${ano} - ${hora}:${min}`;
    }

    const titulo = document.querySelector('.titulo');
    const data = new Date();

    const mes = formataMes(data);
    const diaSemana = formataDiaSemana(data);
    const dataFormatada = formataData(data, mes, diaSemana)

    titulo.innerHTML = dataFormatada;

});
calendario();
