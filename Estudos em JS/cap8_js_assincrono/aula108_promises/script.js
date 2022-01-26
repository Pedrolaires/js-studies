function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg,tempo){
    return new Promise((resolve, reject) =>{
        if(msg === 'Tratando dados') reject(new Error('BAD VALUE'))
        setTimeout(() =>{
            resolve(msg);
        },tempo);
    });
}

wait('Estabelecendo Conexão', rand(1,5)).then(resposta =>{
    console.log(resposta);
    return wait('Buscando dados no BD', rand(1,3));
}).then(resposta =>{
    console.log(resposta)
    return wait('Tratando dados');
}).then(()=>{
    console.log('Exibindo dados')
})
.catch(e =>{
    console.log(e)
});


console.log('Frase exibida antes de qualquer Promise!')