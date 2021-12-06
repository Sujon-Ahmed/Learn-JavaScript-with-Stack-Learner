// TODO Reverse array element

/*
    [1, 2, 3, 4, 5]
    [5, 4, 3, 2, 1]

*/
var arr = [1, 2, 3, 4, 5];
// ?* Logical way
// for (var i = 0; i < (arr.length / 2); i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 -i] = temp;
// }

// ?* build in way
console.log(arr.reverse());