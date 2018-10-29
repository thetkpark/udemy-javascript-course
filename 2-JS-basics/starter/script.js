/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

*/

/*

var firstName = 'John';
var age = 28;

console.log(firstName + '' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married' + isMarried);

var lastName = prompt('What is his last name');
console.log(lastName + ' ' + firstName);

*/

//******************* 
//Basic Operators
/*
var now = 2018;
var ageJohn = 28;
var ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;
console.log (yearJohn);
console.log (yearMark);
console.log(now*2);
console.log(now/2);

//Logical Operator
var johnOlder = ageJohn>ageMark;
console.log(johnOlder);

//Type of operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
*/
/*
var now = 2018;
var yearJohn = 1989
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
*/
/*
//Coding challenge 1
var massMark=100, heightMark=1.8, massJohn=50, heightJohn=2;
var MarkBMI, JohnBMI;
MarkBMI = massMark/(heightMark*heightMark);
JohnBMI = massJohn/(heightJohn*heightJohn);
console.log(MarkBMI, JohnBMI);

var isMark = MarkBMI > JohnBMI;
console.log('Is Mark\'s BMI > John\'s: ' + isMark);
*/
/*
//Coding challenge 2
var avgJohn = (89 + 120 + 103)/3;
var avgMike = (116 + 94 + 123)/3;
var avgMary = (97 + 134 + 105)/3;
console.log(avgJohn +' '+ avgMike + ' ' + avgMary);

if(avgJohn > avgMike && avgJohn > avgMary){
    console.log('John is a winner with ' + avgJohn + ' points.');
}
else if(avgMike > avgJohn && avgMike > avgMary){
    console.log('Mike is a winner with ' + avgMike + ' points.');
}
else if(avgMary > avgJohn && avgMary > avgMike){
    console.log('Mike is a winner with ' + avgMary + ' points.');
}
else {
    console.log('There is a draw');
*/

//Coding challenge 4
/*
var John = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calBMI: function(){
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }
}
var Mark = {
    fullName: 'Mark Loop',
    mass: 110,
    height: 1.95,
    calBMI: function(height,mass){
        this.BMI = this.mass / (this.height*this.height);
        return this.BMI;
    }
}
if(John.calBMI() > Mark.calBMI()){
    console.log(John.fullName + ' has a higher BMI of ' + John.bmi);
}
else if (Mark.calBMI() > John.calBMI()){
    console.log(Mark.fullName + ' has a higher BMI of ' + Mark.bmi);
}
else {
    console.log('They are equal in BMI');
}
console.log(John.BMI, Mark.BMI);


*/
var value ={
    bills: [124,48,268,180,42],
    tips: [],
    final: [],
    calcTip: function(){
        var i;
        for(i=0;i<this.bills.length;i++){
        if(this.bills[i]<50) {
            this.tips[i]=0.2*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
        else if(this.bills[i] > 50 && this.bills[i] < 200){
            this.tips[i]=0.15*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
        else if(this.bills[i] > 200){
            this.tips[i]=0.1*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
    }
}

}
value.calcTip();
console.log(value.tips,value.final);





