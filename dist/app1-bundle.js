webpackJsonp([0],{

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

	var _ServiceDetail = __webpack_require__(171);

	var _ServiceDetail2 = _interopRequireDefault(_ServiceDetail);

	var _BottomApp = __webpack_require__(196);

	var _BottomApp2 = _interopRequireDefault(_BottomApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Detail from './Detail.jsx'
	// import Service from './Service.jsx'

	var App = (function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
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

	  return App;
	})(_react.Component);

	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('main'));

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Detail = __webpack_require__(172);

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

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DetailRow = __webpack_require__(173);

	var _DetailRow2 = _interopRequireDefault(_DetailRow);

	var _detail = __webpack_require__(175);

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
	        'div',
	        { id: 'detail' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'header',
	            { className: 'col-12' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              '服務特色'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'detail-items' },
	            detailRows
	          )
	        )
	      );
	    }
	  }]);

	  return Detail;
	})(_react.Component);

	exports.default = Detail;

/***/ },

/***/ 173:
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

	var DetailRow2 = (function (_Component) {
	  _inherits(DetailRow2, _Component);

	  function DetailRow2() {
	    _classCallCheck(this, DetailRow2);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DetailRow2).apply(this, arguments));
	  }

	  _createClass(DetailRow2, [{
	    key: 'render',
	    value: function render() {
	      var imageSrc = 'img/detail0' + this.props.index + '.png';
	      var actionPreviousClass = (0, _classnames2.default)('detail-action-previous', {
	        'show': this.props.index !== 1
	      });
	      var actionNextClass = (0, _classnames2.default)('detail-action-next', {
	        'show': this.props.index !== this.props.length
	      });
	      var detailItemClass = (0, _classnames2.default)('detail-item', {
	        'pull-right': this.props.index !== 1
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: detailItemClass },
	        _react2.default.createElement(
	          'div',
	          { className: 'detail-item-row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'detail-item-image' },
	            _react2.default.createElement('img', { src: imageSrc })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'detail-item-title' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '0',
	                this.props.index,
	                '.'
	              ),
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
	              'p',
	              null,
	              this.props.item.content
	            )
	          ),
	          _react2.default.createElement('div', { className: 'detail-item-end' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'detail-action' },
	          _react2.default.createElement(
	            'span',
	            { className: actionPreviousClass, onClick: this.actionPreviousOnClick.bind(this) },
	            _react2.default.createElement(
	              'span',
	              { className: 'arrow' },
	              ' ＜＜ '
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Previous'
	            )
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: actionNextClass, onClick: this.actionNextOnClick.bind(this) },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Next'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'arrow' },
	              ' ＞＞ '
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'actionPreviousOnClick',
	    value: function actionPreviousOnClick() {
	      var detailItems = $('.detail-item');
	      var currentItem = detailItems.get(this.props.index - 1);
	      var previousItem = detailItems.get(this.props.index - 2);

	      $(currentItem).addClass('pull-right');
	      $(previousItem).removeClass('pull-left');
	    }
	  }, {
	    key: 'actionNextOnClick',
	    value: function actionNextOnClick() {
	      var detailItems = $('.detail-item');
	      var currentItem = detailItems.get(this.props.index - 1);
	      var nextItem = detailItems.get(this.props.index);

	      $(currentItem).addClass('pull-left');
	      $(nextItem).removeClass('pull-right');
	    }
	  }]);

	  return DetailRow2;
	})(_react.Component);

	exports.default = DetailRow2;

	DetailRow2.propTypes = {
	  index: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.object.isRequired, /* { title, content } */
	  length: _react.PropTypes.number.isRequired
	};

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./detail.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./detail.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, "#detail {\n  height: 380px;\n}\n\n#detail > .container {\n  overflow: hidden;\n}\n\n/**\n *  Version1\n */\n/*.detail-table {\n  position: relative;\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.detail-row {\n  position: relative;\n  display: table-row;\n  width: 100%;\n  color: white;\n}\n\n.detail-row > div {\n  position: relative;\n  z-index: 1;\n  display: table-cell;\n  width: 33.3%;\n  height: 260px;\n  padding: 0px 30px;\n  vertical-align: middle;\n}\n\n.detail-item-title {\n  background-color: rgba(58, 128, 123, 1);\n}\n\n.detail-item-content {\n  background-color: rgba(105, 186, 177, 1);\n}\n\n.detail-item-image {\n  position: absolute;\n  display: block;\n  z-index: 0;\n  top: 0;\n  left: 33.3%;\n  width: 33.3%;\n  height: 260px;\n  padding: 10px;\n  text-align: center;\n  background-color: white;\n\n  -webkit-transition: left 0.5s ease-in-out;\n  -moz-transition: left 0.5s ease-in-out;\n  -ms-transition: left 0.5s ease-in-out;\n  -o-transition: left 0.5s ease-in-out;\n  transition: left 0.5s ease-in-out;\n}\n\n.detail-item-image > img {\n  max-width: 100%;\n  width: auto;\n  max-height: 100%;\n  height: auto;\n}\n\n.detail-item-image.show-left {\n  left: 0%;\n}\n\n.detail-item-image.show-right {\n  left: 66.6%;\n}*/\n\n/**\n *  Version2\n */\n#detail .detail-items {\n  position: relative;\n}\n\n#detail .detail-item {\n  position: absolute;\n  display: table;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n#detail .detail-item-row {\n  display: table-row;\n}\n\n#detail .detail-item-row > div {\n  display: table-cell;\n  height: 200px;\n  vertical-align: middle;\n}\n\n#detail .detail-item-image {\n  width: 20%;\n  padding: 20px;\n  text-align: center;\n  background-color: white;\n}\n\n#detail .detail-item-image img {\n  max-width: 100%;\n  width: auto;\n  max-height: 100%;\n  height: auto;\n}\n\n#detail .detail-item-title {\n  width: 25%;\n  text-align: center;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-item-content {\n  width: 40%;\n  padding: 0px 40px;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-item-end {\n  width: 15%;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-action {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n#detail .detail-action > span {\n  cursor: pointer;\n  margin: 0 10px;\n}\n\n#detail .detail-action .detail-action-previous,\n#detail .detail-action .detail-action-next {\n  display: none;\n}\n\n#detail .detail-action .detail-action-previous.show,\n#detail .detail-action .detail-action-next.show {\n  display: inline-block;\n}\n\n#detail .pull-left {\n  left: -200%;\n}\n\n#detail .pull-right {\n  left: 100%;\n}\n\n\n/*************************/\n/*      Responsive       */\n/*************************/\n\n/* 768px - 959px */\n@media only screen and (max-width: 959px) {\n  /*.detail-table {\n    margin-bottom: 10px;\n  }\n  .detail-row > div {\n    width: 50%;\n  }\n  .detail-row > div.prefix,\n  .detail-row > div.postfix {\n    display: none;\n  }\n  .detail-item-image {\n    display: none;\n  }*/\n}\n\n/* 480px - 767px */\n@media only screen and (max-width: 767px) {\n  #detail {\n    height: auto;\n    padding-bottom: 40px;\n  }\n\n  #detail .detail-item {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: 10px auto;\n  }\n\n  #detail .detail-item-row {\n    height: auto;\n  }\n\n  #detail .detail-action {\n    display: none;\n  }\n\n  #detail .pull-left,\n  #detail .pull-right {\n    left: auto;\n  }\n\n  #detail .detail-item-image {\n    width: 30%\n  }\n\n  #detail .detail-item-title {\n    width: 30%;\n  }\n\n  #detail .detail-item-content {\n    width: 40%;\n    padding: 0px 15px;\n  }\n\n  #detail .detail-item-end {\n    width: 0%;\n  }\n}\n\n/* 320px - 479px */\n@media only screen and (max-width: 479px) {\n\n}\n", ""]);

	// exports


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactInlinesvg = __webpack_require__(178);

	var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

	var _service = __webpack_require__(193);

	var _service2 = _interopRequireDefault(_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Service = (function (_Component) {
	  _inherits(Service, _Component);

	  function Service() {
	    _classCallCheck(this, Service);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }

	  _createClass(Service, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'service' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'header',
	            { className: 'col-12' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              '服務項目'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'full-container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'left-block' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-4' },
	              _react2.default.createElement(
	                'div',
	                { className: 'service-image' },
	                _react2.default.createElement(_reactInlinesvg2.default, { src: 'img/service01.svg' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'service-title' },
	                _react2.default.createElement(
	                  'h2',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    '超商洗衣'
	                  ),
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'subtitle' },
	                    '24小時送洗'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'service-content' },
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '服務據點：',
	                  _react2.default.createElement('br', null),
	                  '全台灣全家 / OK / 萊爾富便利商店'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '送洗品項：',
	                  _react2.default.createElement('br', null),
	                  '人身穿著類（不含皮衣皮草）',
	                  _react2.default.createElement('br', null),
	                  '床寢類'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'right-block' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-4' },
	              _react2.default.createElement(
	                'div',
	                { className: 'service-image' },
	                _react2.default.createElement(_reactInlinesvg2.default, { src: 'img/service02.svg' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'service-title' },
	                _react2.default.createElement(
	                  'h2',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    '到府收送'
	                  ),
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'subtitle' },
	                    '09:00a.m. - 09:00p.m.'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'service-content' },
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '人身穿著：',
	                  _react2.default.createElement('br', null),
	                  '穿著織物類 / 床寢織物類 / ',
	                  _react2.default.createElement('br', null),
	                  '禮服類 / 其他類 ',
	                  _react2.default.createElement('br', null)
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  '精品洗滌：',
	                  _react2.default.createElement('br', null),
	                  '包包 / 皮衣 / 鞋子'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'footer',
	          { className: 'container' },
	          _react2.default.createElement(
	            'span',
	            { className: 'button' },
	            '加入會員'
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'button' },
	            '線上儲值'
	          )
	        )
	      );
	    }
	  }]);

	  return Service;
	})(_react.Component);

	exports.default = Service;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var InlineSVGError, PropTypes, React, Status, configurationError, createError, delay, getHash, http, httpplease, ieXDomain, isSupportedEnvironment, me, once, span, supportsInlineSVG, uniquifyIDs, unsupportedBrowserError,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	React = __webpack_require__(1);

	once = __webpack_require__(179);

	httpplease = __webpack_require__(181);

	ieXDomain = __webpack_require__(191);

	PropTypes = React.PropTypes;

	span = React.DOM.span;

	http = httpplease.use(ieXDomain);

	Status = {
	  PENDING: 'pending',
	  LOADING: 'loading',
	  LOADED: 'loaded',
	  FAILED: 'failed',
	  UNSUPPORTED: 'unsupported'
	};

	supportsInlineSVG = once(function() {
	  var div;
	  if (!document) {
	    return false;
	  }
	  div = document.createElement('div');
	  div.innerHTML = '<svg />';
	  return div.firstChild && div.firstChild.namespaceURI === 'http://www.w3.org/2000/svg';
	});

	delay = function(fn) {
	  return function() {
	    var args, newFunc;
	    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    newFunc = function() {
	      return fn.apply(null, args);
	    };
	    setTimeout(newFunc, 0);
	  };
	};

	isSupportedEnvironment = once(function() {
	  return ((typeof window !== "undefined" && window !== null ? window.XMLHttpRequest : void 0) || (typeof window !== "undefined" && window !== null ? window.XDomainRequest : void 0)) && supportsInlineSVG();
	});

	uniquifyIDs = (function() {
	  var idPattern, mkAttributePattern;
	  mkAttributePattern = function(attr) {
	    return "(?:(?:\\s|\\:)" + attr + ")";
	  };
	  idPattern = RegExp("(?:(" + (mkAttributePattern('id')) + ")=\"([^\"]+)\")|(?:(" + (mkAttributePattern('href')) + "|" + (mkAttributePattern('role')) + "|" + (mkAttributePattern('arcrole')) + ")=\"\\#([^\"]+)\")|(?:=\"url\\(\\#([^\\)]+)\\)\")", "g");
	  return function(svgText, svgID) {
	    var uniquifyID;
	    uniquifyID = function(id) {
	      return "" + id + "___" + svgID;
	    };
	    return svgText.replace(idPattern, function(m, p1, p2, p3, p4, p5) {
	      if (p2) {
	        return "" + p1 + "=\"" + (uniquifyID(p2)) + "\"";
	      } else if (p4) {
	        return "" + p3 + "=\"#" + (uniquifyID(p4)) + "\"";
	      } else if (p5) {
	        return "=\"url(#" + (uniquifyID(p5)) + ")\"";
	      }
	    });
	  };
	})();

	getHash = function(str) {
	  var chr, hash, i, _i, _ref;
	  hash = 0;
	  if (!str) {
	    return hash;
	  }
	  for (i = _i = 0, _ref = str.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	    chr = str.charCodeAt(i);
	    hash = (hash << 5) - hash + chr;
	    hash = hash & hash;
	  }
	  return hash;
	};

	InlineSVGError = (function(_super) {
	  __extends(InlineSVGError, _super);

	  InlineSVGError.prototype.name = 'InlineSVGError';

	  InlineSVGError.prototype.isSupportedBrowser = true;

	  InlineSVGError.prototype.isConfigurationError = false;

	  InlineSVGError.prototype.isUnsupportedBrowserError = false;

	  function InlineSVGError(message) {
	    this.message = message;
	  }

	  return InlineSVGError;

	})(Error);

	createError = function(message, attrs) {
	  var err, k, v;
	  err = new InlineSVGError(message);
	  for (k in attrs) {
	    if (!__hasProp.call(attrs, k)) continue;
	    v = attrs[k];
	    err[k] = v;
	  }
	  return err;
	};

	unsupportedBrowserError = function(message) {
	  if (message == null) {
	    message = 'Unsupported Browser';
	  }
	  return createError(message, {
	    isSupportedBrowser: false,
	    isUnsupportedBrowserError: true
	  });
	};

	configurationError = function(message) {
	  return createError(message, {
	    isConfigurationError: true
	  });
	};

	module.exports = me = React.createClass({
	  statics: {
	    Status: Status
	  },
	  displayName: 'InlineSVG',
	  propTypes: {
	    wrapper: PropTypes.func,
	    src: PropTypes.string.isRequired,
	    className: PropTypes.string,
	    preloader: PropTypes.func,
	    onLoad: PropTypes.func,
	    onError: PropTypes.func,
	    supportTest: PropTypes.func,
	    uniquifyIDs: PropTypes.bool
	  },
	  getDefaultProps: function() {
	    return {
	      wrapper: span,
	      supportTest: isSupportedEnvironment,
	      uniquifyIDs: true
	    };
	  },
	  getInitialState: function() {
	    return {
	      status: Status.PENDING
	    };
	  },
	  componentDidMount: function() {
	    if (this.state.status !== Status.PENDING) {
	      return;
	    }
	    if (this.props.supportTest()) {
	      if (this.props.src) {
	        return this.setState({
	          status: Status.LOADING
	        }, this.load);
	      } else {
	        return delay((function(_this) {
	          return function() {
	            return _this.fail(configurationError('Missing source'));
	          };
	        })(this))();
	      }
	    } else {
	      return delay((function(_this) {
	        return function() {
	          return _this.fail(unsupportedBrowserError());
	        };
	      })(this))();
	    }
	  },
	  fail: function(error) {
	    var status;
	    status = error.isUnsupportedBrowserError ? Status.UNSUPPORTED : Status.FAILED;
	    return this.setState({
	      status: status
	    }, (function(_this) {
	      return function() {
	        var _base;
	        return typeof (_base = _this.props).onError === "function" ? _base.onError(error) : void 0;
	      };
	    })(this));
	  },
	  handleLoad: function(err, res) {
	    if (err) {
	      return this.fail(err);
	    }
	    if (!this.isMounted()) {
	      return;
	    }
	    return this.setState({
	      loadedText: res.text,
	      status: Status.LOADED
	    }, (function(_this) {
	      return function() {
	        var _base;
	        return typeof (_base = _this.props).onLoad === "function" ? _base.onLoad() : void 0;
	      };
	    })(this));
	  },
	  load: function() {
	    var m, text;
	    if (m = this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/)) {
	      text = m[1] ? atob(m[2]) : decodeURIComponent(m[2]);
	      return this.handleLoad(null, {
	        text: text
	      });
	    } else {
	      return http.get(this.props.src, this.handleLoad);
	    }
	  },
	  getClassName: function() {
	    var className;
	    className = "isvg " + this.state.status;
	    if (this.props.className) {
	      className += " " + this.props.className;
	    }
	    return className;
	  },
	  render: function() {
	    return this.props.wrapper({
	      className: this.getClassName(),
	      dangerouslySetInnerHTML: this.state.loadedText ? {
	        __html: this.processSVG(this.state.loadedText)
	      } : void 0
	    }, this.renderContents());
	  },
	  processSVG: function(svgText) {
	    if (this.props.uniquifyIDs) {
	      return uniquifyIDs(svgText, getHash(this.props.src));
	    } else {
	      return svgText;
	    }
	  },
	  renderContents: function() {
	    switch (this.state.status) {
	      case Status.UNSUPPORTED:
	        return this.props.children;
	      case Status.PENDING:
	      case Status.LOADING:
	        if (this.props.preloader) {
	          return new this.props.preloader;
	        }
	    }
	  }
	});


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	var wrappy = __webpack_require__(180)
	module.exports = wrappy(once)

	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  })
	})

	function once (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true
	    return f.value = fn.apply(this, arguments)
	  }
	  f.called = false
	  return f
	}


