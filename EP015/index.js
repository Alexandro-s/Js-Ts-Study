// Escopo lexico 
const nome1 = 'jasmin';
const nome = 'Emily';

function getNome() {
    const nome= 'Violet'
    console.log(nome);
}

function useFalaNome() {
  
    getNome();
}
useFalaNome();


// Basicamente ele vai atras do primeiro retorno, assim que ele achar a variavel ele vai parar a procura e retorna ela. E ele sempre vai da prioridade para o proprio escopo e os proximos quebrado bolha por bolha ate chagar na ultima ou seja o escopo lexico global.


function getNome1() {
     const nome1= 'Bela'
    console.log(nome1);
}

function useFalaNome1() {
 
    getNome1();
}
useFalaNome1();