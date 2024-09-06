function fatorial (n) {
    if (n === 0 || n === 1) {
        return 1;

    }
    return n * fatorial(n-1);
    
}

console.log(fatorial(5));


function contagem(max) {

    console.log(max)
    if (max >= 10) return;
        max ++
        contagem(max)
    
}
contagem(0)