/***/ },

/***/ 180:
/***/ function(module, exports) {

	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	module.exports = wrappy
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)

	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')

	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k]
	  })

	  return wrapper

	  function wrapper() {
	    var args = new Array(arguments.length)
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	    var ret = fn.apply(this, args)
	    var cb = args[args.length-1]
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k]
	      })
	    }
	    return ret
	  }
	}


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var
	  cleanURL = __webpack_require__(182),
	  XHR = __webpack_require__(183),
	  delay = __webpack_require__(184),
	  RequestError = __webpack_require__(185),
	  Response = __webpack_require__(186),
	  Request = __webpack_require__(187),
	  extend = __webpack_require__(189),
	  once = __webpack_require__(190);

	var i,
	    createError = RequestError.create;

	function factory(defaults, plugins) {
	  defaults = defaults || {};
	  plugins = plugins || [];

	  function http(req, cb) {
	    var xhr, plugin, done, k, timeoutId, supportsLoadAndErrorEvents;

	    req = new Request(extend(defaults, req));

	    for (i = 0; i < plugins.length; i++) {
	      plugin = plugins[i];
	      if (plugin.processRequest) {
	        plugin.processRequest(req);
	      }
	    }

	    // Give the plugins a chance to create the XHR object
	    for (i = 0; i < plugins.length; i++) {
	      plugin = plugins[i];
	      if (plugin.createXHR) {
	        xhr = plugin.createXHR(req);
	        break; // First come, first serve
	      }
	    }
	    xhr = xhr || new XHR();

	    req.xhr = xhr;

	    // Use a single completion callback. This can be called with or without
	    // an error. If no error is passed, the request will be examined to see
	    // if it was successful.
	    done = once(delay(function(rawError) {
	      clearTimeout(timeoutId);
	      xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = xhr.ontimeout = xhr.onprogress = null;

	      var err = getError(req, rawError);

	      var res = err || Response.fromRequest(req);
	      for (i = 0; i < plugins.length; i++) {
	        plugin = plugins[i];
	        if (plugin.processResponse) {
	          plugin.processResponse(res);
	        }
	      }

	      // Invoke callbacks
	      if (err && req.onerror) req.onerror(err);
	      if (!err && req.onload) req.onload(res);
	      if (cb) cb(err, err ? undefined : res);

	    }));

	    supportsLoadAndErrorEvents = ('onload' in xhr) && ('onerror' in xhr);
	    xhr.onload = function() { done(); };
	    xhr.onerror = done;
	    xhr.onabort = function() { done(); };

	    // We'd rather use `onload`, `onerror`, and `onabort` since they're the
	    // only way to reliably detect successes and failures but, if they
	    // aren't available, we fall back to using `onreadystatechange`.
	    xhr.onreadystatechange = function() {
	      if (xhr.readyState !== 4) return;

	      if (req.aborted) return done();

	      if (!supportsLoadAndErrorEvents) {
	        // Assume a status of 0 is an error. This could be a false
	        // positive, but there's no way to tell when using
	        // `onreadystatechange` ):
	        // See matthewwithanm/react-inlinesvg#10.

	        // Some browsers don't like you reading XHR properties when the
	        // XHR has been aborted. In case we've gotten here as a result
	        // of that (either our calling `about()` in the timeout handler
	        // or the user calling it directly even though they shouldn't),
	        // be careful about accessing it.
	        var status;
	        try {
	          status = xhr.status;
	        } catch (err) {}
	        var err = status === 0 ? new Error('Internal XHR Error') : null;
	        return done(err);
	      }
	    };

	    // IE sometimes fails if you don't specify every handler.
	    // See http://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
	    xhr.ontimeout = function() { /* noop */ };
	    xhr.onprogress = function() { /* noop */ };

	    xhr.open(req.method, req.url);

	    if (req.timeout) {
	      // If we use the normal XHR timeout mechanism (`xhr.timeout` and
	      // `xhr.ontimeout`), `onreadystatechange` will be triggered before
	      // `ontimeout`. There's no way to recognize that it was triggered by
	      // a timeout, and we'd be unable to dispatch the right error.
	      timeoutId = setTimeout(function() {
	        req.timedOut = true;
	        done();
	        try {
	          xhr.abort();
	        } catch (err) {}
	      }, req.timeout);
	    }

	    for (k in req.headers) {
	      if (req.headers.hasOwnProperty(k)) {
	        xhr.setRequestHeader(k, req.headers[k]);
	      }
	    }

	    xhr.send(req.body);

	    return req;
	  }

	  var method,
	    methods = ['get', 'post', 'put', 'head', 'patch', 'delete'],
	    verb = function(method) {
	      return function(req, cb) {
	        req = new Request(req);
	        req.method = method;
	        return http(req, cb);
	      };
	    };
	  for (i = 0; i < methods.length; i++) {
	    method = methods[i];
	    http[method] = verb(method);
	  }

	  http.plugins = function() {
	    return plugins;
	  };

	  http.defaults = function(newValues) {
	    if (newValues) {
	      return factory(extend(defaults, newValues), plugins);
	    }
	    return defaults;
	  };

	  http.use = function() {
	    var newPlugins = Array.prototype.slice.call(arguments, 0);
	    return factory(defaults, plugins.concat(newPlugins));
	  };

	  http.bare = function() {
	    return factory();
	  };

	  http.Request = Request;
	  http.Response = Response;
	  http.RequestError = RequestError;

	  return http;
	}

	module.exports = factory({}, [cleanURL]);

	/**
	 * Analyze the request to see if it represents an error. If so, return it! An
	 * original error object can be passed as a hint.
	 */
	function getError(req, err) {
	  if (req.aborted) return createError('Request aborted', req, {name: 'Abort'});

	  if (req.timedOut) return createError('Request timeout', req, {name: 'Timeout'});

	  var xhr = req.xhr;
	  var type = Math.floor(xhr.status / 100);

	  var kind;
	  switch (type) {
	    case 0:
	    case 2:
	      // These don't represent errors unless the function was passed an
	      // error object explicitly.
	      if (!err) return;
	      return createError(err.message, req);
	    case 4:
	      // Sometimes 4XX statuses aren't errors.
	      if (xhr.status === 404 && !req.errorOn404) return;
	      kind = 'Client';
	      break;
	    case 5:
	      kind = 'Server';
	      break;
	    default:
	      kind = 'HTTP';
	  }
	  var msg = kind + ' Error: ' +
	        'The server returned a status of ' + xhr.status +
	        ' for the request "' +
	        req.method.toUpperCase() + ' ' + req.url + '"';
	  return createError(msg, req);
	}


