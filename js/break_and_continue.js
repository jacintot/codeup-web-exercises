"use strict";

//Used instructor examples

while (true){
    var oddNumber = parseInt(prompt("Enter an odd number between 1 and 50 and I will skip it."));
    if (oddNumber % 2 === 1 && oddNumber < 51 && oddNumber >=1){
        break;
    }
}

for (var i = 1; i<51; i+=2){
    if (i === oddNumber){
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}

