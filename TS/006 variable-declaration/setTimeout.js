function ex1() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    }
}
ex1();
function ex2() {
    for (var i = 0; i < 10; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 1000 * i);
        })(i);
    }
}
setTimeout(function () {
    ex2();
}, 3000);
