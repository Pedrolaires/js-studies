const form = document.querySelector('#form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const inputPeso = e.target.querySelector('#input-teste-1');
    const inputAltura = e.target.querySelector('#input-teste-2');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('Peso Inválido',false);
        return;
    }else if(!altura){
        setResultado('Altura inválida',false)
        return;
    }
    const imc = peso/((altura/100) * (altura/100));
    const msg = `Seu IMC é: ${imc.toFixed(2)} ${calculaImc(peso,altura)};`
    setResultado(msg,true)
});

const calculaImc = (imc) =>{
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade'];
    if(imc > 29.9) return nivel[3]
    if(imc > 24.9) return nivel[2]
    if(imc > 18.5) return nivel[1]
    return nivel[0]
};


function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';
    const p = criaParagrafo();
    if(!isValid){
        p.classList.add('resultado-nao-aceito');
    }else{
        p.classList.add('resultado-aceito');
    }
    p.innerHTML =`${msg}`;
    resultado.appendChild(p);
}
