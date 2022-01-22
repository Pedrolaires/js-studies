// Immediately invoked function expression

(function(){
    
    const sobrenome = 'Aires'

    function criaNome(nome){
        return `olá ${nome} ${sobrenome}`
    }
    function falaNome(){
        console.log(criaNome('Pedro'))
    }

    falaNome();

})();