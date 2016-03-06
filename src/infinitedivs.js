class InfiniteDivs {

  constructor(config) {
    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView();
  }

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

  viewDoctor() {
    let config = this.config,
      parentNode = config.rootElement;
    // console.log(parentNode.scrollHeight, parentNode.scrollTop, parentNode.clientHeight);

    let bufferConsumed = parentNode.scrollHeight <=
      parentNode.scrollTop + (parentNode.clientHeight) * config.bufferMultiplier ?
      true : false;

    // console.log(bufferConsumed);
    if (bufferConsumed) this.generateView();
  }
}

export default InfiniteDivs;
