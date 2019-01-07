// function
function greeter1(person: string) {
    return 'Hello, ' + person;
}
let user = 'Jane User';
document.body.innerHTML = greeter1(user);

// INTERFACE
interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user2 = {firstName:'Jane', lastName: 'User'};
document.body.innerHTML = greeter2(user2);


