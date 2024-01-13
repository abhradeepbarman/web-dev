//function call
// run();

// //function creation
// function run() {
//     console.log('running');
// }





//*** HOISTING - is a process of moving the declaration of a function to the top of the file. 
//**** IT IS DONE AUTOMATICALLY by JS Engine





//Named function assignment
// let stand = function walk() {
//     console.log('walking');
// }

//Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// }

// stand();
// stand2();

// let jump = stand;
// jump();





//JS - DYNAMIC LANGUAGE
// function sum() {
//     // return a+b;


//     //arguments will be stored here -- It is an OBJECT, not an array
//     // console.log(arguments);
    
//     let total = 0;
//     for(let value of arguments) {
//         total = total + value;
//     }
//     return total;
// }

// console.log(sum(3,2));
// console.log(sum(3));  //NaN - Not a Number -- b value will be passed as undefined
// console.log(sum());
// console.log(sum(4,6,1,5,4,7));





//REST OPERATOR  --> It is will create an array of arguments passed
// function sum(num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);







//Default Parameters
// function interest(p, r=6, y=10) {
//     return p*(r/100)*y;
// }

// console.log(interest(1000, 8));








//GETTER & SETTER
// let person = {
//     fName: 'Abhradeep',
//     lName: 'Barman',

//     //getter
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     //setter
//     set fullName(value) {
//         if(typeof value != String) {
//             throw new Error("You have to sent a string");
//         }

//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// //getter
// console.log(person.fullName);

// //setter
// person.fullName = true;
// console.log(person.fullName);





// Try & catch - Exception Handling
// try {
//     person.fullName = true;
// }
// catch(e) {
//     alert(e);
// }





//Reducing an array
// let arr = [1,2,3,4];

// let total = 0;
// for(let val of arr) {
//     total = total + val;
// }
// console.log(total);


// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
// 0,);
// console.log(totalSum);

// accumulator will store the value
//currentValue will be used for iterating on array objects