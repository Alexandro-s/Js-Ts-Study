// Trabalahando com multiplus For 

const nomes = ['adam', 'eva', 'abel', 'caim'];

// FOR classic s- Geralmente com iteraveis (array ou string)

for(let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i]);
}


console.log('#######################')

// For in - Retorna o indice ou chave (String, array ou object)

for( let key in nomes){
    console.log(nomes[key]);
}

console.log('########################')

// for Off - Retorna o valor em si (iteraveis, arrays ou strings)

for (let value of nomes){
    console.log(value);
}

console.log('########################')

// For each - Metodo de array que retorna uma function para cada elemento

nomes.forEach(function(value, indicie, array){
    console.log(value, indicie), array
})