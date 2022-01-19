/* const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (p of ps){
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFF'
} */

const seiLa = num =>{
    if (!Number(num)) return num;
    if (num % 5 === 0){
        if (num % 3 === 0){
            return 'FizzBuzz'
        }
        return 'Buzz'
    }else if( num % 3 === 0) return 'Fizz'

    return num;
};
for (i = 0; i <= 100; i++){
    console.log(seiLa(i))
}
