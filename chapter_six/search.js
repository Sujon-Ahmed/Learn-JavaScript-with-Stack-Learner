// TODO search data in array element
var arr = [2, 4, 5, 6, 1, 7, 9];

var find = 7;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('Data Found at Index ' + i);
        isFound = true;
        break;
    } 
}

if (!isFound) {
    console.log('Data not Found!');
}