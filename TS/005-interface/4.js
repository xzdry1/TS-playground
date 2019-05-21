function greeter(person) {
    return "Hello " + (person.firstname + ' ' + person.lastname);
}
var user = {
    firstname: 'xzdry',
    lastname: 'dong'
};
document.body.innerHTML = greeter(user);
