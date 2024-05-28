//every object has a prototype
//prototypes are objects that an object inherits properties from
//allow functionality to be shared between objects

//constructor function: 
function Cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.meow = function () { console.log('meow'); }
}

//adding eyeColor to Cats prototype object 
Cat.prototype.eyeColor = 'yellow';

const myKitten = new Cat('Pogue', 'grey', 2);

console.log(myKitten.eyeColor); //yellow. looks for yellow, doesnt find it, looks in proto, finds it

console.log(myKitten); // doesn't have eyeColor, its inside its prototype