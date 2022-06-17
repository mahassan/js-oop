class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Person extends Student{
    constructor(name, age, status){
        super(name, age)
        this.status = status
    }
    getDescription(){
        let desc = super.getDescription();
        return desc
    }
}

//const member = new Student("Ammar", 37);
const member2 = new Person("Hassan", 30, "Married");
console.log(member2.getDescription())