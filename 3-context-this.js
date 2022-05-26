// this global - window (navigator, document)
console.log(`this: ${this}`);

function whoIsThis() {
    return this;
}
console.log(`this: ${whoIsThis()}`);

function whoIsThisWithStrict() {
    'use strict'
    return this;
}
console.log(`this: ${whoIsThisWithStrict()}`);

// this en el scope de un objeto
const person = {
    name: 'José',
    sayHello: function() {
        console.log(`Hola soy ${this.name}`)
        console.log('this:', this)
    }
}
person.sayHello();


// this cuando sacamos una funcion de un objeto
const accion = person.sayHello
accion();