/* const data = new Date();
const div = document.querySelector('#resultado')

function criaParagrafo(){
    return document.createElement('h1');
}

function formataMes(data){
    let mesString;
    switch (data.getMonth()) {
        case 0:
            mesString = 'janeiro';
            break;
        case 1:
            mesString = 'Fevereiro';
            break;
        case 2:
            mesString = 'Quinta-Feira';
            break;
        case 3:
            mesString = 'Sexta-Feira';
            break;
        case 4:
            mesString = 'Sabado';
            break;
        case 5:
            mesString = 'Domingo';
            break;
    }
    return mesString;
}

function formataDiaDaSemana(data){
    
    switch (data.getDay()) {
        case 0:
            return 'Segunda-Feira';
        case 1:
            return 'Terça-Feira';
        case 2:
            return 'Quarta-Feira';
        case 3:
            return 'Quinta-Feira';
        case 4:
            return 'Sexta-Feira';
        case 5:
            return 'Sabado';
        case 6:
            return 'Domingo';
    }
}

function formataData(data) {
    const diaSemana = formataDiaDaSemana(data)
    const nomeMes = formataMes(data)
    
    return `${diaSemana}, ${data.getDate()}, de ${nomeMes}, de ${data.getFullYear(data)} <br> ${data.getHours(data)}:${data.getMinutes(data)}`
}

const p = criaParagrafo();
p.innerHTML = formataData(data);
div.appendChild(p) */

const data = new Date();
const div = document.querySelector('#resultado')

function criaParagrafo(){
    return document.createElement('h1');
}
const p = criaParagrafo();
p.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})
div.appendChild(p)
