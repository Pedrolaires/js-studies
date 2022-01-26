function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg,tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){
            reject(new Error('BAD VALUE'));
        }
        setTimeout(() =>{
            resolve(msg);
        },tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    //'Primeiro valor',
    wait('Promise 1', rand(1,5)),
    wait('Promise 2', rand(1,5)),
    wait('Promise 3', rand(1,5)),
    //1000,
    //'Outro valor'
]

/* Promise.all(promises)
.then(resposta =>{
    console.log(resposta);
})
.catch(resposta =>{
    console.log(resposta);
});


Promise.race(promises) // entrega a primeira que foi resolvida!
.then(resposta =>{
    console.log(resposta);
})
.catch(resposta =>{
    console.log(resposta);
}); */


function baixaPagina(){
    const emCache = (rand(1,5) > 2500);
    if(emCache){
        return Promise.resolve('Pagina em Cache');
    }else{
        return wait('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e=> console.log(e))