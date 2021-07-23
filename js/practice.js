"use strict";

//function returnThree() {
//    return 3;
//}

//function isOdd(number) {
//    return number % 2 === 1;
//}

//function isEven(number) {
//    return !isOdd(number);
//}
//console.log(isEven(6));

//function isTrue(input) {
//    return input === true;
//}

//var numbers = [1, 2, 3, 4];
//console.log(numbers[0]);
//console.log(numbers[1]);
//console.log(numbers[2]);
//console.log(numbers[3]);

//var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//console.log('There are ' + shapes.length + ' shapes in the array');
//console.log('The first shape is: ' + shapes[0]);

function isOdd(number) {
    return number % 2 === 1;

}

function isEven(number) {
    return !isOdd(number);
}

//console.log(isEven(5));

function identity(input) {
    return input;
}

//console.log(identity(false));

function isFive(input) {
    return input === 5;
}

//console.log(isFive(5));

function addFive(input) {
    return input + 5;
}

//console.log(addFive(2))

function isMultipleOfFive(input) {
    if(input % 5 === 0) {
        return true;
    }else {
        return false;
    }
}

//console.log(isMultipleOfFive(8));

function isThree(input) {
    return input === 3;
}

//console.log(isThree(3));

function isMultipleOfThree(input) {
    if(input % 3 === 0) {
        return true;
    }else {
        return false;
    }
}

//console.log(isMultipleOfThree(2))

function isMultipleOfThreeAndFive(input) {
    if(input % 3 === 0 && input % 5 === 0) {
        return true;
    }else {
        return false;
    }
}

//console.log(isMultipleOfThreeAndFive(60));

function isMultipleOf(target, n) {
    return target % n === 0;
}

//console.log(isMultipleOf(13, 2));

function isTrue(boolean) {
    return boolean === true;
}
//console.log(isTrue(true));

function isFalse(boolean) {
    return boolean === false;
}


function isTruthy(input) {

}

console.log(isTruthy(4));