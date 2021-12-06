function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    // console.log(sum);
    return sum;
}
var result = addAll(10, 20, 30);
console.log(result);

function person(name, email) {
    return {
        name: name,
        email: email
    }
    // unreachable code
    console.log('I will never be shown');
}
var p1 = person('Sujon Ahmed', 'sujonahmed@gmail.com');
console.log(p1);

