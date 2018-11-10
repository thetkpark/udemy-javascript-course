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











/////////////////////////////////
// Lecture: Spread operator
/*
function addFourAges (a,b,c,d){
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5

var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages); //Spread operator
console.log(sum3)

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Marry', 'Bob', 'Ann'];

const bigFamily = [...familySmith,'Lily',...familyMiller]; //uses to join array together
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; //join nodelist to node in array use spread operator

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/












/////////////////////////////////
// Lecture: Rest parameters
/*
// ES5
function isFullAge5(){
    //console.log(arguments);
    console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments);

    argsArray.forEach(function(cur){
        console.log((2018-cur)>=18);
    });
}

isFullAge5(1990,1999,1965);
isFullAge5(1990,19899,1965,2016,1987);


// ES6
function isFullAge6(...years){ //tranform all args to array
    //console.log(years);
    years.forEach(cur => console.log( (2018-cur)>=18));
    
}
isFullAge6(1990,1999,1965,2016,1987);
*/
/*
// ES5
function isFullAge5(limit){
    //console.log(arguments);
    //console.log(arguments);
    var argsArray = Array.prototype.slice.call(arguments,1);
    argsArray.forEach(function(cur){
        console.log((2018-cur)>=limit);
    });
}

isFullAge5(21,1990,1999,1965);
isFullAge5(21,1990,19899,1965,2016,1987);


// ES6
function isFullAge6(limit,...years){ //tranform all args to array
    //console.log(years);
    years.forEach(cur => console.log( (2018-cur)>=limit));
    
}
isFullAge6(21,1990,1999,1965,2016,1987);
*/












/////////////////////////////////
// Lecture: Default parameters
//Like a preset lastName and nationality in this case

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
*/


// ES6
/*
function SmithPerson(firstName, yearOfBirth ,lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/












/////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
//add key and value to map 
//key no need to be string. it could be anything
question.set('question', 'What is the official name of the lateste major JS version?'); 
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

//get value from map
console.log(question.get('question'));
//console.log(question.size); //size of map

//if(question.has(4)){ //.hs = check if key 4 is in the map
    //question.delete(4); //delete key 4=> ES7
//}

//question.clear(); //clear all the map data

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for(let [key, value ] of question.entries()){
    //console.log(`This is ${key}, and it's set to ${value}`);
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer')); //recieve value as string. It need to be converted to int
console.log(question.get(ans === question.get('correct'))); //return t or F);
*/













/////////////////////////////////
// Lecture: Classes
/*
// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var john5= new Person5('John', 1990, 'teacher');

// ES6  //this is all the same as above, but in more organiz way
//Class definitions are not hoisted
class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting(){ //static method is not inherit 
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/












/////////////////////////////////
// Lecture: Classes and subclasses
/*
// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}
 
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();



// ES6  
class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames, medals){
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/















/////////////////////////////////
// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class park{
    constructor(name,yearBuild,trees,area){
        this.name = name;
        this.yearBuild = yearBuild;
        this.trees = trees;
        this.area = area;
    }
    treesDensity(){
        var density = this.trees/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
    avgAge(){
        var age = this.yearBuild.array.forEach(element => {
            
        });
    }

}