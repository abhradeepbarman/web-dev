//adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement =  document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();

// console.log('this took ' + (t2-t1) + ' ms');




//optimization
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log('this took ' + (t4-t3) + ' ms');





//Document Fragment
// const t5 = performance.now();
// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     fragment.appendChild(element);
// }

// document.body.appendChild(fragment);   //1 Reflow, 1 Repaint
// const t6 = performance.now();

// console.log('this took ' + (t6-t5) + ' ms');








// JS is Single-Threaded Language
// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'JS is single-threaded lang';
//     document.body.appendChild(para);
// }

// function addMsg() {
//     let para = document.createElement('p');
//     para.textContent = 'JS is not Multi-threaded';
//     document.body.appendChild(para);
// }

// addPara();
// addMsg();




//Event Loop  --> Study from Notes
// console.log('HI');

// setTimeout(function () {
//     console.log('Hello Everyone');
// }, 5000);

// console.log('BABE');