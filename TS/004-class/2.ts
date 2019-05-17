class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return `${this.name}向你问好`;
    }
}

let ming = new Person('ming');
console.log(ming.greet());

class Student extends Person {
    private major: string;

    constructor(name: string, major: string) {
        super(name);
        this.major = major;
    }
    stuGreet() {
        return `${this.major}的${this.name}向你问好`
    }
}

let hong = new Student('hong', 'jp');
console.log(hong.stuGreet());
console.log(hong.name);

export { }