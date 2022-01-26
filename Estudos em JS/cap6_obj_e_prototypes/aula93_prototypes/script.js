function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    /* this.nomeCompleto = () => `${this.nome} ${this.sobrenome}` */
}

Pessoa.prototype.nomeCompleto = ()=>{
    `${this.nome} ${this.sobrenome}`
} ;

const pessoa1 = new Pessoa('Pedro', 'Aires');
const data = new Date(); 

console.dir(pessoa1);
console.log(Date.prototype);

console.log(pessoa1.estouAqui);