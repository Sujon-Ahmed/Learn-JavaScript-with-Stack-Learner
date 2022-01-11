// Traverse an Array 

var arr = [4, 1, 6, 8, 3, 9, 5, 2, 7];
// console.log(arr.length);

// *** update array element value
/*
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    arr[i] += 2;
}
console.log(arr);
*/

// ******* Total array number summation
/*
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
*/

// ******** Event number summation in array
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        // console.log(arr[i]);
        sum += arr[i];
    }
}
console.log(sum);