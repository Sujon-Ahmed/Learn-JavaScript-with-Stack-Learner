// JS typeConversion

var str = '1000';
var n = 10;

console.log(str * n);

// convert string to number
console.log(Number(parseInt(str)));

// convert number to string
console.log(n.toString());

// Boolean value check
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));

// convert to string boolean value
console.log(Infinity.toString());

// Falsy value
// ''
// 0
// null
// undefined
// NaN

console.log(Boolean(''));
console.log(Boolean('Something'));

console.log(Boolean(0));
console.log(Boolean(50));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(true);

var x = true;
console.log(x.toString());

