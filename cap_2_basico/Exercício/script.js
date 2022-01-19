function escopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function recebeEventoForm(e){
        e.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${altura.value} ${peso.value} `

    }



    form.addEventListener('submit', recebeEventoForm);
}

escopo();