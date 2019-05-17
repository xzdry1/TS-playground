var user = {
    name: 'dry',
    age: 18
};
console.log(user);
var arr;
arr = [1, 2, 3];
console.log(arr);
// let size = ['L', 'M', 'S'];
var Size;
(function (Size) {
    Size[Size["L"] = 0] = "L";
    Size[Size["M"] = 1] = "M";
    Size[Size["S"] = 2] = "S";
})(Size || (Size = {}));
;
console.log(Size.L);
