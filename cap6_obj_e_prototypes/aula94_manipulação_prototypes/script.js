// new Object -> Object.prototype
const objA ={
    chaveA: 'A'
 //   __proto__:Object.prototype
};
const objB ={
    chaveB: 'B'

    //__proto__: objA
};
const objC ={
    chaveC: 'C'

    //__proto__: objB
};
Object.setPrototypeOf(objB,objA);
Object.setPrototypeOf(objC,objB);

console.log(objB.chaveA);