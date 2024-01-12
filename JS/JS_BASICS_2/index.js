//object creation
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     //method
//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// console.log(rectangle)
// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.draw());




//factory function
// function createRectangle(length, breadth) {

//     let Rectangle = {
//         // length: length,
//         // breadth: breadth,

//         length,
//         breadth,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
    
//     return Rectangle;
// } 

// let rectangleObj = createRectangle(4,9);
// console.log(rectangleObj);




// // constructor function -> Pascal Notation
// // initialise properties & methods
// function Rectangle(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function() {
//         console.log(console.log('drawing rectangle'));
//     }
// }

// //object creation using constructor function
// let rectangleObj = new Rectangle(4,6);
// console.log(rectangleObj);





// //dynamic nature of objects
// let obj = {
//     length: 1,
//     breadth: 2
// };
// console.log(obj);

// obj.height = 5;
// console.log(obj);

// delete obj.height;
// console.log(obj);





// primitives are passed as value
// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);



// References are passed by Address/reference
// let a = {value: 10};
// let b = a;

// a.value++;
// console.log(a.value);
// console.log(b.value);





// // for-in loop  --> IT IS APPLIED ON OBJECTS
// let Rectangle = {
//     length: 2,
//     breadth: 4
// };

// for(let key in Rectangle) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key, Rectangle[key]);
// }





// // for-of loop  -->IT IS APPLIED ON ITERABLES -> ARRAYS, MAPS ETC.

// let arr = [1,3,5,7,9];
// for(let i of arr) {
//     console.log(i);
// }





// //check property exist or not
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