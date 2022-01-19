
//habilidade de acessar o escopo léxico
function retornaFuncao(){
    const nome = 'Pedro';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);