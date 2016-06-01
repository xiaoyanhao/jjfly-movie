/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slide = __webpack_require__(1);

	var _slide2 = _interopRequireDefault(_slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JJFly = function (_React$Component) {
	  _inherits(JJFly, _React$Component);

	  function JJFly(props) {
	    _classCallCheck(this, JJFly);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(JJFly).call(this, props));
	  }

	  _createClass(JJFly, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'jjfly' },
	        React.createElement(_slide2.default, null)
	      );
	    }
	  }]);

	  return JJFly;
	}(React.Component);

	ReactDOM.render(React.createElement(JJFly, null), document.body);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jsonp = __webpack_require__(2);

	var _items = __webpack_require__(3);

	var _items2 = _interopRequireDefault(_items);

	var _control = __webpack_require__(4);

	var _control2 = _interopRequireDefault(_control);

	var _mockMovies = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Slide = function (_React$Component) {
	  _inherits(Slide, _React$Component);

	  function Slide(props) {
	    _classCallCheck(this, Slide);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slide).call(this, props));

	    _this.state = { inTheaters: _this.props.inTheaters, left: _this.props.left };
	    _this.slideMoviesInTheaters = _this.slideMoviesInTheaters.bind(_this);
	    _this.slide = _this.slide.bind(_this);
	    return _this;
	  }

	  _createClass(Slide, [{
	    key: 'slideMoviesInTheaters',
	    value: function slideMoviesInTheaters(response) {
	      console.log(response);
	      this.setState({ inTheaters: response });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // JSONP({
	      //   url: 'https://api.douban.com/v2/movie/in_theaters',
	      //   data: {
	      //     city: '广州'
	      //   },
	      //   success: this.slideMoviesInTheaters
	      // })
	      this.slideMoviesInTheaters(_mockMovies.MockMovies);
	    }
	  }, {
	    key: 'slide',
	    value: function slide(index) {
	      this.setState({ left: index * -590 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'slide' },
	        React.createElement(
	          'div',
	          { className: 'slide-head' },
	          React.createElement(
	            'h2',
	            { className: 'slide-title' },
	            this.state.inTheaters.title
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'slide-content' },
	          React.createElement(_items2.default, { movies: this.state.inTheaters.subjects, left: this.state.left })
	        ),
	        React.createElement(
	          'div',
	          { className: 'slide-foot' },
	          React.createElement(_control2.default, { total: this.state.inTheaters.total, slide: this.slide })
	        )
	      );
	    }
	  }]);

	  return Slide;
	}(React.Component);

	Slide.propTypes = {
	  inTheaters: React.PropTypes.object,
	  left: React.PropTypes.int
	};

	Slide.defaultProps = {
	  inTheaters: {
	    count: 0,
	    start: 0,
	    total: 0,
	    subjects: [],
	    title: '正在热映'
	  },
	  left: 0
	};

	exports.default = Slide;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var completeURL = function completeURL(param) {
	  var url = param.url;
	  url += param.url.indexOf('?') == -1 ? '?' : '&';
	  url += objectToQuery(param.data);
	  return url;
	};

	var objectToQuery = function objectToQuery(obj) {
	  var query = [];
	  var encode = encodeURIComponent;
	  for (var key in obj) {
	    query.push(encode(key) + '=' + encode(obj[key]));
	  }
	  return query.join('&');
	};

	var random = function random(length) {
	  length += 2;
	  return Math.random().toString(36).slice(2, length);
	};

	var JSONP = exports.JSONP = function JSONP() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var param = Object.assign({
	    url: '',
	    data: {},
	    before: function before(param) {},
	    success: function success(response) {},
	    error: function error(event) {},
	    completed: function completed(response, param) {}
	  }, options);

	  if (param.url == '') {
	    throw new error('URL must not be empty!');
	  }

	  var callbackName = 'jsonp_' + random(15);
	  param.data.callback = callbackName;
	  param.url = completeURL(param);
	  param.before(param);

	  callbackName = param.data.callback;
	  window[callbackName] = function (response) {
	    window[callbackName] = null;
	    param.success(response);
	    param.completed(response, param);
	  };

	  var script = document.createElement('script');
	  script.async = true;
	  script.src = param.url;

	  script.addEventListener('error', function (event) {
	    param.error(event);
	    param.completed(event, param);
	  });

	  script.addEventListener('load', function (event) {
	    script.parentNode.removeChild(script);
	    script = null;
	  });

	  document.head.appendChild(script);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Items = function (_React$Component) {
	  _inherits(Items, _React$Component);

	  function Items(props) {
	    _classCallCheck(this, Items);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Items).call(this, props));
	  }

	  _createClass(Items, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'slide',
	    value: function slide(index) {
	      this.refs.slideItems.left = index * -590;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = this.props.movies.map(function (element) {
	        var rating = element.rating.average;
	        rating = Math.round(rating).toString();
	        rating = 'rating-star rating-star-' + rating;
	        var ratingStar = React.createElement('span', { className: rating });
	        return React.createElement(
	          'li',
	          { className: 'slide-item' },
	          React.createElement(
	            'ul',
	            null,
	            React.createElement(
	              'li',
	              { className: 'poster' },
	              React.createElement(
	                'a',
	                null,
	                React.createElement('img', { src: element.images.medium.replace('/spst/', '/mpst/'), alt: element.title })
	              )
	            ),
	            React.createElement(
	              'li',
	              { className: 'title' },
	              React.createElement(
	                'a',
	                { title: element.title },
	                element.title
	              )
	            ),
	            React.createElement(
	              'li',
	              { className: 'rating' },
	              ratingStar,
	              React.createElement(
	                'span',
	                { className: 'rating-score' },
	                element.rating.average
	              )
	            ),
	            React.createElement(
	              'li',
	              { className: 'ticket' },
	              React.createElement(
	                'a',
	                null,
	                '在线购票'
	              )
	            )
	          )
	        );
	      });

	      return React.createElement(
	        'ul',
	        { className: 'slide-items', style: { left: this.props.left } },
	        items
	      );
	    }
	  }]);

	  return Items;
	}(React.Component);

	exports.default = Items;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Control = function (_React$Component) {
	  _inherits(Control, _React$Component);

	  function Control(props) {
	    _classCallCheck(this, Control);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Control).call(this, props));

	    _this.controlSlide = _this.controlSlide.bind(_this);
	    _this.prevActiveIndex = 0;
	    return _this;
	  }

	  _createClass(Control, [{
	    key: 'controlSlide',
	    value: function controlSlide(event) {
	      var li = event.target;
	      var ul = event.currentTarget;
	      if (li == ul) {
	        return false;
	      }

	      var lis = ul.childNodes;
	      lis[this.prevActiveIndex].classList.remove('active');
	      this.prevActiveIndex = li.classList[0].split('-')[2];
	      li.classList.add('active');
	      this.props.slide(this.prevActiveIndex);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var lis = [];
	      var amount = Math.ceil(this.props.total / 4);
	      for (var i = 0; i < amount; i++) {
	        var className = 'slide-control-' + i;
	        if (i == 0) {
	          className += ' active';
	        }
	        lis.push(React.createElement('li', { className: className }));
	      }
	      return React.createElement(
	        'ul',
	        { className: 'slide-control', onClick: this.controlSlide, ref: 'control' },
	        lis
	      );
	    }
	  }]);

	  return Control;
	}(React.Component);

	exports.default = Control;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var MockMovies = exports.MockMovies = {
	  count: 10,
	  start: 0,
	  title: '正在上映的电影-广州',
	  total: 10,
	  subjects: [{
	    alt: 'https://movie.douban.com/subject/21441132/',
	    images: {
	      medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2349374680.jpg'
	    },
	    rating: {
	      average: 6.8
	    },
	    title: '爱丽丝梦游仙境2：镜中奇遇记',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/6873736/',
	    images: {
	      medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2352310242.jpg'
	    },
	    rating: {
	      average: 7.2
	    },
	    title: '愤怒的小鸟',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25794302/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2354368180.jpg"
	    },
	    rating: {
	      average: 5.8
	    },
	    title: '分歧者3：忠诚世界',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25820460/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2332503406.jpg"
	    },
	    rating: {
	      average: 7.8
	    },
	    title: '美国队长3',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25886441/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2349275505.jpg"
	    },
	    rating: {
	      average: 3.5
	    },
	    title: '妖医',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/21441132/',
	    images: {
	      medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2349374680.jpg'
	    },
	    rating: {
	      average: 6.8
	    },
	    title: '爱丽丝梦游仙境2：镜中奇遇记',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/6873736/',
	    images: {
	      medium: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2352310242.jpg'
	    },
	    rating: {
	      average: 7.2
	    },
	    title: '愤怒的小鸟',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25794302/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2354368180.jpg"
	    },
	    rating: {
	      average: 5.8
	    },
	    title: '分歧者3：忠诚世界',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25820460/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2332503406.jpg"
	    },
	    rating: {
	      average: 7.8
	    },
	    title: '美国队长3',
	    year: 2016
	  }, {
	    alt: 'https://movie.douban.com/subject/25886441/',
	    images: {
	      medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2349275505.jpg"
	    },
	    rating: {
	      average: 3.5
	    },
	    title: '妖医',
	    year: 2016
	  }]
	};

/***/ }
/******/ ]);