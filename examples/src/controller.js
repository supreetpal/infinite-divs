import inputData from './data.js';
import infiniteDivs from '../../lib/infinitedivs.js';

let rootElement = document.body;

function divGenerator(item) {
  let div = document.createElement('div'),
    img = document.createElement('img'),
    span = document.createElement('span');

  img.src = item.img;
  img.style = 'vertical-align: middle; height: 50px; width: 50px; margin: 20px';
  img.alt = 'avatar';
  span.innerText = item.name;
  span.setAttribute('style', 'text-decoration: underline');
  div.appendChild(img);
  div.appendChild(span);
  return div;
}

let dataArray = inputData;

let config = {
  bufferMultiplier: 2,
  dataArray,
  divGenerator,
  divHeight: 90,
  rootElement
};

let infinitedivs = new infiniteDivs(config);

function scrollListener() {
  infinitedivs.viewDoctor();
};
document.addEventListener('scroll', scrollListener);
