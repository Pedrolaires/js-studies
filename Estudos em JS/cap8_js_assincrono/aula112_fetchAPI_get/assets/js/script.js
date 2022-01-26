document.addEventListener('click', (e)=>{
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(element)
    }
});

async function carregaPagina(element){
    try{
        const href = element.getAttribute('href');
        const response = await fetch(href);
        
        if(Number(response.status) !== 200) throw new Error('Varios erros ai') 
        
        const html = await response.text();
        carregaResultado(html)
    }catch(e){
        console.error(e)
    }

        /* fetch(href) //sem async/await
        .then(response  =>{
            if(Number(response.status) !== 200) throw new Error('Varios erros ai') 
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.error(e)) */

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
