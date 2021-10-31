// nested loop example
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var n = 5;
// for (var i = 1; i <= n; i++) {
//     // console.log(i);
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         // console.log(j);
//         result +=j + ' ';
//     }
//     console.log(result);
// }

// nested loop example-2
// *****
// *****
// *****
// *****
// *****

// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= n; j++) {
//         // console.log(j);
//         result += '* ';
//     }
//     console.log(result);
// }

// loop example-3
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);



