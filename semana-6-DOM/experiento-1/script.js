// document.body.style.background = 'red';

let em = document.querySelector('p > em');

// let tr = document.querySelector('#row1');
// undefined
// tr
// <tr id="row1">

// parent.parentElement
// undefined
// let parent = tr.parentElement
// undefined
// parent.removeChild(tr);
// <tr id="row1"></tr>


let img = document.createElement('img');
// undefined
img.src = 'js.png';
// "js.png"
document.body.appendChild(img);
// <img src="js.png"></img>