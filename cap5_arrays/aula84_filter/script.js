

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

/* const numerosFiltrados = numeros.filter((valor,indice,array)=>{
    if(valor <= 10) return false;
    return true;
}); */


/* const numerosFiltrados = numeros.filter((valor,indice,array) =>{
    
    console.log(valor, '\n',indice, '\n', array)
    return valor > 10
}); */


const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);