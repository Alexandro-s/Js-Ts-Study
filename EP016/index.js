// Call back functions - Sao fucntions que se executam imediatamente apos certa condicao sendo essa geralmente a execucao da function externa na qual essa foi passada com argumento.


// Funcao de numeros aleatorios pra criar um diferanca na execuacao.
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('Justice');
        if(callback) callback();

    }, rand());
}

function f2 (callback) {
    setTimeout(function() {
        console.log('Crime');
        if(callback) callback();
    }, rand());
}

function f3 (callback) {
    setTimeout(function () {
        console.log('Fear');
        if(callback) callback();
    }, rand());
}

// function linha (callback) {
//     setTimeout(function () {
//         console.log('--------------------------------------------------------------------------------------------------------------------------------------------------');
//         if(callback) callback();
//     }, rand());
// }

f1(function(){
    f2(function() {
        f3(function () {
            console.log('Final -1 ');
           });
        });    
    });

  

    f1(f1Callback);

    function f1Callback() {
        f2(f2Callback);
    }

    function f2Callback() {
        f3(f3Callback);
    }

    function f3Callback() {
        console.log('Final - 2')
    }