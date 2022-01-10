//  ? interview question 01 what is answer?
/* function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'sujon';
    let age = 22;
}
sayHi(); */
/*  
* undefined
* not access age
*/

// ? interview question 02 what is answer?
/* for(var i = 0; i < 3; i++) {
    setTimeout(()=>console.log(i),1);
} */
/* 
* 3 3 3 // this answer is true
* 0 1 2
* 1 2 3
* 0 0 0
*/

// ? interview question 03 what is answer?
/* let temp = {
    a:10,
    b:20,
    sum() {
        return this.a + this.b;
    },
    multi: () => {
        return this.a * this.b;
    },
};

console.log(temp.sum());
console.log(temp.multi()); */
/* 
* Nan and Nan
* Nan and 200
* 30 and NaN // this answer is true
* 30 and 200
*/

// ? interview question 03 what is answer?
console.log(+true);
console.log(!'abc');
/* 
* 1 and false // this answer is true
* false and NaN
* false and false
*/