/***/ },

/***/ 182:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  processRequest: function(req) {
	    req.url = req.url.replace(/[^%]+/g, function(s) {
	      return encodeURI(s);
	    });
	  }
	};


/***/ },

/***/ 183:
/***/ function(module, exports) {

	module.exports = window.XMLHttpRequest;


/***/ },

/***/ 184:
/***/ function(module, exports) {

	'use strict';

	// Wrap a function in a `setTimeout` call. This is used to guarantee async
	// behavior, which can avoid unexpected errors.

	module.exports = function(fn) {
	  return function() {
	    var
	      args = Array.prototype.slice.call(arguments, 0),
	      newFunc = function() {
	        return fn.apply(null, args);
	      };
	    setTimeout(newFunc, 0);
	  };
	};


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Response = __webpack_require__(186);
	var extractResponseProps = __webpack_require__(188);
	var extend = __webpack_require__(189);

	function RequestError(message, props) {
	  var err = new Error(message);
	  err.name = 'RequestError';
	  this.name = err.name;
	  this.message = err.message;
	  if (err.stack) {
	    this.stack = err.stack;
	  }

	  this.toString = function() {
	    return this.message;
	  };

	  for (var k in props) {
	    if (props.hasOwnProperty(k)) {
	      this[k] = props[k];
	    }
	  }
	}

	RequestError.prototype = extend(Error.prototype);
	RequestError.prototype.constructor = RequestError;

	RequestError.create = function(message, req, props) {
	  var err = new RequestError(message, props);
	  Response.call(err, extractResponseProps(req));
	  return err;
	};

	module.exports = RequestError;


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Request = __webpack_require__(187);
	var extractResponseProps = __webpack_require__(188);

	function Response(props) {
	  this.request = props.request;
	  this.xhr = props.xhr;
	  this.headers = props.headers || {};
	  this.status = props.status || 0;
	  this.text = props.text;
	  this.body = props.body;
	  this.contentType = props.contentType;
	  this.isHttpError = props.status >= 400;
	}

	Response.prototype.header = Request.prototype.header;

	Response.fromRequest = function(req) {
	  return new Response(extractResponseProps(req));
	};


	module.exports = Response;


/***/ },

