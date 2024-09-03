// Modo Paisagem (Landscape): A largura da imagem é maior do que a altura. Esse modo é frequentemente usado para fotos de paisagens, panoramas e cenários amplos.

//Exemplo: 1920x1080 (largura x altura).
// Modo Retrato (Portrait): A altura da imagem é maior do que a largura. Esse modo é comum para retratos de pessoas, fotos verticais e imagens que focam em um objeto específico.

// Exemplo: 1080x1920 (largura x altura).
// Se você tiver as dimensões da imagem, basta comparar a largura e a altura para determinar a orientação.


// Escreva uma function chamada ePaisagem que receba dois argumentos, largura e altura de uma img (Number). E retorne true or False se a img estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura ? 'Imagem em Modo Paisagem' : 'Imagem em Modo Janela';

 console.log(ePaisagem(1080, 1920))
