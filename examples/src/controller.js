import inputData from './data.js';

let divArray = [];

for (let value of inputData) {
  let div = document.createElement('div'),
    img = document.createElement('img'),
    span = document.createElement('span');

  img.src = value.img;
  img.style = 'vertical-align: middle; width: 50px; margin: 20px';
  span.innerText = value.name;
  span.setAttribute('style', 'text-decoration: underline');
  div.appendChild(img);
  div.appendChild(span);
  divArray.push(div);
}

let body = document.getElementById('root');
body.appendChild(divArray[0]);
