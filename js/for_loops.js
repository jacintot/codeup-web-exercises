"use strict";

const showMultiplicationTable = parseInt(prompt('Enter an integer: 7'));
const range = parseInt(prompt('Enter a range: 10'));
for(let i = 1; i <= range; i++) {
    const result = i * showMultiplicationTable;
    console.log(`${showMultiplicationTable} * ${i} = ${result}`);
}


//function showMultiplicationTable(7){
//    for( let i = 1; i <= 10; i++){
//        console.log("i equals " + i * 7)
//    }
//    return Math.floor(Math.random() * 7);
//}
//    showMultiplicationTable()

//function randomNumbersBetween20And200(){
//   for( let i = 1; i <= 10; i++){
//        let random = Math.floor(Math.random() * 180) + 20;
//        if(random % 2 === 0){
//            console.log(random + " is even ");
//        }else {
//            console.log(random + " is odd");
//        }
//    }
//}
//randomNumbersBetween20And200();

//function createPyramid() {
//   for(let i = 1; i <= 9; i++) {
//        let pain = i.toString().repeat(i)

//        console.log(pain)
//    }
//}
//createPyramid()


//for (let i = 100; i > 0; i-=5) {
//    console.log(i);
//}











