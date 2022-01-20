

const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = a1.concat(a2, [7,8,9],'Pedro');

console.log(a3);



const a4 = [10,20,30];
const a5 = [40,50,60];

const a6 = [...a4,...a5, 70, 80, 90, 'Pedro', ...[100,110,120]];

console.log(a6)