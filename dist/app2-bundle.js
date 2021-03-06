webpackJsonp([1],{

/***/ 0:
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

	var _ServiceDetail = __webpack_require__(204);

	var _ServiceDetail2 = _interopRequireDefault(_ServiceDetail);

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
	        _react2.default.createElement(_ServiceDetail2.default, null),
	        _react2.default.createElement(_BottomApp2.default, null)
	      );
	    }
	  }]);

	  return App2;
	})(_react.Component);

	(0, _reactDom.render)(_react2.default.createElement(App2, null), document.getElementById('main'));

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Detail = __webpack_require__(205);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Service = __webpack_require__(177);

	var _Service2 = _interopRequireDefault(_Service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ServiceDetail = (function (_Component) {
	  _inherits(ServiceDetail, _Component);

	  function ServiceDetail() {
	    _classCallCheck(this, ServiceDetail);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ServiceDetail).apply(this, arguments));
	  }

	  _createClass(ServiceDetail, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { id: 'serviceDetail' },
	        _react2.default.createElement(_Detail2.default, null),
	        _react2.default.createElement(_Service2.default, null)
	      );
	    }
	  }]);

	  return ServiceDetail;
	})(_react.Component);

	exports.default = ServiceDetail;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DetailRow = __webpack_require__(206);

	var _DetailRow2 = _interopRequireDefault(_DetailRow);

	var _detail = __webpack_require__(207);

	var _detail2 = _interopRequireDefault(_detail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Detail = (function (_Component) {
	  _inherits(Detail, _Component);

	  function Detail(props) {
	    _classCallCheck(this, Detail);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).call(this, props));

	    _this.state = {
	      detailList: []
	    };
	    return _this;
	  }

	  _createClass(Detail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $.ajax({
	        url: 'json/detail.json',
	        dataType: 'json',
	        success: (function (data) {
	          this.setState({ detailList: data });
	        }).bind(this)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var detailListLength = this.state.detailList.length;
	      var detailRows = this.state.detailList.map(function (item, index) {
	        return _react2.default.createElement(_DetailRow2.default, { key: index, index: index + 1, item: item, length: detailListLength });
	      });
	      return _react2.default.createElement(
	        'section',
	        { id: 'detail' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          detailRows
	        )
	      );
	    }
	  }]);

	  return Detail;
	})(_react.Component);

	exports.default = Detail;

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(174);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DetailRow = (function (_Component) {
	  _inherits(DetailRow, _Component);

	  function DetailRow(props) {
	    _classCallCheck(this, DetailRow);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailRow).call(this, props));

	    _this.state = {
	      status: 0 /* 1 for left, 2 for right */
	    };
	    return _this;
	  }

	  _createClass(DetailRow, [{
	    key: 'render',
	    value: function render() {
	      /* true for left, false for right */
	      var direction = this.props.index % 2 === 0 ? true : false;
	      var prefixDiv = direction ? _react2.default.createElement('div', { className: 'prefix' }) : null;
	      var postfixDiv = direction ? null : _react2.default.createElement('div', { className: 'postfix' });

	      var imageSrc = 'img/detail0' + this.props.index + '.png';
	      var imageClassNames = (0, _classnames2.default)('detail-item-image', {
	        'show-left': this.state.status === 1 && direction,
	        'show-right': this.state.status === 2 && !direction
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'detail-table',
	          onMouseEnter: this.detailRowOnMouseEnterHandler.bind(this, direction),
	          onMouseLeave: this.detailRowOnMouseLeaveHandler.bind(this, direction) },
	        _react2.default.createElement(
	          'div',
	          { className: 'detail-row' },
	          prefixDiv,
	          _react2.default.createElement(
	            'div',
	            { className: 'detail-item-title' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '0',
	                this.props.index,
	                '.'
	              ),
	              ' ',
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'span',
	                null,
	                this.props.item.title
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'detail-item-content' },
	            _react2.default.createElement(
	              'h3',
	              null,
	              this.props.item.content
	            )
	          ),
	          postfixDiv
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: imageClassNames },
	          _react2.default.createElement('img', { src: imageSrc })
	        )
	      );
	    }
	  }, {
	    key: 'detailRowOnMouseEnterHandler',
	    value: function detailRowOnMouseEnterHandler(direction) {
	      /* direction: true for left, false for right */
	      if (direction) {
	        this.setState({ status: 1 });
	      } else {
	        this.setState({ status: 2 });
	      }
	    }
	  }, {
	    key: 'detailRowOnMouseLeaveHandler',
	    value: function detailRowOnMouseLeaveHandler(direction) {
	      /* direction: true for left, false for right */
	      this.setState({ status: 0 });
	    }
	  }]);

	  return DetailRow;
	})(_react.Component);

	exports.default = DetailRow;

	DetailRow.propTypes = {
	  index: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.object.isRequired
	};

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(208);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./detail2.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./detail2.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, "#detail {\n  background-image: url(" + __webpack_require__(209) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/**\n *  Version1\n */\n.detail-table {\n  position: relative;\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.detail-row {\n  position: relative;\n  display: table-row;\n  width: 100%;\n  color: white;\n}\n\n.detail-row > div {\n  position: relative;\n  z-index: 1;\n  display: table-cell;\n  width: 33.3%;\n  height: 260px;\n  padding: 0px 30px;\n  vertical-align: middle;\n}\n\n.detail-item-title {\n  background-color: rgba(58, 128, 123, 1);\n}\n\n.detail-item-content {\n  background-color: rgba(105, 186, 177, 1);\n}\n\n.detail-item-image {\n  position: absolute;\n  display: block;\n  z-index: 0;\n  top: 0;\n  left: 33.3%;\n  width: 33.3%;\n  height: 260px;\n  padding: 10px;\n  text-align: center;\n  background-color: white;\n\n  -webkit-transition: left 0.5s ease-in-out;\n  -moz-transition: left 0.5s ease-in-out;\n  -ms-transition: left 0.5s ease-in-out;\n  -o-transition: left 0.5s ease-in-out;\n  transition: left 0.5s ease-in-out;\n}\n\n.detail-item-image > img {\n  max-width: 100%;\n  width: auto;\n  max-height: 100%;\n  height: auto;\n}\n\n.detail-item-image.show-left {\n  left: 0%;\n}\n\n.detail-item-image.show-right {\n  left: 66.6%;\n}\n\n/* 768px - 959px */\n@media only screen and (max-width: 959px) {\n  .detail-table {\n    margin-bottom: 10px;\n  }\n  .detail-row > div {\n    width: 50%;\n  }\n  .detail-row > div.prefix,\n  .detail-row > div.postfix {\n    display: none;\n  }\n  .detail-item-image {\n    display: none;\n  }\n}\n\n/* 480px - 767px */\n@media only screen and (max-width: 767px) {\n}\n\n/* 320px - 479px */\n@media only screen and (max-width: 479px) {\n\n}\n", ""]);

	// exports


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "54c9521ab027253ee68def469d4faaf3.png";

/***/ }

});