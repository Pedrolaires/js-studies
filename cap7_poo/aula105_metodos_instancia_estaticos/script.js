class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    //método de instância
    diminuirVolume(){
        this.volume -= 2;
    }

    //método estático
    static trocaPilha(){
        console.log('Trocando pilha')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)
ControleRemoto.trocaPilha();
