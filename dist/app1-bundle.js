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

	var _Detail = __webpack_require__(171);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Service = __webpack_require__(178);

	var _Service2 = _interopRequireDefault(_Service);

	var _BottomApp = __webpack_require__(197);

	var _BottomApp2 = _interopRequireDefault(_BottomApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	        _react2.default.createElement(_Detail2.default, null),
	        _react2.default.createElement(_Service2.default, null),
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

	var _DetailRow = __webpack_require__(172);

	var _DetailRow2 = _interopRequireDefault(_DetailRow);

	var _DetailRow3 = __webpack_require__(174);

	var _DetailRow4 = _interopRequireDefault(_DetailRow3);

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
	        return _react2.default.createElement(_DetailRow4.default, { key: index, index: index + 1, item: item, length: detailListLength });
	      });
	      return _react2.default.createElement(
	        'section',
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

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(173);

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
	exports.push([module.id, "#detail {\n  overflow: hidden;\n  height: 500px;\n  background-image: url(" + __webpack_require__(177) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/**\n *  Version1\n */\n/*.detail-table {\n  position: relative;\n  display: table;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.detail-row {\n  position: relative;\n  display: table-row;\n  width: 100%;\n  color: white;\n}\n\n.detail-row > div {\n  position: relative;\n  z-index: 1;\n  display: table-cell;\n  width: 33.3%;\n  height: 260px;\n  padding: 0px 30px;\n  vertical-align: middle;\n}\n\n.detail-item-title {\n  background-color: rgba(58, 128, 123, 1);\n}\n\n.detail-item-content {\n  background-color: rgba(105, 186, 177, 1);\n}\n\n.detail-item-image {\n  position: absolute;\n  display: block;\n  z-index: 0;\n  top: 0;\n  left: 33.3%;\n  width: 33.3%;\n  height: 260px;\n  padding: 10px;\n  text-align: center;\n  background-color: white;\n\n  -webkit-transition: left 0.5s ease-in-out;\n  -moz-transition: left 0.5s ease-in-out;\n  -ms-transition: left 0.5s ease-in-out;\n  -o-transition: left 0.5s ease-in-out;\n  transition: left 0.5s ease-in-out;\n}\n\n.detail-item-image > img {\n  max-width: 100%;\n  width: auto;\n  max-height: 100%;\n  height: auto;\n}\n\n.detail-item-image.show-left {\n  left: 0%;\n}\n\n.detail-item-image.show-right {\n  left: 66.6%;\n}*/\n\n/**\n *  Version2\n */\n#detail .detail-items {\n  position: relative;\n}\n\n#detail .detail-item {\n  position: absolute;\n  display: table;\n  top: 20px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n#detail .detail-item-row {\n  display: table-row;\n  height: 230px;\n}\n\n#detail .detail-item-row > div {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#detail .detail-item-image {\n  width: 20%;\n  text-align: center;\n  background-color: white;\n}\n\n#detail .detail-item-image img {\n  max-width: 100%;\n  width: auto;\n  max-height: 100%;\n  height: auto;\n}\n\n#detail .detail-item-title {\n  width: 25%;\n  text-align: center;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-item-content {\n  width: 40%;\n  padding: 0px 40px;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-item-end {\n  width: 15%;\n  background-color: rgba(58, 128, 123, 0.8);\n}\n\n#detail .detail-action {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\n#detail .detail-action > span {\n  cursor: pointer;\n  margin: 0 10px;\n}\n\n#detail .detail-action .detail-action-previous,\n#detail .detail-action .detail-action-next {\n  display: none;\n}\n\n#detail .detail-action .detail-action-previous.show,\n#detail .detail-action .detail-action-next.show {\n  display: inline-block;\n}\n\n#detail .pull-left {\n  left: -120%;\n}\n\n#detail .pull-right {\n  left: 120%;\n}\n\n\n/*************************/\n/*      Responsive       */\n/*************************/\n\n/* 768px - 959px */\n@media only screen and (max-width: 959px) {\n  /*.detail-table {\n    margin-bottom: 10px;\n  }\n  .detail-row > div {\n    width: 50%;\n  }\n  .detail-row > div.prefix,\n  .detail-row > div.postfix {\n    display: none;\n  }\n  .detail-item-image {\n    display: none;\n  }*/\n}\n\n/* 480px - 767px */\n@media only screen and (max-width: 767px) {\n  #detail {\n    height: auto;\n    padding-bottom: 40px;\n  }\n\n  #detail .detail-item {\n    position: relative;\n    top: auto;\n    left: auto;\n    margin: 10px auto;\n  }\n\n  #detail .detail-item-row {\n    height: auto;\n  }\n\n  #detail .detail-action {\n    display: none;\n  }\n\n  #detail .pull-left,\n  #detail .pull-right {\n    left: auto;\n  }\n\n  #detail .detail-item-image {\n    width: 30%\n  }\n\n  #detail .detail-item-title {\n    width: 30%;\n  }\n\n  #detail .detail-item-content {\n    width: 40%;\n    padding: 0px 15px;\n  }\n\n  #detail .detail-item-end {\n    width: 0%;\n  }\n}\n\n/* 320px - 479px */\n@media only screen and (max-width: 479px) {\n\n}\n", ""]);

	// exports


/***/ }

});