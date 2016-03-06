import inputData from './data.js';
import infiniteDivs from '../../lib/infinitedivs.js';

let rootElement = document.body;

function divGenerator(item) {
  let div = document.createElement('div'),
    img = document.createElement('img'),
    span = document.createElement('span');

  img.setAttribute('src', item.img);
  img.setAttribute('style', 'vertical-align: middle; height: 50px; width: 50px; margin: 20px');
  img.setAttribute('alt', 'avatar');
  span.textContent = item.name;
  span.setAttribute('style', 'text-decoration: underline');
  div.setAttribute('style', 'border-bottom: 1px dotted');
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
