

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function (){
    console.log(2019 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();