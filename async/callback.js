//make async operations happen in order

//basic example:
function sayHi(name) { console.log('hi ' + name); }


function getName(callback) { 
    setTimeout(() => { //setTimeout represents some async operation to get name;
        const name = 'norman';
        callback(name);
    }, 1000);
}

getName(sayHi);

//callback hell:
getData(function(a){
    getMoreData(a, function(b){
        getEvenMoreData(b, function(c){ 
            console.log('Do something with', c);
        });
    });
});
//lots of nested callbacks to make sure async operations happen in order and with the data they need from other async operations
//solution is promises or async / await