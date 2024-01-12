//Math Object
// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.max(4,9));
// console.log(Math.min(4,9));
// console.log(Math.round(1.8));
// console.log(Math.abs(-11));




// String objects 
// let fullName = new String('    Abhradeep Barman    ');
// console.log(fullName);

//methods
// console.log(fullName.length);
// console.log(fullName[0]);
// console.log(fullName.includes('man'));
// console.log(fullName.startsWith('XYZ'));
// console.log(fullName.endsWith('man'));
// console.log(fullName.indexOf('a'));
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.trim());
// console.log(fullName.replace('man', 'woman'));

// let message = 'This is Abhra';
// let words = message.split(' ');
// console.log(words);

// let message = 'This is Abhra';
// console.log(message.replace('Abhra', 'Neha'));






//Template Literal  --> print the string as it is
// let msg = 
// `Hello there,
//     This is Abhra. 
// Thank you`;

// console.log(msg);





//Date & Time
// let date = new Date();
// let birthday = new Date(2003, 11, 6);
// console.log(birthday);

// //setter
// birthday.setFullYear(2004);
// console.log(birthday);

// //getter
// console.log(birthday.getFullYear());





//Array creation
// let numbers = [1,3,5,7];
// console.log(numbers);

//insertion
// numbers.push(9);   //insert at end
// numbers.unshift(8);     //insert at start
// numbers.splice(2, 0, 'a', 'b', 'c');    //insert at middle




//searching an element in array
//indexof  --> return index otherwise -1
//includes --> return true or false

// console.log(numbers.indexOf(5));
// console.log(numbers.includes(7));




//check if a number exist in array or not
// if(numbers.indexOf(5) != -1) {
//     console.log('present');
// }
// else {
//     console.log('absent');
// }




//Searching in Array of Objects
// let courses = [
//     {no:1, name:'Abhra'},
//     {no:2, name: 'Neha'}
// ];

// console.log(courses);
// console.log(courses[0]);
// console.log(courses[1]);


//callback func
// let course = courses.find( function(course) {
//     return course.name == 'Abhra';
// });

// console.log(course);



//arrow function
// let course = courses.find(course => course.name === 'Abhra');
// console.log(course);




//deletion
// console.log(numbers.pop());          //end
// console.log(numbers.shift());        //start
// console.log(numbers.splice(2,1));    //middle
// console.log(numbers);




//empty an array
// let numbers = [1,3,5,7,9,11];
// let numbers2 = numbers;  

// numbers = [];    
// numbers.length = 0;    //best prectice 
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(numbers2);




//Combining & Slicing Arrays
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(2);  
// let sliced = combined.slice(2,4);   // [start, end)
// console.log(sliced);





//spread operator  --> THIS IS ALSO USED FOR COMBINING ARRAYS
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', ...second, 'b'];
// console.log(combined);


// COPY OF ARRAY
// let another = [...combined];




//iterating on array
//for-of loop is used to iterate on interables
// let arr = [2,4,6,8,10];

// for(let i of arr) {
//     console.log(i);
// }

//for-each loop
// arr.forEach(function(number) {
//     console.log(number);
// })

// arr.forEach(number => console.log(number));






// -------------------------------------------------------

// let numbers = [10,20,30,40,50];

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string

// let str = numbers.join('|');
// console.log(str);


// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// numbers = str.split('|');
// console.log(numbers);

//--------------------------------------------------------



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

// let items = numbers.map(function(value) {
//     return value * 2;
// }); 

// let items = numbers.map( value => 'student no-' + value ); 
// console.log(items)






//mapping with objects
// let numbers = [1,2,-6,-9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num) {
//     // let obj = {value: num};
//     // return obj;
//     return {value: num};
// })

// let items = filtered.map(num => ({value: num}))
// console.log(items);





//chaining
// let items = numbers
//             .filter(value => value >= 0)
//             .map(num => ({value: num}));

// console.log(items);