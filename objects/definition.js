//list of key: value pairs

//basic example:
const cat = {
    name: 'Pogue',
    color: 'grey',
    age: 2,
    meow() { console.log('meow'); }
}

//object constructor:
function Cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.meow = function () { console.log('meow'); } //default method (independent of parameters)
}

const myKitten = new Cat('Pogue', 'grey', 2);
console.log(myKitten.name);

//object methods:
// copies properties from a source object to a target object
Object.assign(target, source)

// creates an object from an existing object
Object.create(object)

// returns an array of the key/value pairs of an object
Object.entries(object)

// creates an object from a list of keys/values
Object.fromEntries()

// returns an array of the keys of an object
Object.keys(object)

// returns an array of the property values of an object
Object.values(object)

// groups object elements according to a function
Object.groupBy(object, callback)

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)