/**
 * @name Person
 * @desc parent class
 */
class Person {
    constructor(name){
        this.name = name;
    }
    describe () {
        console.log(`Person called ${this.name}`);
    }
}


/**
 * @name Employee
 * @description child class, super class = Person
 */
class Employee extends Person {
    constructor(name, title){
        super(name);
        this.title = title;
    }
    describe(){
        return super.describe() + `${this.title}`;
    }
}

const emp = new Employee('Suhaib', 'Software Rooter');

emp.describe();