// Insert and Remove Element

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// TODO Insert 9 to index 3
// ? Insert data in array
// arr[3] = 9; // It's not a solution cause 9 replace index 3 value
// arr.push(9); // It's not a solution case 9 insert last index 
// arr.unshift(9); // It's not a solution case 9 insert fast index

// arr.splice(3, 0, 9); //* It's a solution

// TODO Remove data in array index[3]

// arr[3] = undefined; // It's not a solution for remove array element
// arr.pop(); // pop() method remove array last element
// arr.shift(); // shift() method remove array fast element

// arr.splice(3, 1); // It's remove index[3] element

// TODO Replace index[3] element

// arr[3] = 44; // fast way
arr.splice(3, 1, 44); // second way

console.log(arr);