function criaCalculadora () {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-equal')) { 
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        limpaDisplay() {
            this.display.value = '';  
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        }, 

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta && conta !== 0) { 
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
                
            } catch (e) {
                alert('Conta inválida');
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
        }

    }
};

const calculadora = criaCalculadora();
calculadora.inicia();

