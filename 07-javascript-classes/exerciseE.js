class Person {
    constructor(option) {
        this.name = option.name;
        this.age = option.age;
    }

    info() {
        console.log('The person is called ' + this.name + ' and is ' + this.age + ' years old. ');
    }
}

const person = new Person({age: 44, name: 'Tom'});
console.log(person);
person.info()