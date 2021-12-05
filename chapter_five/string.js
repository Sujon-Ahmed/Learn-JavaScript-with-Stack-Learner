// Chapter Five
// String in JavaScript
// What is String?
// Type of String

var str = 'Something'; // String Literal
var str2 = String('Something'); // String Construct

var n = 10;
var result = String(n);
// console.log(result);

// ******** Escape Notation ***********************
var text = 'This is a \nString'; // \' \" \\ \b \n \t \v \r \f
// console.log(text);

// ********** String Comparison **************
// ! JavaScript Uses Lexicographic System to Compare to String
// ! Lexicographic order -> z,y,x...a,Z,Y,X...,B,A 

// var a = 'abc';
// var b = 'bcd';
//console.log(a > b); // false
//console.log(a < b); // true

// console.log('a' > 'Z');
// console.log('001' == 1);

// ********** String with build in method ***********

var a = 'I am';
var b = 'Sujon Ahmed';
var c = 'Riman';
var d = a.concat(' ',b,' ',c);
// console.log(d);
var e = d.substr(5,5);
// console.log(e);

// console.log(d.charAt(0));

// console.log(d.startsWith('I am')); // true
// console.log(d.startsWith('Sujon')); // false


// console.log(d.endsWith('Riman')); // true
// console.log(d.endsWith('Riman10')); // false

// console.log(b.toLowerCase());
// console.log(b.toUpperCase());

// console.log('         Hello           '.trim());
// console.log(d.split(' '));

// ********** String Length *************
// logical way
var str = 'Sujon Ahmed';
var length = 0;
while (true) {
    if (str.charAt(length) == '') {
        break;
    } else {
        length++;
    }
}
// console.log(length);

// build in function way
// console.log(str.length);
console.log('Something'.length);











