interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstname +' '+ person.lastname}`;
}

let user = {
    firstname: 'xzdry',
    lastname: 'dong'
}

document.body.innerHTML = greeter(user);