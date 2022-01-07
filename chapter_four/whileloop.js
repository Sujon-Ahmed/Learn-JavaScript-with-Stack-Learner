// while loop structure
/*
var = initializer;
while (condition) {
    statement....;
    Increment++;
}
*/

// var text = 0;
// while (text <= 10) {
//     console.log(text + ' Hello World');
//     text++;
// }

// *? Project 

var isRunning = true;
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner');
        isRunning = false;
    } else {
        console.log('You have got ' + rand);
    }
}