/***/ 187:
/***/ function(module, exports) {

	'use strict';

	function Request(optsOrUrl) {
	  var opts = typeof optsOrUrl === 'string' ? {url: optsOrUrl} : optsOrUrl || {};
	  this.method = opts.method ? opts.method.toUpperCase() : 'GET';
	  this.url = opts.url;
	  this.headers = opts.headers || {};
	  this.body = opts.body;
	  this.timeout = opts.timeout || 0;
	  this.errorOn404 = opts.errorOn404 != null ? opts.errorOn404 : true;
	  this.onload = opts.onload;
	  this.onerror = opts.onerror;
	}

	Request.prototype.abort = function() {
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  return this;
	};

	Request.prototype.header = function(name, value) {
	  var k;
	  for (k in this.headers) {
	    if (this.headers.hasOwnProperty(k)) {
	      if (name.toLowerCase() === k.toLowerCase()) {
	        if (arguments.length === 1) {
	          return this.headers[k];
	        }

	        delete this.headers[k];
	        break;
	      }
	    }
	  }
	  if (value != null) {
	    this.headers[name] = value;
	    return value;
	  }
	};


	module.exports = Request;


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var extend = __webpack_require__(189);

	module.exports = function(req) {
	  var xhr = req.xhr;
	  var props = {request: req, xhr: xhr};

	  // Try to create the response from the request. If the request was aborted,
	  // accesssing properties of the XHR may throw an error, so we wrap in a
	  // try/catch.
	  try {
	    var lines, i, m, headers = {};
	    if (xhr.getAllResponseHeaders) {
	      lines = xhr.getAllResponseHeaders().split('\n');
	      for (i = 0; i < lines.length; i++) {
	        if ((m = lines[i].match(/\s*([^\s]+):\s+([^\s]+)/))) {
	          headers[m[1]] = m[2];
	        }
	      }
	    }

	    props = extend(props, {
	      status: xhr.status,
	      contentType: xhr.contentType || (xhr.getResponseHeader && xhr.getResponseHeader('Content-Type')),
	      headers: headers,
	      text: xhr.responseText,
	      body: xhr.response || xhr.responseText
	    });
	  } catch (err) {}

	  return props;
	};


/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = extend

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },

