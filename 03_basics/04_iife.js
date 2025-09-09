// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// this semicolon is neccessary here to stop the context of the above iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');//passed hitesh as an argument to the IIFE

(function tiku(){
    console.log(`tiku function`);
})();

(() => {
    console.log(`tiku function two`);
})()