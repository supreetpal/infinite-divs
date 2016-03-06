import inputData from './data.js';
import infiniteDivs from '../../lib/infinitedivs.js';

let rootElement = document.body;

/* Create a DOM Element from the input data.
 * @param {Object}
 * @return {DOM Element}
 */
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

/* Create the config object for infinite-divs 
 * which keeps 1 additional view as buffer.
 * Create a new instance of the infinite-divs with it
 */
let dataArray = inputData;

let config = {
  bufferMultiplier: 2,
  dataArray,
  divGenerator,
  divHeight: 90,
  rootElement
};

let infinitedivs = new infiniteDivs(config);

/* Attach the infinite-divs viewDoctor method 
 * call to scroll event listener of the page.
 */
function scrollListener() {
  infinitedivs.viewDoctor();
};

document.addEventListener('scroll', scrollListener);
