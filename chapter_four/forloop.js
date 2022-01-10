// for loop structure
/*
for (Initializer; Condition; Increment) {
    / Statement...
}

*/
// ?* Print 1 - 10 number
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// *? Print 1 - 100 ODD Number

/* for (var i = 0; i <= 100; i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
} */


// *? Print 1 - 100 EVEN Number

/* for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
 */

//** 1 - 10 Number Addition Result
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     console.log(sum + ' + ' + i + ' = ' + (sum+i));
//     sum+=i;
// }
// console.log('Result = ' + sum);

// *! Home Work 1 - 10 Even Number Addition Result

/* var sum = 0;
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum+i));
        sum+=i;
    }
}
console.log('Result = ' + sum); */


// Multiplication Table
const n = 5
// range
const r = 5
for(let i = 1; i <= r; i++) {
   const result = i * n;
   console.log(`${n} * ${i} = ${result}`)
}
