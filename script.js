// Lecture: let and const


// ES5
/* 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); 
*/

// ES5
/* 
function driversLicense5(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}



driversLicense5(true);


// ES6
function driversLicense6(passedTest) {

    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);





var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

//////////////////////////////////
// Lecture: Blocks and IIFEs


// ES6
/*
{
    const a = 1;
    let b =2;
    var c = 3;
}

// console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();

// console.log(c);
*/




























///////////////////////
// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
// First way to write arrow function
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// Second way to write arrow function
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// Third way to write arrow function
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
        const age = now - el;
        return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);