class InfiniteDivs {

  constructor(config) {
    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView(config.divArray);
  }

  appendNodes(nodeList, parent) {
    for (let value of nodeList) {
      parent.appendChild(value);
    }
  }

  generateView(domList) {
    let config = this.config,
      bufferMultiplier = config.bufferMultiplier,
      nodeHeight = config.divHeight,
      lastNodeIndex = this.lastNodeIndex;

    if (lastNodeIndex < domList.length) {
      let visibleNodesNumber = Math.ceil(window.innerHeight / nodeHeight),
        nodesRequiredNumber = visibleNodesNumber * bufferMultiplier,
        requiredNodeList = domList.slice(lastNodeIndex, lastNodeIndex + nodesRequiredNumber),
        newLastNodeIndex = lastNodeIndex + nodesRequiredNumber,
        parentNode = this.config.root;

      this.lastNodeIndex = Math.min(newLastNodeIndex, domList.length);

      this.appendNodes(requiredNodeList, parentNode);
    }
  }

  viewDoctor(parentNode) {
    let config = this.config;
    console.log(parentNode.scrollHeight, parentNode.scrollTop, parentNode.clientHeight);

    let bufferConsumed = parentNode.scrollHeight <
      parentNode.scrollTop + (parentNode.clientHeight) * config.bufferMultiplier ?
      true : false;

    console.log(bufferConsumed);
    if (bufferConsumed) this.generateView(config.divArray);
  }
}

export default InfiniteDivs;
