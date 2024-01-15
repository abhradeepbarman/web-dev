// function print() {
//     console.log('I have clicked on the doc!')
// }

// document.addEventListener('click', print);

// // document.removeEventListener('click', print);





//Event Object
// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event) {
//     console.log(event);
// })




// Prevent Default Action 
// let link = document.querySelector('#fb-link');

// link.addEventListener('click', function(event) {
//     event.preventDefault();
// });





//How to Avoid too many events
// let myDiv = document.createElement('div');

// function paraStatus() {
//     console.log('Para: ' + event.target.textContent);  
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);






let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log("Hello " + event.target.textContent);
    }
});
