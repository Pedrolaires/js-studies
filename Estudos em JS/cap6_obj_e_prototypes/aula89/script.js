// Factory
/*
function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
};
const p1 = criaPessoa('Pedro', 'Lucas');
console.log(p1.nomeCompleto)
*/

//Constructor

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);
}

const p1 = new Pessoa('Pedro', 'Lucas');
p1.fala = function(){console.log('oi');};
p1.fala();
console.log(p1);