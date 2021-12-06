// Object in JavaScript
// Student 1:
// Math: 80
// Chemistry: 75
// Physics: 86
// Higher Math: 90

// [80, 75, 86, 90]

// ?** Object Literal
// var obj = {}
// obj.x = 10
// console.log(obj);

// var point = {
//     x: 10,
//     y: 20
// }
// point.y = 30; // replace object value
// point.z = 30 // insert object value
// console.log(point);

// ** Object Constructor

// var obj = Object();
// obj.a = 10;
// console.log(obj);

// var obj2 = Object();
// obj2.b = 20;
// console.log(obj2);

// ******* Object dot(.) notation access
// var obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// console.log(obj.a);
// console.log(obj.a + obj.c);

// ****** Object array[] notation access
var obj = {
    a: 10,
    b: 20,
    c: 30
}

console.log(obj['a']);
console.log(obj['c']);

var show = 'b';
console.log(obj[show]);