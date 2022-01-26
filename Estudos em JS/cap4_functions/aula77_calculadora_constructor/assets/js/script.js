// função construtora

function Calculadora (){
        const display = document.querySelector('.display');

        this.inicia = () => {
            clickBotoes();
            pressionaEnter();
        };

        const pressionaEnter = () => {
            display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    realizaConta();
                }
            });
        };

        const limparDisplay = () => {
            display.value = '';
        };

        const apagaUm = () => {
            display.value = display.value.slice(0, -1);
        };

        const realizaConta = () => {
            let conta = display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta inválida!');
                    return;
                }
                display.value = String(conta);
            } catch (e) {
                alert('conta inválida!');
                return;
            }
        };

        const clickBotoes = () => {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    limparDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    realizaConta();
                }
            });
        };

        const btnParaDisplay = (valor) => {
            display.value += valor;
        };
}

const calculadora =  new Calculadora();
calculadora.inicia();