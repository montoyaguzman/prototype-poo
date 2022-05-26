function Person(hair, legs, hands, career) {
    this.hair = hair;
    this.legs = legs;
    this.hands = hands;
    this.career = career;
}

Person.prototype.respirar = function() {
  console.log('estoy respirando...');
};

Person.prototype.caminar = function() {
  console.log('estoy caminando...');
};

function Superhero(superpoder, traje, nombreClave) {
    this.superpoder = superpoder;
    this.traje = traje;
    this.nombreClave = nombreClave;
}

Superhero.prototype.ataqueCargado = function() {
    console.log('esto es un ataque cargado...');
};

function Programmer(orejas) {
    this.orejas = orejas;
}

Programmer.prototype.ataqueCargado = function() {
    console.log('codeo limpio y perreo sucio xD');
};

const genericPerson = new Person('negro', true, true, 'medico');
// const superheroe = new Superhero('fuerza', false, 'hulk');
// const manuel = new Programmer('fuerza', true, 'hulk');
console.log(genericPerson);

// obtener el protoypo de un objeto
Object.getPrototypeOf(genericPerson);
genericPerson.__proto__;
// Obtener al objeto como tal
genericPerson.valueOf();
// crear un nuevo objeto
const person2 = Object.create(genericPerson);
// Modificar/Agregar un propiedas en una instancia
Object.defineProperty(genericPerson, 'age', {value : 228 } );
// Sabes si un objeto le pertence a una clase
console.log(genericPerson instanceof Person);