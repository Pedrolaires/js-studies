const numero = parseFloat(prompt('Digite um número: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
texto.innerHTML = `
<p>Raiz quadrada: ${Math.sqrt(numero)} </p>
<p> ${(numero)} é inteiro? ${Number.isInteger(numero) ? "Verdadeiro" : "Falso"} </p>
<p> É NaN ? ${Number.isNaN(numero) ? "Verdadeiro" : "Falso"} </p>
<p> Arredondado para cima: ${Math.ceil(numero)} </p>
<p> Arredondado para baixo: ${Math.floor(numero)} </p>
<p> Com duas casas decimais: ${parseFloat(numero).toFixed(2)} </p>`;
