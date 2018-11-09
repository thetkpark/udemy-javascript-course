/////////////////////////////////
// Lecture: let and const
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith'; //variable that can't change value
let age6 = 23; //someting that can mutate
name6 = 'Jane Miller'; //this line of code not gonna work
console.log(name6);
*/
/*
//Function scope (Var) vs block-scope variable (const,let)
//ES5

function driverLicence5 (passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
        //these variables is functions scope which can be accessed from everwhere in the function
        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to driver.');

}

driverLicence5(true);

//ES6

function driverLicence6 (passedTest){

    //let firstName;
    //let yearOfBirth;
    if(passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;

        //these variable is block-scope which can't access out side of 'if' block
        //and also can't use variable before it declared
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to driver.');

}

driverLicence6(true);
*/









/////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// ES6
{
    //this is a block 
    const a = 1;
    let b = 2;
    var c = 3;

}
console.log(a + b); //unaccessable
console.log(c); //this work

// ES5
(function() {
    var c = 3;
})();

//console.log(c);
*/











/////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2018 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, He is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, He is ${calcAge(yearOfBirth)} years old.`); //use template literal


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //if string start with 'J' or not
console.log(n.endsWith('th')); //if string ends with 'th' or not
console.log(n.includes('oh')); //if string contain 'oh' or not
console.log(firstName.repeat(5)); //repeat firstName 5 times
console.log(`${firstName}`.repeat(5)); //same as above

*/










/////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1984, 1982, 1937];

//ES5
var ages5 = years.map(function(element){
    return 2018 - element;
});
console.log(ages5);

//ES6
let ages6 = years.map(element => 2018 - element);
console.log(ages6);

ages6 = years.map((element, index) => `Age element ${index + 1}: ${2018-element}. `)
console.log(ages6);

ages6 = years.map((element, index) => {
    const now = new Date().getFullYear();
    const age = now - element;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);