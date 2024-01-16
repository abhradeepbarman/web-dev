//promises
// let myPromise1 = new Promise( function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside promise-1');
//     }, 5000);

//     // resolve(2003);
//     // reject(new Error('Error aaya hai'));
// } )

// let myPromise2 = new Promise( function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside promise-2');
//     }, 3000);

//     // resolve(2003);
//     // reject(new Error('Error aaya hai'));
// } )

// console.log('Hello')





// let myPromise = new Promise( function(resolve, reject) {
//     setTimeout(function(){
//         console.log('I am inside promise');
//     }, 2000);

//     // resolve(2233);
//     reject(new Error('Hey I am Error'));
// } )


// // myPromise.then((value) => {console.log(value)});
// // myPromise.catch((error) => {console.log('Received an Error')});

// myPromise.then( (value) => {console.log(value)}, (error) => {console.log('Received an Error')});








// let firstPromise = new Promise(function(resolve, reject){
//     setTimeout( () => {
//         console.log('set timeout 1 started');
//     }, 2000)
//     resolve(2003);
// })

// let output = firstPromise.then( () => {
//     let secondPromise = new Promise( function(resolve, reject) {
//         setTimeout( () => {
//             console.log('set timeout 2 started');
//         }, 3000)
//         resolve('second promise resolved');
//     })
//     return secondPromise;
// })

// output.then((value) => console.log(value));






//Async Function
// async function abcd() {
//     return 7;
// }

// console.log(abcd());


// async function utility() {

//     let wbWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hot Weather');
//         }, 1000);
//     });

//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Cold Weather');
//         }, 5000);
//     });

//     let wbW = await wbWeather;
//     let delW = await delhiWeather;

//     return [wbW, delW];
// }







//FETCH API
// async function util() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }

// util();



//POST API
// async function helper() {
//     let options =  {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);

//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();






//CLOSURES
// function init() {
//     let name = 'Chrome';

//     function displayName() {
//         console.log(name); 
//     }
//     return displayName();
// }
  
// let func = init();
// func();
  