/***/ 190:
/***/ function(module, exports) {

	'use strict';

	// A "once" utility.
	module.exports = function(fn) {
	  var result, called = false;
	  return function() {
	    if (!called) {
	      called = true;
	      result = fn.apply(this, arguments);
	    }
	    return result;
	  };
	};


/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var
	  urllite = __webpack_require__(192),
	  once = __webpack_require__(190);

	var warningShown = false;

	var supportsXHR = once(function() {
	  return (
	    typeof window !== 'undefined' &&
	    window !== null &&
	    window.XMLHttpRequest &&
	    'withCredentials' in new window.XMLHttpRequest()
	  );
	});

	// This plugin creates a Microsoft `XDomainRequest` in supporting browsers when
	// the URL being requested is on a different domain. This is necessary to
	// support IE9, which only supports CORS via its proprietary `XDomainRequest`
	// object. We need to check the URL because `XDomainRequest` *doesn't* work for
	// same domain requests (unless your server sends CORS headers).
	// `XDomainRequest` also has other limitations (no custom headers), so we try to
	// catch those and error.
	module.exports = {
	  createXHR: function(req) {
	    var a, b, k;

	    if (typeof window === 'undefined' || window === null) {
	      return;
	    }

	    a = urllite(req.url);
	    b = urllite(window.location.href);

	    // Don't do anything for same-domain requests.
	    if (!a.host) {
	      return;
	    }
	    if (a.protocol === b.protocol && a.host === b.host && a.port === b.port) {
	      return;
	    }

	    // Show a warning if there are custom headers. We do this even in
	    // browsers that won't use XDomainRequest so that users know there's an
	    // issue right away, instead of if/when they test in IE9.
	    if (!warningShown && req.headers) {
	      for (k in req.headers) {
	        if (req.headers.hasOwnProperty(k)) {
	          warningShown = true;
	          if (window && window.console && window.console.warn) {
	            window.console.warn('Request headers are ignored in old IE when using the oldiexdomain plugin.');
	          }
	          break;
	        }
	      }
	    }

	    // Don't do anything if we can't do anything (:
	    // Don't do anything if the browser supports proper XHR.
	    if (window.XDomainRequest && !supportsXHR()) {
	      // We've come this far. Might as well make an XDomainRequest.
	      var xdr = new window.XDomainRequest();
	      xdr.setRequestHeader = function() {}; // Ignore request headers.
	      return xdr;
	    }
	  }
	};


/***/ },

