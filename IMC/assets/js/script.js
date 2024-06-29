const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado ('Peso Invalido', false);
        return;
    }

    if (!altura)  {
        setResultado ('Altura  invalida',false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc e ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', ' Obseidade grau 1', 'Obseidade grau 2', 'Obseidade grau 3'];
    
    if (imc >= 39.9) return nivel [5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0];
    
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;

}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}



// function meuEscopo() {


//     // Select class in html
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');

//     // Array of object
//     const pessoas = [];

    
//     function eventoSubmit(evento) {
//         // Prevent submit event on form 
//         evento.preventDefault();

//         // Select class in html 
//         const nome = form.querySelector('.nome');
//         const sobrenome = form.querySelector('.sobrenome');
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         // Push object on array 
//         pessoas.push({
//             nome: nome.value,
//             sobrenome: sobrenome.value,
//             peso: parseFloat(peso.value),
//             altura: parseFloat(altura.value)
//         });

//         console.log(pessoas);  

//         // Show values of object  
//         resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
//     }
//     // Add events on form 
//     form.addEventListener('submit', eventoSubmit);
// }

// // Call function 
// meuEscopo();
