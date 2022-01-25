import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
    const geraCpf = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = geraCpf.geraNovoCpf();
})();