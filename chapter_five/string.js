// Chapter Five
// String in JavaScript

var n = 10;  // String Literal
var str = String(n); // String Constructor
var str1 = new String(n); // String Object
// console.log(str);

// **** Escape Notation ****//
var str = 'This is a \'String\'';   //? use single quote
var str1 = 'This is a \"String\"';   //? use double quote
var str2 = 'This is a \\ String';   //? use Backslash
var str3 = 'This is a \tString';   //? use Tab
var str4 = 'This is a \nString';   //? use new line
// console.log(str4);

// **** String Comparison ****//
// TODO -> JavaScript Uses Lexicographic System to Compare to String
// ? Always Remember that lowercase z-a is gether than Z-A
var a = 'a'; 
var b = 'Z';
//console.log(a > b); // return true
console.log('001' == 1); // return true 
// ? JavaScript Compiler always convert compare number and string both are number