//   FUncoes  geradoras funcoes 

function* contagem () {
    yield 1;
    yield 2;
    yield 3;

 
} 
  

const cont = contagem();

 for (let valor of cont) {
        console.log(valor);
    }

// console.log(cont.next().value);
// console.log(cont.next().value);