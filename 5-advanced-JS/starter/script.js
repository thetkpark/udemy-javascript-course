/////////////////////////////
// Lecture: Function constructor
/*

//Normal way to create object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    //this.calculateAge = function(){console.log(2018-this.yearOfBirth);}
    
    
    
}
//Put function in prototype propoty
Person.prototype.calculateAge = function (){
    console.log(2018-this.yearOfBirth);
};
//Inherit
Person.prototype.lastName = 'Smith';

//new operator created new empty object and call Person (function constructor)
var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john);
*/
/*
/////////////////////////////
// Lecture: Object.create

var personProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teahcer';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'Designer '}
})
*/








/////////////////////////////
// Lecture: Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
// A copy of age variable is created when the function called. So age didn't change globaly 
change(age, obj);

console.log(age);
console.log(obj.city);
*/








/////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (array, fn) {
    var arrRes = [];
    for(var i=0;i<array.length;i++){
        arrRes.push( fn(array[i]) ); 
        //add result of function 'fn' of array[i] to 'arrRes'
    }
    return arrRes;
}
//function below is a callback function (call this function later)
function calculateAge (element){

    return 2018-element;
}

function isFullAge (element) {
    return element >= 18;
    //return boolean (T or F)
}

function maxHeartRate(element){
    if(element >= 18 && element <= 81){
    return Math.round(206.9 - (0.67 * element));
    }
    else{
        return -1;
    }
}


var age = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(age, isFullAge);
var rates = arrayCalc(age, maxHeartRate);

console.log(age);
console.log(fullAges);
console.log(rates);
*/










/////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            //annonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function (name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
//this teacherQuestion variable store function which can be used later
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');
//call secound function right away
interviewQuestion('teacher')('John');
*/








/////////////////////////////
// Lecture: IIFE
/*

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

//same thing as above (the point is to hide the score variable from outside)
(function (){
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
}
)(5);
*/








/////////////////////////////
// Lecture: Closures



