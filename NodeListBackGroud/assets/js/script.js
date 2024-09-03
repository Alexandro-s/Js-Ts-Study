// const paragrafos = document.querySelector('.paragrafos');
// const ps = paragrafos.querySelectorAll('p');


// const styleBody = getComputedStyle(document.body);
// const backgroudColorBody = styleBody.background;

// for( p of ps) {
//     p.style.backgroudColor = backgroudColorBody;
//     console.log('tudo ok ?')
// }

    const paragrafos = document.querySelector('.paragrafos');
    const ps = paragrafos.querySelectorAll('p');

    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundColor;
    const styleColorText = paragrafos.style.color = 'white'

    for (const p of ps) {
        p.style.backgroundColor = backgroundColorBody; // Aplica a cor de fundo a cada <p>
        console.log('Cor de fundo alterada para:', backgroundColorBody);
    }

 for( const p of ps ) { 
    p.style.color = styleColorText;

    console.log('Cor do texto para -> ' ,styleColorText);
 }