//exec code repeatedly after delay

//basic syntax:
const helloInterval = setInterval(() => {
    console.log('hello');
}, 500);

//stop interval at 5 seconds
setTimeout(() => {
    clearInterval(helloInterval);
}, 5000);