class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando!`);
    }

    comer(){
        console.log(`${this.nome} está comendo!`);
    }
    
    beber(){
        console.log(`${this.nome} está bebendo!`);
    }

};

// já está no prototype :o

const p1 = new Pessoa('Pedro', 'Aires');
const p2 = new Pessoa('Maria', 'Eduarda');
const p3 = new Pessoa('Gabriela', 'Macedo');
p1.falar();
p2.comer();
p3.beber();