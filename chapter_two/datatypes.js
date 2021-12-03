// dataTypes
// -------------------
// Primitive->Primitive types are defined by JavaScript
// Object->Object types are user defined data types

/**
    Primitive           Object
    ---------           -----------
    Number              Array
    String              Object
    Boolean             Function
    undefined 
    Null

**/

// **! Note: JavaScript is case sensitive Meaning, var and VAR and Var is not Same

// ************* NUMBERS ****************
var n = 75;
var f = 3.459;

var nn = Number('45.45');
console.log(nn);

// convert integer
console.log(Number.parseInt(nn));

// Max Values
console.log(Number.MAX_VALUE);
// Min Values
console.log(Number.MIN_SAFE_INTEGER);
// Infinity
console.log(1 / 0);
// NAN
console.log('abc' * 10);


// ************** String ****************
// **! Anything wrapped between quotes is called string

// String Literal
var str = "String";
var str2 = 'String';
var str3 = `String`;

// String Constrictor
var str4 = String('Something');
// convert number to string
var str5 = String(175);
// convert float to string
var str6 = String(3.45);

console.log(str5, str6);

// ********** Booleans ******************
var b1 = true;
var b2 = false;

var b4 = Boolean(true);
var b5 = Boolean(false);

console.log(b4, b5);

// *********** Null vs Undefined **************

var abc;
var xyz = null;

console.log(abc);
console.log(xyz);