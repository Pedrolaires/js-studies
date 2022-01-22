
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já está ligado!')
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já está desligado!')
            return;
        }
        this.ligado = false;
    }    
};

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone','Preto' ,'XS');
console.log(s1)

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Ligando')
        return;
    }
}

const t1 = new Tablet('Ipad', true);
console.log(t1.ligado);
t1.ligar();