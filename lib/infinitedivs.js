"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Infinite Divs Class
 * takes an input config
 * loads the first view + buffer
 * on inititalization.
 * exposes a viewDoctor fn
 * which can be attached to an eventListener
 * to maintain and update elements in the DOM.
 * @param {Object}
 */

var InfiniteDivs = function () {

  /* initialize the class with the config 
   * and generate the first view with buffer
   */

  function InfiniteDivs(config) {
    _classCallCheck(this, InfiniteDivs);

    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView();
  }

  /* iterate over the data
   * and create the dom elements
   * using the divGenerator function.
   * append these nodes to rootElement
   */


  _createClass(InfiniteDivs, [{
    key: "appendNodes",
    value: function appendNodes(nodeList) {
      var config = this.config,
          parent = config.rootElement,
          docfrag = document.createDocumentFragment();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          var div = config.divGenerator(value);
          docfrag.appendChild(div);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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

  }, {
    key: "generateView",
    value: function generateView() {
      var config = this.config,
          bufferMultiplier = config.bufferMultiplier,
          nodeHeight = config.divHeight,
          lastNodeIndex = this.lastNodeIndex,
          dataArray = config.dataArray;

      if (lastNodeIndex < dataArray.length) {
        var visibleNodesNumber = Math.ceil(window.innerHeight / nodeHeight),
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

  }, {
    key: "viewDoctor",
    value: function viewDoctor() {
      var config = this.config,
          parentNode = config.rootElement;

      var bufferConsumed = parentNode.scrollHeight <= parentNode.scrollTop + parentNode.clientHeight * config.bufferMultiplier ? true : false;

      if (bufferConsumed) this.generateView();
    }
  }]);

  return InfiniteDivs;
}();

exports.default = InfiniteDivs;