class InfiniteDivs {

  constructor(config) {
    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView(config.divArray);
  }

  appendNodes(nodeList) {
  	let config = this.config,
  	parent = config.root;

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
        newLastNodeIndex = lastNodeIndex + nodesRequiredNumber;

      this.lastNodeIndex = Math.min(newLastNodeIndex, domList.length);
      this.appendNodes(requiredNodeList);
    }
  }

  viewDoctor() {
    let config = this.config,
    parentNode = config.root;
    // console.log(parentNode.scrollHeight, parentNode.scrollTop, parentNode.clientHeight);

    let bufferConsumed = parentNode.scrollHeight <
      parentNode.scrollTop + (parentNode.clientHeight) * config.bufferMultiplier ?
      true : false;

    // console.log(bufferConsumed);
    if (bufferConsumed) this.generateView(config.divArray);
  }
}

export default InfiniteDivs;
