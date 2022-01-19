function relogio(){
    const relogio = document.querySelector('.relogio');

    let timer;
    let segundos = 0;

    function iniciaRelogio(){
        timer = setInterval(()=>{
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        },1000);
    }

    const getTimeFromSeconds = () =>{
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    };

    document.addEventListener('click',(e) =>{
        const elemento = e.target;
        if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }
        if(elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciaRelogio();
        }
        if(elemento.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
    });
}
relogio();