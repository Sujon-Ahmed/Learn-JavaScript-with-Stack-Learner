var obj = {
    x: 38,
    y: 46,
    z: 39
}
// console.log(obj);
// console.log('x' in obj); // return true
// console.log('a' in obj); // return false cause a isn't present in obj

for (var i in obj) {
    // console.log(i);
    console.log(i + ' : ' + obj[i]);
}

