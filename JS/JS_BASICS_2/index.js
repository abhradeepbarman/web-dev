
//object creation
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };



//factory function
// function createRectangle(length, breadth) {

//     // let rectangle = {
//     //     length: 1,
//     //     breadth: 2,
    
//     //     draw: function() {
//     //         console.log('drawing rectangle');
//     //     }
//     // };
//     // return rectangle;


//     return rectangle = {
//         // length: length,
//         // breadth: breadth,

//         length,
//         breadth,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
// } 

// let rectangleObj = createRectangle(5,4);






// constructor function --> Pascal Notation
//initialise properties & methods
// function Rectangle(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function() {
//         console.log(console.log('drawing rectangle'));
//     }
// }

// //object creation using constructor function
// let rectangleObj = new Rectangle(4,6);




// //dynamic nature of objects
// rectangleObj.color = 'yellow';
// delete rectangleObj.color;


// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);




// primitives are passed as value
// let a = 5;
// function inc(a) {
//     a++;
// }

// inc(a);
// console.log(a);


// References are passed by Address / reference
// let a = {value: 5};
// function inc(a) {
//     a.value++;
// }

// inc(a);
// console.log(a.value);





// let Rectangle = {
//     length: 2,
//     breadth: 4
// };



// for-in loop
// for(let key in Rectangle) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key, Rectangle[key]);
// }



// // for-of loop
// for(let key of Object.keys(Rectangle)) {
//     console.log(key);
// }

// for(let key of Object.entries(Rectangle)) {
//     console.log(key);
// }





//check property exist or not
// if('color' in Rectangle) {
//     console.log('present');
// }
// else {
//     console.log('absent');
// }




//object cloning 

//1- iteration
// let src = {value: 10};
// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }


//2- Assign
// let src = {value: 10};
// let dest = Object.assign({}, src);


//3- Spread
// let src = {value: 10};
// let dest = {...src};
