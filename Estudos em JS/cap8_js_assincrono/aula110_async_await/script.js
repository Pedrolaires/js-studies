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

/* wait('Fase 1', rand())
.then(fase =>{
    console.log(fase);
    return wait('Fase 2', rand());
})
.then(fase =>{
    console.log(fase);
    return wait('Fase 3', rand());
}).then((fase)=>{
    console.log(fase)
})
.catch(e => console.log(e)) */

(async function executa(){

    //pending -> pendente
    //fulfilled -> resolvida
    //rejected -> rejeitada

    try{
        const fase1 = await wait('Fase 1', rand(1,7));
        console.log(fase1);
        const fase2 = await wait('Fase 2', rand(1,5));
        console.log(fase2);
        const fase3 = await wait('Fase 3', rand(1,3));
        console.log(fase3); 
        console.log('Teminamos na ', fase3, ' Segue o erro:')
        const fase4 = await wait(2000, rand(1,3));

    }catch(e){
        console.log(e)
    }

})()