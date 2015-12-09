webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _Navbar = __webpack_require__(159);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Banner = __webpack_require__(164);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Intro = __webpack_require__(167);

	var _Intro2 = _interopRequireDefault(_Intro);

	var _BottomApp = __webpack_require__(196);

	var _BottomApp2 = _interopRequireDefault(_BottomApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Detail2 from './Detail2.jsx'
	// import Service from './Service.jsx'

	var App2 = (function (_Component) {
	  _inherits(App2, _Component);

	  function App2() {
	    _classCallCheck(this, App2);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App2).apply(this, arguments));
	  }

	  _createClass(App2, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'full-container' },
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(_Banner2.default, null),
	        _react2.default.createElement(_Intro2.default, null),
	        _react2.default.createElement(Detail2, null),
	        _react2.default.createElement(Service, null),
	        _react2.default.createElement(_BottomApp2.default, null)
	      );
	    }
	  }]);

	  return App2;
	})(_react.Component);

	(0, _reactDom.render)(_react2.default.createElement(App2, null), document.getElementById('main'));

/***/ }
]);