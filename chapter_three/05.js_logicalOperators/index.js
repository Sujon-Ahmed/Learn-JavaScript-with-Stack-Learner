// Logical Operators
//  && || !

// logical && operator 
// --------------------------
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// logical || operator
// ----------------------
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// logical ! operator
// -------------------
// true = false
// false = true

// Example && operators
var a = 10
var b = 20
var c = 30
var d = 40
if(a > b && c > d){
    console.log("A is gether than B and C is gether than D")
}else{
    console.log("Al least one condition is false")
}

// Example || operators
if(a > b || c > d){
    console.log("A is gether than B and C is gether than D")
}else{
    console.log("Al least one condition is false")
}

// Example ! operator
var check = !(a > b)
console.log(check)