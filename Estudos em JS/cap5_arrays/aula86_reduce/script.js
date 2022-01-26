
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numeros.reduce((acumulador,valor)=>{

    return acumulador + valor;
},0) // valor inicial do acumulador
console.log(total)