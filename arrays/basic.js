const array1 = []; //empty array

const array2 = [1,2,3]; //array with 3 defined values

const array3 = new Array(3); //empty array with 3 spaces

//basic array methods:

const len = array1.length;

array1.toString(); //converts array to string

const val = array2.at(1); //returns value at index
const sameVal = array2[1];

array3.join('-'); //converts array to string with separator

array1.push(1); //adds value to end of array

array1.pop(); //removes last value

array2.shift(); //removes first value and shifts array values down an index

array3.unshift(1); //adds value to beginning of array

delete array2[0]; //deletes value at index without shifting

const array12 = array1.concat(array2); //combines two arrays

const array123 = array1.concat(array2, array3); //combines three arrays

//there are alot more