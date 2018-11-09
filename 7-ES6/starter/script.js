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
/*
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
*/










/////////////////////////////////
// Lecture: Arrow functions 2

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            //In this function 'this' keyword is pointed at global object not the box5 object
            //var str = 'This box number ' + this.position + ' and it is ' + this.color;
            var str = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();
*/


//ES6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            //'this keyword pointed to the object becasue the '=>' (ES6)
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}

box6.clickMe();
*/

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        //this method here also share 'this' keyword to global 'this' keyword becasue of line above '=>'
        document.querySelector('.green').addEventListener('click', () => {
            //'this keyword pointed to the object becasue the '=>' (ES6)
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}

box66.clickMe();
*/
/*
function Person(name){
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends){
    //'this' pointed to John object here
    var arr = friends.map(function(el){
        //'this' pointed to global
        return this.name + ' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/

/*
//ES6
Person.prototype.myFriends6 = function(friends){
    //'this' pointed to John object here
    var arr = friends.map((el) => {
        return `${this.name} is friend with ${el}`
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
new Person('Mike').myFriends6(friends);
*/









/////////////////////////////////
// Lecture: Destructuring

// ES5
/*
var john = ['John' ,26];
var name = john[0];
var age = john[1];
*/


// ES6
/*
const [name,age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName,lastName} = obj;
console.log(firstName);
console.log(lastName);


const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

*/
/*
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/








/////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});



// ES6

var boxesArray6 = Array.from(boxes);
boxesArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

// ES5
/*
for (var i=0;i<boxesArray5.length;i++){
    if(boxesArray5[i].className === 'box blue'){
        continue;
    }
    boxesArray5[i].textContent = 'I changed to blue';
}
*/


// ES6
/*
for(const currrent of boxesArray6){
    if(currrent.className.includes('blue')){
        continue;
    }
    currrent.textContent = 'I changed to blue';
}
*/


// ES5
/*
var ages = [12,17,8,21,14,122]
var fullAges = ages.map(function(cur){
    return cur >= 18;
});
console.log(fullAges);

console.log(fullAges.indexOf(true));
console.log(ages[fullAges.indexOf(true)]);
*/

// ES6
/*
var ages = [12,17,8,21,14,122]
var fullAges = ages.map(function(cur){
    return cur >= 18;
});
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

