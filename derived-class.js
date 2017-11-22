class Person {
    constructor(name){
        this.name = name;
    }
    describe () {
        console.log(`Person called ${this.name}`);
    }
}

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