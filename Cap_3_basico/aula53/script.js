const container = document.querySelector('.container')
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

/* const criaElemento = (elemento) => document.createElement(elemento);

const div = criaElemento('div');
container.appendChild(div);
for(i = 0; i < elementos.length; i++){
    const elemento = div.appendChild(criaElemento(`${elementos[i].tag}`))
    elemento.innerText = elementos[i].texto;
}
 */

const div = document.createElement('div');

for(let i = 0; i< elementos.length; i++){
    let{tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);

