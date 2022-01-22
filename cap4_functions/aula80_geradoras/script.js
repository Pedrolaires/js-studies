function* geradora(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora1(){
    yield* geradora();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora1();

for (let valor of g4){
    console.log(valor)
}

function* geradora2(){
    yield function(){
        console.log('Vim do y1');
    };

/*     return function(){
        console.log('Vim do return');
    } */

    yield function(){
        console.log('Vim do y2');
    }
}

const g5 = geradora2();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();