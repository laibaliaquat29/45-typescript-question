//Question no 2
//let personName : string = "hussain";
//let personalMessage : string ="would u like to learn some typescript today";
//console.log(`hello, ${personName} ${personalMessage}.`);
//Question no 3
/*"use strict";
let personName = "laibaaa liaquat";
//lower case
console.log(personName.toLowerCase());
//upper case
console.log(personName.toUpperCase());
//title case
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());*/
//question no 4
/*let person : string = "Albert Einstein";
let quote : string = "A person who never made a mistake never tried anything new.";



//question no 5
//console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');


//Question no 6
/*let personName : string =" \n\t laiba liaquat \n\t";
console.log(personName);
console.log(personName.trim());*/
//Question no 7
/*console.log(5 + 3);         //addition
console.log(10 - 2)        //subtraction
console.log(4 * 2)        //multiplication
console.log(16 / 2)       //division */
//Question no 8
/*console.log(4 + 4);             //add

console.log(12 - 4);          //sub

console.log(4 * 2);         //mul

console.log(16 / 2);       //div  */
//Question no 9
/*let favouriteNumber :number = 29
console.log(`my favourite number is ${favouriteNumber}`); */
//Question no 10
//laiba_liaquat!
// 7_march_2k24                              
//let personName : string ="laiba and hussain";
// console.log(personName.toLowerCase());    //lowercase : single line comment
/*console.log(personName.toUpperCase());  //uppercase : multipal line comment

console.log(personName.charAt(0).toUpperCase() + personName.slice(1). toLowerCase());  //titlecase*/
//Question no 11
// array with message Qno 11
//doing again with sir's methode
//let familyMembers = ["father", "mother", "laiba", "hassan", "eman", "hussain"];
//for(let name of familyMembers) 
//console.log(`hello ${familyMembers}, i love you`);
//Question no 12//array[] with sentenses
//array[0,1,2,3,........................]
/*let familyeMmbers = ["father", "mother"," laiba", "hassan", "emaan"," hussain"];

console.log(familyeMmbers[0], "i love you");
console.log(familyeMmbers[1], "i love you");
console.log(familyeMmbers[2], "i love you");
console.log(familyeMmbers[3], "i love you");
console.log(familyeMmbers[4], "i love you");
console.log(familyeMmbers[5], "i love you"); */
//Question no 13"use strict";
/*let transports = ["fortuner legender", "hilux vigo", "Lamborghini Revuelto", "audi e tron gt"];
for (let i = 0; i < transports.length; i++) {
    console.log(`i would like to own a` + transports[i]);
 } */
//Question no 14"guest list"
/*let guests : string[] = ["hassan", "emaan", "hussain", "laibaa"];
guests.forEach(guest =>{
    console.log(`assalam o alikum, ${guests} you are invited at my home for dinner tonight`);
})*/
//Question 15"guest replacement"
/*let guests : string[] = ["laiba", "hassan", "eman", "hussain"];
let unableToAttend : string ="laiba";
console.log(`${unableToAttend}, can't make it to the dinner.`);

let newGuest : string = "shazia bibi";
guests[guests.indexOf(unableToAttend)] = newGuest
 guests.forEach (guest =>{
    console.log(`dear ${guest}, would you like to join me on dinner today?`);
 }); */
//Question 16 "add more guest"
/*let guests: string[] = ["Laiba", "Hassan", "Emaan", "Hussain"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Mama");
guests.splice(guests.length / 2, 0, "Papa");
guests.push("Dado");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});*/
//Question 17"shrinking guest list"
/*let guests: string[] = ["Laiba", "Hassan", "Emaan", "Hussain"];
//console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Mama");
guests.splice(guests.length / 2, 0, "Papa");
guests.push("Dado");

guests.forEach(guest => {
    //console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // */
//Question 18"seeing the actual world"
/*let places: string[] = ["Canada", "America", "England", "Norway", "Saudia"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);*/
//Question 19 "dinner guest"
/*let guests: string[] = ["Mama", "Laiba", "Papa", "Hassan" , "Eman" ,"Hussain", "Dado"];
console.log(`I am inviting ${guests.length} people to dinner.`);*/
//Question 20"think of something u can store in an array"
/*let subjects : string[] = ["Maths", "Physics", "computer science", "english", "pak studies"];
console.log("subjects I'd like to study for my 12th exams:", subjects);*/
//Question 21 "thinking of something u can store in a typescript object"
/*let girl: { name: string; qualifiication: string; dateOfBirth: number } = {
    name: "Laiba Liaquat",
    qualifiication: " 12th class (computer science)",
    dateOfBirth: 2005
};
console.log(`girl Info: ${girl.name} student of ${girl.qualifiication},born in ${girl.dateOfBirth}`)*/
//Question 22 "intentional error"
/*let family: string[] = ["Papa", "Mama", "Laiba"];

console.log(family[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
family[2] = "Laiba"; // Correcting the error by accessing a valid index*/
//Question 23"conditional test"
//1st test
/*let colour = 'red';

console.log("Is colour == 'red'? I predict True.");
console.log(colour == 'red'); // True

console.log("Is colour == 'blue'? I predict False.");
console.log(colour == 'blue'); // False

//2nd test
let subject = 'Physics';

console.log("Is subject == 'physics'? I predict True.");
console.log(subject == 'physics'); // True

console.log("Is subject == 'chemistry'? I predict False.");
console.log(subject == 'chemistry'); // False

//3rd test
let girlName = 'Laiba';

console.log("Is girlName == 'Laiba'? I predict True.");
console.log(girlName == 'laiba'); // True

console.log("Is giirlName == 'Eman'? I predict False.");
console.log(girlName == 'Eman'); // False*/
//question 24 "more conditional test"// Equality with strings
// Equality with strings
/*console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true  false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true  false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); */
//question 25 alian color#1
/*let alienColor = "green";
if (alienColor == "green") {
    console.log("You just earned 5 points!");
}


alienColor = "red";
if (alienColor == "green") {
    // No output because the condition is false
}*/
//question no 26 alian color #2
/*let alienColor= "green";
if (alienColor== "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}*/
//question 27 alien color #3
/*let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}*/
//question 28 stages of life:
/*let age: number = 25;

if (age > 18) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}*/
//question #29 favourite fruite
/*let favorite_fruits: string[] = ["apples", "bananas", "cherries","grapes","oranges"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("you really like grapes")
}
if (favorite_fruits.includes("cherries")) {
    console.log("You really like cherries!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
}
console.log(favorite_fruits)*/
//question # 30 hello adminlet usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
/*let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});*/
//question #31
/*let userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
/*var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});*/
//Question 34
/*let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");*/
//question 34
/*let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");*/
//question 35
/*function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");*/
//question 36
/*function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size*/
//question 37
/*function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");*/
//question 38
/*function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));*/
//question 39
/*function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));*/
//questiin 40
/*let magicians: string[] = ["laiba", "hira", "madiha"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);*/
//question 41
/*function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names*/
//question 42
/*let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names*/
//question 43
/*function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");*/
//question 44
/*function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
*/
