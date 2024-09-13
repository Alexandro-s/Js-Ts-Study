function ValidarCpf () {
    this.limpaCpf = (cpfBruto) => {
        const cpfLimpo = cpfBruto.replace(/\D+/g, '');
        const cpfArray = Array.from(cpfLimpo).map(Number);
        return cpfArray;
    };

    this.cpfValida = (cpfArray) => {
        let digito1 = [10,9,8,7,6,5,4,3,2];
        let cpf9 = cpfArray.slice(0,9);

        let primeiroDigito = cpf9.reduce((acc, current, i) => {
            return acc + (current * digito1[i]);
        }, 0);

        primeiroDigito = 11 - (primeiroDigito % 11);
        return primeiroDigito > 9 ? 0 : primeiroDigito;
    };
    

    this.adicionaDigito = (cpfArray, digito1) => {
        let cpfArrayCopia = [...cpfArray];
        cpfArrayCopia.push(digito1);
        return cpfArrayCopia;
    };

    this.cpfValida2 = (cpfArray) => {
        let digito2 = [11,10,9,8,7,6,5,4,3,2];
        let cpf10 = cpfArray.slice(0,10);

        let segundoDigito = cpf10.reduce((acc, current, i) => {
            return acc + (current * digito2[i]);  
        }, 0);

        segundoDigito = 11 - (segundoDigito % 11);
        return segundoDigito > 9 ? 0 : segundoDigito;
    };

    this.confirmaDigitos = (digito1, digito2, cpfArray) => {
        const ultimosDigitos = [digito1, digito2];
        const ultimos2Digitos = cpfArray.slice(-2);

        console.log('Ultimos Digitos Calculados:', ultimosDigitos);  // Verificar valor aqui
        console.log('Ultimos 2 Digitos do CPF:', ultimos2Digitos);  // Verificar valor aqui

        const comparaDigitos = ultimosDigitos[0] === ultimos2Digitos[0] && ultimosDigitos[1] === ultimos2Digitos[1];

        if (comparaDigitos) {
            return `Cpf validado`;
        } else {
            return `Esse Cpf nao existe`;
        }
    };
}

const validaCpf = new ValidarCpf();
const cpfArray = validaCpf.limpaCpf('123.456.789-33');
console.log('CPF Original:', cpfArray);

const digito1 = validaCpf.cpfValida(cpfArray);
const cpfDigito1 = validaCpf.adicionaDigito(cpfArray, digito1);
const digito2 = validaCpf.cpfValida2(cpfDigito1);

const resultado = validaCpf.confirmaDigitos(digito1, digito2, cpfArray);

console.log('Resultado da Validação:', resultado);



///705.484.450-52 123.456.789-09 123.456.789-33