var n = 10;
var str = '';

if (n % 2 == 0) {
    str = 'EVEN';
} else {
    str = 'ODD';
}
console.log(str);

// ternary method

// condition ? true side : false side
var result = n % 2 == 0 ? 'EVEN' : 'ODD';
console.log(result);