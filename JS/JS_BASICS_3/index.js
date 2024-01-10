//Array

//creation
// let numbers = [1,3,5,7,9,11];

//insertion
// numbers.push(9);   //insert at end
// numbers.unshift(8);     //insert at start
// numbers.splice(2, 0, 'a', 'b', 'c');    //insert at middle

// console.log(numbers);
// console.log(numbers.indexOf('a'));



//check if a number exist in array or not
// if(numbers.indexOf(5) != -1) {
//     console.log('present');
// }
// else {
//     console.log('absent');
// }




// console.log(numbers.includes(7));
// console.log(numbers.indexOf(8, 2));


// let courses = [
//     {no:1, name:'Abhra'},
//     {no:2, name: 'Neha'}
// ];

// console.log(courses);

// console.log(courses.includes( {no:1, name: 'Abhra'} ));




//callback func
// let course = courses.find(function(course) {
//     return course.name == 'Elvish';
// })





//arrow function
// let course = courses.find(course => course.name === 'Abhra');

// console.log(course);



//deletion

//end
// console.log(numbers.pop());

// //start
// console.log(numbers.shift());

// //middle 
// console.log(numbers.splice(2,1));

// console.log(numbers);




//empty an array
// let numbers = [1,3,5,7,9,11];
// let numbers2 = numbers;

// // numbers = [];
// // numbers.length = 0;
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(numbers2);


//combine 2 arrays
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// // let sliced = combined.slice(2);  
// let sliced = combined.slice(2,4);   // [start, end)
// console.log(sliced);


//spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', ...second, 'b'];
// console.log(combined);


// //copy
// let another = [...combined];




//iterating on array
// let arr = [2,4,6,8,10];

// for(let i of arr) {
//     console.log(i);
// }

//for-each loop
// arr.forEach(function(number) {
//     console.log(number);
// })

// arr.forEach(number => console.log(number));






//joining arrays
// let numbers = [10,20,30,40,50];

// const joined = numbers.join('|');
// console.log(joined);

// const splitted = joined.split('|');
// console.log(splitted);



//sort an array
// let numbers = [40,20,30,50,10];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);



//filter an array
// let numbers = [1,2,-1,5,-4];

// // let positiveValue = numbers.filter(function(value) {
// //     return value >= 0;
// // })

// let positiveValue = numbers.filter(value => value >= 0);

// console.log(positiveValue);




//mapping in array
// let numbers = [7,8,9,10];

// // let items = numbers.map(function(value) {
// //     return 'student no-' + value;
// // }); 

// let items = numbers.map( value => 'student no-' + value ); 

// console.log(items)



//mapping with objects
let numbers = [1,2,-6,-9];

// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num) {
//     // let obj = {value: num};
//     // return obj;

//     return {value: num};
// })

// let items = filtered.map( num => {value: num} );


let items = numbers
            .filter(value => value >= 0)
            .map( num => {value: num} );

console.log(items);

