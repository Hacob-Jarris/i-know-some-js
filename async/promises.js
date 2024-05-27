//same functionality as callbacks, but more readable and error handleable

//basic example:
getData() //.then() are chained together, waiting for previous promise to be fulfilled
    .then(a => getMoreData(a)) //resolve value a from getData() is used to getMoreData with a 
    .then(b => getEvenMoreData(b))//...
    .then(c => console.log('Do something with', c))//...
    .catch(error => console.log(error)); //if promise rejected, .catch() handles it

//using Promise object:
const promise = new Promise((res, rej) => {
    //async code to be resolved or rejected
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
    (data.ok) ? res(data.json()) : rej(data);
});