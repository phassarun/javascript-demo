// function
function greeter1(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
document.body.innerHTML = greeter1(user);
function greeter2(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user2 = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter2(user2);
