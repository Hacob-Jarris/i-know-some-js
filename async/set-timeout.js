//exec code after delay

//basic syntax:
setTimeout(() => {
    console.log('half a second later');
}, 500);

//another example:
setTimeout(oink, 1000, 'piggy says: ');//parameters after function, delay will be passed to  function
function oink(msg) { 
    console.log(msg);
    console.log('oink'); 
}

//if I wanted both functions to not run at the same time:
const doubleTimeouts = setTimeout(() => {
    console.log('one second later');
    setTimeout(() => {
        console.log('another second later');
    }, 1000);
}, 1000);

//if I wanted to stop the functions from running:

// clearTimeout(doubleTimeouts);