/***/ 192:
/***/ function(module, exports) {

	(function() {
	  var URL, URL_PATTERN, defaults, urllite,
	    __hasProp = {}.hasOwnProperty;

	  URL_PATTERN = /^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/;

	  urllite = function(raw, opts) {
	    return urllite.URL.parse(raw, opts);
	  };

	  urllite.URL = URL = (function() {
	    function URL(props) {
	      var k, v, _ref;
	      for (k in defaults) {
	        if (!__hasProp.call(defaults, k)) continue;
	        v = defaults[k];
	        this[k] = (_ref = props[k]) != null ? _ref : v;
	      }
	      this.host || (this.host = this.hostname && this.port ? "" + this.hostname + ":" + this.port : this.hostname ? this.hostname : '');
	      this.origin || (this.origin = this.protocol ? "" + this.protocol + "//" + this.host : '');
	      this.isAbsolutePathRelative = !this.host && this.pathname.charAt(0) === '/';
	      this.isPathRelative = !this.host && this.pathname.charAt(0) !== '/';
	      this.isRelative = this.isSchemeRelative || this.isAbsolutePathRelative || this.isPathRelative;
	      this.isAbsolute = !this.isRelative;
	    }

	    URL.parse = function(raw) {
	      var m, pathname, protocol;
	      m = raw.toString().match(URL_PATTERN);
	      pathname = m[8] || '';
	      protocol = m[1];
	      return new urllite.URL({
	        protocol: protocol,
	        username: m[3],
	        password: m[4],
	        hostname: m[6],
	        port: m[7],
	        pathname: protocol && pathname.charAt(0) !== '/' ? "/" + pathname : pathname,
	        search: m[9],
	        hash: m[10],
	        isSchemeRelative: m[2] != null
	      });
	    };

	    return URL;

	  })();

	  defaults = {
	    protocol: '',
	    username: '',
	    password: '',
	    host: '',
	    hostname: '',
	    port: '',
	    pathname: '',
	    search: '',
	    hash: '',
	    origin: '',
	    isSchemeRelative: false
	  };

	  module.exports = urllite;

	}).call(this);


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(194);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./service.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./service.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports


	// module
	exports.push([module.id, "#serviceDetail {\n  background-image: url(" + __webpack_require__(195) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#serviceDetail header h1 {\n  color: rgba(74, 74, 74, 1);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\n#service {\n  padding-top: 20px;\n  padding-bottom: 60px;\n}\n\n#service .left-block,\n#service .right-block {\n  position: relative;\n  display: inline-block;\n  width: 50%;\n  height: 100%;\n  padding: 40px;\n  color: rgba(74, 74, 74, 1);\n  vertical-align:top;\n  background-color: rgba(203, 233, 228, 0.8);\n\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n#service .left-block:hover,\n#service .right-block:hover {\n  color: white;\n  background-color: rgba(105, 186, 177, 0.9);\n}\n\n#service .left-block .subtitle,\n#service .right-block .subtitle {\n  color: gray;\n}\n\n#service .left-block:hover .subtitle,\n#service .right-block:hover .subtitle {\n  color: lightgray;\n}\n\n#service .left-block {\n  text-align: right;\n}\n\n#service .right-block {\n  text-align: left;\n}\n\n#service .left-block div,\n#service .right-block div {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#service .left-block:hover svg path,\n#service .right-block:hover svg path {\n  stroke: white !important;\n\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n#service .left-block:hover path:not(:first-of-type),\n#service .right-block:hover path:not(:first-of-type) {\n  fill: white !important;\n}\n\n#service .left-block .service-image {\n  padding-top: 4px;\n}\n\n#service .service-image {\n  height: 150px;\n}\n\n#service .service-content {\n  height: 180px;\n}\n\n#service > footer {\n  margin-top: 60px;\n  text-align: right;\n}\n\n/*************************/\n/*      Responsive       */\n/*************************/\n\n/* 768px - 959px */\n@media only screen and (max-width: 959px) {\n\n}\n\n/* 480px - 767px */\n@media only screen and (max-width: 767px) {\n  #service .left-block,\n  #service .right-block {\n    display: block;\n    width: 100%;\n    margin: 20px 0px;\n    padding: 20px 0px;\n    text-align: center;\n  }\n\n  #service .service-content {\n    height: 120px;\n  }\n\n  #service > footer {\n    text-align: center;\n  }\n}\n\n/* 320px - 479px */\n@media only screen and (max-width: 479px) {\n\n}\n", ""]);

	// exports


/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc14306fc2c7b95a288450c86807d6f7.png";

/***/ }

});