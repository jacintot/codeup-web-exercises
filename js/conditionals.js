"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
    /*if (input === "blue") {
        return "the sky is blue";
    } else if (input === "red") {
        return "Strawberries are red";
    } else if (input === "cyan") {
        return "I don't know anything about cyan";
    } else if (input === "orange") {
        return "oranges are orange";
    } else if (input === "yellow") {
        return "bananas are yellow";
    }else if (input === "green") {
         return "grass is green";
    }else if (input === "indigo") {
        return "indigo is a color";
    }else if (input === "violet") {
        return "my shirt is violet";
    }*/

    switch (input) {
        case "red":
            return "Strawberries are red"
        case "blue":
            return "the sky is blue"
        case "orange":
            return "oranges are orange"
        case "yellow":
            return "bananas are yellow"
        case "green":
            return "grass is green"
        case "indigo":
            return "indigo is a color"
        case "violet":
            return "my shirt is violet"
        default:
            return "I don't know about that color"
    }

}






// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

var colorDescription = analyzeColor(randomColor);
console.log(colorDescription);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userInput = window.prompt("enter your favorite color");
alert(analyzeColor(userInput))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

 function calculateTotal (luckyNumber, totalPrice) {
     var discountPercentage = 0;

     switch (luckyNumber) {
         case 0:
             discountPercentage = 0;
            break;
         case 1:
             discountPercentage = .1;
            break;
         case 2:
             discountPercentage = .25;
            break;
         case 3:
             discountPercentage = .35;
             break;
         case 4:
             discountPercentage = .50;
             break;
         case 5:
             discountPercentage = 1;
            break;
     }

     return totalPrice - totalPrice * discountPercentage
 }

var totalBill = window.prompt("What is your total bill?");
var finalBill = calculateTotal(luckyNumber, totalBill);
alert("Your lucky number was " + luckyNumber + ". Your bill was " + totalBill + ". And your final bill is " + finalBill);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//used instructors example to try to figure it out? Still trying to figure it out...
var likeToEnterNumber = confirm("Would you like to enter a number?");
    if(likeToEnterNumber) {
        var userNumber = prompt("Enter a number");
}

var oddOrEven;
    if (userNumber % 2 === 0) {
        oddOrEven = userNumber + " is even.";
    }else {
        oddOrEven = userNumber + " is odd";
    }

alert(oddOrEven);

var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

alert(numberPlus100);

var negativeOrPositive;
    if (userNumber < 0) {
        negativeOrPositive = "That is a negative number.";
    }else {
        negativeOrPositive = "That is a positive number.";
    }
    alert(negativeOrPositive);


//Refactor so if what the user enters is not a number, there's an alert.
// var likeToEnterNumber = confirm("Would you like to enter a number?");
// if (likeToEnterNumber){
//   var userNumber = prompt("Enter a number");
//   if (isNaN(userNumber)){
//    alert("That is not a number!");
//   } else {
//     var oddOrEven;
//     if (userNumber%2===0){
//        oddOrEven = userNumber + " is even.";
//     } else {
//        oddOrEven = userNumber + " is odd";
//     }

//     alert(oddOrEven);

//     var numberPlus100 = userNumber + " plus 100 equals " + (Number(userNumber) + 100) + ".";

//     alert(numberPlus100);

//     var negativeOrPositive;
//     if (userNumber < 0) {
//        negativeOrPositive = "That is a negative number.";
//     } else {
//        negativeOrPositive = "That is a positive number.";
//     }
//     alert(negativeOrPositive);
//       }
//     }

//Refactor to use functions
//function created to get number
// function getNumber() {
//    var likeToEnterNumber = confirm("Would you like to enter a number?");
//    if (likeToEnterNumber){
//        var userNumber = prompt("Enter a number!");
//        if (isNaN(userNumber)){
//            alert("That is not a number!");
//            return NaN;
//           } else {
//            userNumber = parseInt(userNumber);
//            return userNumber;
//           }
//    }
// }

// A function that determines odd or even

// function oddOrEven(number){
//    number = parseInt(number);
//    if (number%2==0){
//        return number + " is even.";
//    } else {
//        return number + " is odd."
//    }
// }

// A function that determines the number plus 100
// I have to parse number so it's not a string, and
// even then I have to wrap the addition in parentheses or it'll concatenate

// function numberPlus100(number){
//    number = parseInt(number);
//    return number + " plus 100 equals " + (number + 100) + ".";
// }

// A function that determines negative and positive

// function negativeOrPositive(number){
//    number = parseInt(number);
//    if (number < 0) {
//        return number + " is a negative number.";
//     } else {
//        return number + " is a positive number.";
//     }
// }

// Run it all like this:

// var theUsersNumber = getNumber();
// alert(oddOrEven(theUsersNumber));
// alert(numberPlus100(theUsersNumber));
// alert(negativeOrPositive(theUsersNumber));



// This part is the same

// function getNumber() {
//     var likeToEnterNumber = confirm("Would you like to enter a number?");
//     if (likeToEnterNumber){
//         var userNumber = prompt("Enter a number!");
//         if (isNaN(userNumber)){
//             alert("That is not a number!");
//             return NaN;
//         } else {
//             userNumber = parseInt(userNumber);
//             return userNumber;
//         }
//     }
// }

//Refactored oddOrEven to use ternary operator
// function oddOrEven(number){
//     return (number%2===0) ? number + " is even." : number + " is odd.";
//  }

// I refactor negativeOrPositive to use a ternary operator

// function negativeOrPositive(number){
//    return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
// }

// function numberPlus100(number){
//     number = parseInt(number);
//     return number + " plus 100 equals " + (number + 100) + ".";
// }

// I check to see if what I get is a number again, as I did at first
// I can't do if number === NaN
// it has to be !isNaN because NaN is never equal to NaN

// var maybeANumber = getNumber();
// if (!isNaN(maybeANumber)) {
//     alert(oddOrEven(maybeANumber));
//     alert(numberPlus100(maybeANumber));
//     alert(negativeOrPositive(maybeANumber));
// }

//Final version where everything is a function
// I start the ball rolling with analyzeNumber
// analyzeNumber calls getNumber
// getNumber runs the confirm dialog, and if the user wants,
// prompts the user and runs returnNaNOrANumber
// returnNanOrANumber returns either NaN, if the user did not enter a number,
// or a number if they did enter one
// since we pass getNumber to analyzeNumber, analyze number
// can check if the passed value isNaN. If it isn't, it runs
// the oddOrEven, numberPlus100, and negativeOrPositive functions
// and it alerts their outputs

function oddOrEven(number){
    return (number%2===0) ? number + " is even." : number + " is odd.";
}

function numberPlus100(number){
    var mySum = number + 100;
    return number + " plus 100 equals " + mySum + ".";
}

function negativeOrPositive(number){
    return (number < 0) ? number + " is a negative number." : number + " is a positive number.";
}

function getNumber() {
    if (confirm("Do you want to enter a number?")){
        return returnNaNOrNumber(prompt("Enter a number!"));
    }
}

function returnNaNOrNumber(input){
    if (isNaN(input)){
        alert("That is not a number!");
        return NaN;
    } else {
        return parseInt(input);
    }
}

function analyzeNumber(input){
    if (!isNaN(input)){
        alert(oddOrEven(input));
        alert(numberPlus100(input));
        alert(negativeOrPositive(input));
    }
}

analyzeNumber(getNumber());









