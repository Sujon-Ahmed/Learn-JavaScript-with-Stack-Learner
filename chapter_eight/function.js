// Chapter Eight : Functions in JavaScript

// What is JavaScript

// Function Declare Structure
/*
function functionName() {

}
*/

function functionName() {
    console.log('I am a Function');
}

function add() {
    var a = 10;
    var b = 20;
    console.log(a + b);
}


function sub() {
    var a = 50;
    var b = 20;
    console.log(a - b);
}

// functionName();
// add();
// sub();

// for (var i = 0; i < 10; i++) {
//     functionName();
// }

// min max age calculate with function array
function getArrayMax(array) {
    return Math.min.apply(null, array);
}
var ages = [11, 54, 32, 92];
var maxAge = getArrayMax(ages);
console.log(maxAge);