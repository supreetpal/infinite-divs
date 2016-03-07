/* Infinite Divs Class
 * takes an input config
 * loads the first view + buffer
 * on inititalization.
 * exposes a viewDoctor fn
 * which can be attached to an eventListener
 * to maintain and update elements in the DOM.
 * @param {Object}
 */
class InfiniteDivs {

  /* initialize the class with the config 
   * and generate the first view with buffer
   */
  constructor(config) {
    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView();
  }

  /* iterate over the data
   * and create the dom elements
   * using the divGenerator function.
   * append these nodes to rootElement
   */
  appendNodes(nodeList) {
    let config = this.config,
      parent = config.rootElement,
      docfrag = document.createDocumentFragment();

    for (let value of nodeList) {
      let div = config.divGenerator(value);
      docfrag.appendChild(div);
    }

    parent.appendChild(docfrag);
  }

  /* check if there is data
   * which has not been consumed.
   * slice the data based on the
   * last consumed data index
   * and the number of dom nodes 
   * required by the view + buffer.
   * call the appendNodes fn.
   * update the last consumed data index.
   */
  generateView() {
    let config = this.config,
      bufferMultiplier = config.bufferMultiplier,
      nodeHeight = config.divHeight,
      lastNodeIndex = this.lastNodeIndex,
      dataArray = config.dataArray;

    if (lastNodeIndex < dataArray.length) {
      let visibleNodesNumber = Math.ceil(window.innerHeight / nodeHeight),
        nodesRequiredNumber = visibleNodesNumber * bufferMultiplier,
        newLastNodeIndex = lastNodeIndex + nodesRequiredNumber,
        requiredNodeList = dataArray.slice(lastNodeIndex, newLastNodeIndex);

      this.appendNodes(requiredNodeList);
      this.lastNodeIndex = Math.min(newLastNodeIndex, dataArray.length);
    }
  }

  /* check if the number of nodes
   * required in the view buffer
   * is lower than the config value.
   * nodes in the view buffer will be 
   * 2 times the nodes in view if
   * bufferMultiplier is 3.
   */
  viewDoctor() {
    let config = this.config,
      parentNode = config.rootElement;

    let bufferConsumed = parentNode.scrollHeight <=
      parentNode.scrollTop + (parentNode.clientHeight) * config.bufferMultiplier ?
      true : false;

    if (bufferConsumed) this.generateView();
  }
}

export default InfiniteDivs;
