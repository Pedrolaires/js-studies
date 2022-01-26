const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')


const pessoas = [
    {nome: 'Pedro'},
    {nome: 'Maria'},
    {nome: 'João'},
    {nome: 'Gabriela'},
]

const json = JSON.stringify(pessoas,'',2);

async function leArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element);
    });
}
function app(){
    escreve(caminhoArquivo,json)
    leArquivo(caminhoArquivo)
}
app();