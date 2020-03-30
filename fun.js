function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'srijan',
    lastname: 'erroju'
};
fullname(p);
/* interface person{
    firstname:string;
    lastname:string;
}*/
function fullname1(person) {
    console.log(person.firstname + " " + person.lastname);
}
fullname1(p);
