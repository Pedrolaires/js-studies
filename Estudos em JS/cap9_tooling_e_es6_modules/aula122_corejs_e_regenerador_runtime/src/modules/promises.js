function promessa(){
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            console.log('hey, sou a promessa!');
            resolve();
        },2000);
    })
}

export default async function executa(){
    await promessa();
    console.log('terminou');
};