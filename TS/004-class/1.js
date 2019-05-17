// class Person {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet() {
//         return `${this.name}像你问好`;
//     }
// }
// let ming = new Person('');
// console.log(ming.greet());
// class Student extends Person {
//     private major: string;
//     constructor(name: string, major: string) {
//         super(name);
//         this.major = major;
//     }
//     stuGreet() {
//         return `${this.major}系的${this.name}像你问好`
//     }
// }
// let hong = new Student('红', 'jp');
// console.log(hong.stuGreet())
// console.log(hong.major);

function foo() {
    let obj = { a: 1, b: 1 }
    return obj;
}

let boo = foo();
let boo1 = foo();
boo.b = 2;
boo1.a = 2;
console.log(boo);
console.log(boo1);
