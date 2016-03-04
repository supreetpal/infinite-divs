import inputData from './data.js';
import infiniteDivs from './lib.js';

let divArray = [];
let root = document.getElementById('root');

for (let value of inputData) {
  let div = document.createElement('div'),
    img = document.createElement('img'),
    span = document.createElement('span');

  img.src = value.img;
  img.style = 'vertical-align: middle; height: 50px; margin: 20px';
  span.innerText = value.name;
  span.setAttribute('style', 'text-decoration: underline');
  div.appendChild(img);
  div.appendChild(span);
  divArray.push(div);

};

let config = {
	root,
	divArray,
	divHeight : 90,
	bufferMultiplier : 3
};

let infinitedivs = new infiniteDivs(config);
