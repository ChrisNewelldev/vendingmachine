"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valuesService = void 0;

var _SnacksState = require("../SnacksState.js");

var _Snacks = _interopRequireDefault(require("../Models/Snacks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//determines if there is enough $$
var coin = 0;

var ValuesService =
/*#__PURE__*/
function () {
  function ValuesService() {
    _classCallCheck(this, ValuesService);
  }

  _createClass(ValuesService, [{
    key: "addValue",
    value: function addValue() {
      _SnacksState.ProxyState.values = [].concat(_toConsumableArray(_SnacksState.ProxyState.values), [new _Snacks["default"]({
        title: .25
      })]);
    }
  }, {
    key: "makeCoin",
    value: function makeCoin() {
      coin = coin + .25;
      document.getElementById('coin').innerText = coin;
    }
  }]);

  return ValuesService;
}();

var valuesService = new ValuesService();
exports.valuesService = valuesService;