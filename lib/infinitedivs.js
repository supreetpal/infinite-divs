"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfiniteDivs = function () {
  function InfiniteDivs(config) {
    _classCallCheck(this, InfiniteDivs);

    this.config = config;
    this.lastNodeIndex = 0;
    this.generateView(config.divArray);
  }

  _createClass(InfiniteDivs, [{
    key: "appendNodes",
    value: function appendNodes(nodeList) {
      var config = this.config,
          parent = config.root;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          parent.appendChild(value);
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
    }
  }, {
    key: "generateView",
    value: function generateView(domList) {
      var config = this.config,
          bufferMultiplier = config.bufferMultiplier,
          nodeHeight = config.divHeight,
          lastNodeIndex = this.lastNodeIndex;

      if (lastNodeIndex < domList.length) {
        var visibleNodesNumber = Math.ceil(window.innerHeight / nodeHeight),
            nodesRequiredNumber = visibleNodesNumber * bufferMultiplier,
            requiredNodeList = domList.slice(lastNodeIndex, lastNodeIndex + nodesRequiredNumber),
            newLastNodeIndex = lastNodeIndex + nodesRequiredNumber;

        this.lastNodeIndex = Math.min(newLastNodeIndex, domList.length);
        this.appendNodes(requiredNodeList);
      }
    }
  }, {
    key: "viewDoctor",
    value: function viewDoctor() {
      var config = this.config,
          parentNode = config.root;
      // console.log(parentNode.scrollHeight, parentNode.scrollTop, parentNode.clientHeight);

      var bufferConsumed = parentNode.scrollHeight < parentNode.scrollTop + parentNode.clientHeight * config.bufferMultiplier ? true : false;

      // console.log(bufferConsumed);
      if (bufferConsumed) this.generateView(config.divArray);
    }
  }]);

  return InfiniteDivs;
}();

exports.default = InfiniteDivs;