const request = obj =>{
    return new Promise((resolve,reject) => {
        
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // GET
            //  método, url,  sync?
        xhr.send() // POST
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        });
    })
};

document.addEventListener('click', (e)=>{
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(element)
    }
});

async function carregaPagina(element){
    const href = element.getAttribute('href');

    try{
        const response = await request({
            method: 'GET',
            url: href,
        });
        carregaResultado(response);
    }catch(e){
        console.log(e)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}