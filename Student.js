class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}
const member = new Student("Ammar", 37);

console.log(member)