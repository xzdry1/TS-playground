var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    Student.prototype.greeting = function () {
        return "\u6211\u53EB" + this.name;
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Teacher.prototype.greeting = function () {
        return '';
    };
    ;
    return Teacher;
}());
var dry = new Student('dry', 80);
var xdd = new Teacher('xdd', 100);
console.log(dry.greeting());
console.log(xdd.greeting());
