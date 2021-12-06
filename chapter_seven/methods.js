var obj = {
    x: 40,
    y: 50,
    z: 60
}

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// TODO Create a new object to obj

// var obj2 = obj
// obj2.x = 70
// obj2.y = 80

// console.log(obj);
// console.log(obj2);

// ? solution
var obj2 = Object.assign({}, obj);
obj2.x = 100;

console.log(obj);
console.log(obj2);