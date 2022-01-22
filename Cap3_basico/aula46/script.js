
const data = new Date();
/* const umDia = 60*60*24*1000
const dataQualquer = new Date(2019,3,20,15,14,27)
const dataTimeStamp = new Date(0) 
 console.log('Dia', dataQualquer.getDate());
console.log('Mês', dataQualquer.getMonth());
console.log('Ano', dataQualquer.getFullYear());
console.log('Hora', dataQualquer.getHours());
console.log('Min', dataQualquer.getMinutes());
console.log('Seg', dataQualquer.getSeconds());
console.log('ms', dataQualquer.getMilliseconds());
console.log('Dia semana', dataQualquer.getDay());
console.log(dataQualquer.toString()); */


function formaData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getMonth()++);
    const hora = zeroAEsquerda(data.getFullYear());
    const min = zeroAEsquerda(data.getHours());
    const seg = zeroAEsquerda(data.getSeconds()); 
}

function zeroAEsquerda(num){
    return (num >= 10 ? num : `0${num}`);
}

const dataBrasil = formaData(data);