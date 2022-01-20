
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

/* for (let valor of numeros){
    console.log(valor);
} */

/* numeros.forEach((valor,indice) => console.log(valor,indice)); */

let total = 0;

numeros.forEach((valor,indice) => total += valor);
console.log(total);