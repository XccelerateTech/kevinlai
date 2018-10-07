class Person {
    constructor(option) {
        this.name = option.name;
        this.age = option.age;
    }

    info() {
        console.log('The person is called ' + this.name + ' and is ' + this.age + ' years old. ');
    }
}

class Student extends Person {
    constructor (option) {
        super(option);
        this.gpa = option.gpa;
    }

    info() {
        console.log('The person is called ' + this.name + ' and is ' + this.age + ' years old. His gpa is ' + this.gpa.toFixed(1));
    }
}

const person = new Person({age: 44, name: 'Tom'});
const student = new Student({age: 44, name: 'Tom', gpa: 4.0});
console.log(person);
console.log(student);
person.info()
student.info()