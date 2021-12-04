// nested loop
// ! problem - 01
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
// Program code
// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         result += j + ' ';
//     }
//     console.log(result)
// }
// ! problem - 02
/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
// Program code
// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         result += i + ' ';
//     }
//     console.log(result)
// }

// ! problem - 03
/*
*****
*****
*****
*****
*****
*/
// program code

// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= n; j++) {
//         result += '*' + ' ';
//     }
//     console.log(result);
// }

// ! problem - 04
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/
// Program code
// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= n - i + 1; j++) {
//         result += j + ' ';
//     }
//     console.log(result)
// }

// ! problem - 05
/*
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
*/
// Program code
var n = 5;
for (var i = 1; i <= n; i++) {
    var result = '';
    for (var j = 1; j <= n - i + 1; j++) {
        result += n - j + 1 + ' ';
    }
    console.log(result)
}