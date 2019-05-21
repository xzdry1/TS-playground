interface PersonInterface {
    name: string;
    age?: number;

    greeting(): string;
}

class Student implements PersonInterface {
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    greeting() {
        return `我叫${this.name}`
    }
}

class Teacher implements PersonInterface {
    name: string;
    salary: number;
    constructor(name: string, salary) {
        this.name = name;
        this.salary = salary;
    }

    greeting() {
        return ''
    };
}

let dry = new Student('dry', 80);
let xdd = new Teacher('xdd', 100);

console.log(dry.greeting());
console.log(xdd.greeting());