import inputData from './data.js';
import infiniteDivs from '../../lib/infinitedivs.js';

let divArray = [];
let root = document.body;

for (let value of inputData) {
  let div = document.createElement('div'),
    img = document.createElement('img'),
    span = document.createElement('span');

  img.src = value.img;
  img.style = 'vertical-align: middle; height: 50px; width: 50px; margin: 20px';
  img.alt = 'avatar',
  span.innerText = value.name;
  span.setAttribute('style', 'text-decoration: underline');
  div.appendChild(img);
  div.appendChild(span);
  divArray.push(div);

};

let config = {
  root,
  divArray,
  divHeight: 90,
  bufferMultiplier: 2
};

let infinitedivs = new infiniteDivs(config);

function scrollListener() {
  infinitedivs.viewDoctor(config.root);
};
document.addEventListener('scroll', scrollListener);
