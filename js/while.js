"use strict";

//var counter = 1;
//var number =2;
//while(counter <= 16) {
//    console.log(number);
//    number = number * 2;
//    counter++;
//}

//var number = 2
//while(number <= 65536) {
//    console.log(number);
//    number = number * 2;
//}

var allCones = Math.floor(Math.random() * 50) + 50;
alert ('You have ' + allCones + ' cones at start.')
do {
    var howManyCones = Math.floor(Math.random() * 5) + 1;
    var totalConesLeft = allCones - howManyCones;
    alert('You would like to buy ' + howManyCones);
    alert('We have ' + totalConesLeft + 'cones left to sell.');
//} while (allCones >= 0);
