(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
//var person  = {
//    firstName: "Jacinto",
//    lastName:"Torres",
//    sayHello: function () {
//        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
//   }
//}

//console.log(person.firstName)
//console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
//person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

// shoppers.forEach(function(shopper) {
//     var discount = .12
//     if(shopper.amount >= 200) {
//         console.log(shopper.name + " your total is " + shopper.amount + " you will receive a 12% discount for your purchase your total after discount is" + (shopper.amount - shopper.amount * discount))
//        }else  {
//         console.log(shopper.name + " you do not qualify for a discount your total is " + shopper.amount)
//     }
// })
    //   for (var i = 0; i < shoppers.length; i += 1) {
    //       var discountedAmount = calculateDiscount(shoppers[i].amount, discountThreshold, discountPercentage);
    //       var output = shoppers[i].name + ' is purchasing ' + shoppers[i].amount +
    //           ' of stuff. He will get ' + discountedAmount +
    //          ' off the purchase and pay ' +
    //           (shoppers[i].amount - discountedAmount) + '.';
    //       console.log(output);
    //  }

//shoppers.forEach()


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "Zen And The Art of Motorcycle Maintenance",
            authorFirstName: "Robert",
            authorLastName: "Pirsig"
        },
        {
            title: "Where The Wild Things Are",
            authorFirstName: "Maurice",
            authorLastName: "Sendak"
        },
        {
            title: "The Hungry Little Caterpillar",
            authorFirstName: "Eric",
            authorLastName: "Carle"
        },
        {
            title: "One Monster After Another",
            authorFirstName: "Mercer",
            authorLastName: "Meyer"
        },
        {
            title: "Hagakure",
            authorFirstName: "Yamamoto",
            authorLastName: "Tsunemoto"
        }

    ];
//console.log(books[0].title)
//console.log(books[1].title);
//console.log(books[1].authorFirstName);
//console.log(books[1].authorLastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, location) {
        console.log("Book # " + (location + 1) + "\n" + "Title: " + book.title + "\n" + "Author: " + book.authorFirstName + " " + book.authorLastName)
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            authorFirstName: authorFirstName,
            authorLastName: authorLastName
        }

    }


    function showBookInfo(books) {
        console.log("Title: " + books.title);
        console.log("Author: " + books.authorFirstName + " " + books.authorLastName);
        console.log("---");
    }


})();