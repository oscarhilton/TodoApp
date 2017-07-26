// function add (a,b) {
//     return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];

// console.log( add(...toAdd) );

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Oscar', 'Pete'];

// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Oscar', 25];
var personTwo = ['Jen', 29];

var greet = function(name, age){
    return 'Hello '+ name +', you are ' + age + '.';
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Oscar', ...names];

final.forEach(function(el){
    console.log('Hi ' + el);
})