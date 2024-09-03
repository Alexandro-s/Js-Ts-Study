function Calculadora () {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-equol')) this.realizaConta();
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    };

    this.limpaDisplay = () => {
        this.display.value = '';  

    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            if (!/^[\d+\-*/(). ]+$/.test(conta)) throw new Error('Expressão inválida');
            conta = new Function(`return ${conta}`)();

            if (isNaN(conta)) throw new Error('Conta inválida');
            this.display.value = String(conta);

        } catch (e) {
            alert('Conta inválida');
        }
    };

    this.pressionaEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 32) this.realizaConta();
        });
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
