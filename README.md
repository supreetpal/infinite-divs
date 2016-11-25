# infinite-divs

Render a very long list of complex div containers incrementally. 
See [Demo](http://supreetpal.in/infinite-divs)

# How to use

` npm install infinite-divs `

- Create the config object.
- Create a new instance initiated using the config.
- Attach the viewDoctor method call to the scroll event listener. 

```
import infiniteDivs from 'infinite-divs';

let infinitedivs = new infiniteDi-vs(config);

function scrollListener() {
  infinitedivs.viewDoctor();
};

document.addEventListener('scroll', scrollListener);

```

# Configuration

This module requires a configuration object to initiate and render the 
div containers. 

The configuration object requires the following parameters:

- bufferMultiplier: [Number] 
This value is multiplied to the number of nodes that can fit in the viewable 
region. The result specifies the amount of content to be loaded. 

- dataArray: [Array] 
Contains an array of data to be fed in to the divGenerator for each div.

- divGenerator: [Function] 
Function that is called for each element of the dataArray and converts it to 
a DOM Element.

- divHeight: [Number] 
Specifies the height of each DOM Element that is created by the divGenerator
in pixels.

- rootElement: [DOM Element] 
Contains the element to which generated elements should be added as children.
