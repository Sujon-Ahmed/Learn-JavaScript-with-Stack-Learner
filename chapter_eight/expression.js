var addition = function(a, b) {
    return a + b;
}

// console.log(addition(10, 20));
addition(20, 30);

setTimeout(function() {
    console.log('I will call after 5 second');
}, 5000);

var another = addition;
console.log(another(50, 70));