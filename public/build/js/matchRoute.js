module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/ifb":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5Eq3");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("/ifb");
module.exports = __webpack_require__("Vejm");


/***/ }),

/***/ "5Eq3":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "6LtD":
/***/ (function(module, exports) {

module.exports = {
	"container": "_2MzURXjQ",
	"content": "_2ERppL2Y"
};

/***/ }),

/***/ "BUo6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class Post extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { data } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        null,
        data.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        data.body
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Post);

/***/ }),

/***/ "DFp7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_postlist__ = __webpack_require__("w/LM");



class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = { data: null, isLoading: false }, _temp;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(d => d.json()).then(d => this.setState({ data: d, isLoading: false }));
  }
  render() {
    const { isLoading, data } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Latest Posts'
      ),
      isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Loading...'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__posts_postlist__["a" /* default */], { data: data })
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "H/qB":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "Jmof":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "O+B3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);



class About extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._handleClick = () => {
      this.props.handleClick();
    }, _temp;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'About'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'We are pug lover community. All things pugs.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this._handleClick },
          'Click ',
          this.props.count
        )
      )
    );
  }
}

function selector(state) {
  return {
    count: state.counter
  };
}

function mapDispatch(dispatch) {
  return {
    handleClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(selector, mapDispatch)(About));

/***/ }),

/***/ "UdY5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);


// (state, action) => new state
function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
	counter
});

/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ "Vejm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__("jAJp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_routes__ = __webpack_require__("tUxE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_configureStore__ = __webpack_require__("Zo1f");







function matchRoute(req) {
  console.log('mat!');
  const store = Object(__WEBPACK_IMPORTED_MODULE_5__web_configureStore__["a" /* default */])();
  return new Promise((resolve, reject) => {
    Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_3__web_routes__["a" /* default */], location: req.url }, (error, redirectLocation, renderProp) => {
      if (error) {
        console.log('1!');
        resolve({ error });
      } else if (redirectLocation) {
        console.log('2!');
        resolve({
          redirect: {
            url: redirectLocation.pathname + redirectLocation.search
          }
        });
      } else if (renderProp) {
        console.log(renderProp);
        const element = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
          { store: store },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["RouterContext"], renderProp)
        );
        const content = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(element);
        console.log(content);
        resolve({ content });
      } else {
        console.log('error');
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (matchRoute);

/***/ }),

/***/ "Zo1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("UdY5");



function configureStore() {
    const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* default */]);
    return store;
}

/***/ }),

/***/ "Zt5a":
/***/ (function(module, exports) {

module.exports = {
	"container": "_2z3W8aYa",
	"pugHeading": "_17C1MWWK"
};

/***/ }),

/***/ "dJD+":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "iIQ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module_scss__ = __webpack_require__("Zt5a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_module_scss__);



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_1__header_module_scss___default.a.container },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_1__header_module_scss___default.a.pugHeading },
				' Pug Club Blog '
			)
		);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "jAJp":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "pCua":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_header_header__ = __webpack_require__("iIQ7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module_scss__ = __webpack_require__("6LtD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_module_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);





class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: __WEBPACK_IMPORTED_MODULE_2__app_module_scss___default.a.container },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_header_header__["a" /* default */], null),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'ul',
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'li',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
						{ to: '/' },
						'Home'
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'li',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
						{ to: '/about' },
						'About'
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: __WEBPACK_IMPORTED_MODULE_2__app_module_scss___default.a.content },
				this.props.children
			)
		);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "rxpj":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "tUxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app__ = __webpack_require__("pCua");

// import Home from './home/home'
// import About from './about/about'

function loadRoute(cb) {
  return module => {
    cb(null, module.default);
  };
}

const routes = {
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__app_app__["a" /* default */],
  indexRoute: {
    // component: Home,
    getComponent(nextState, cb) {
      new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "DFp7")).then(loadRoute(cb));
    }
  },
  childRoutes: [{
    path: 'about',
    // component: About,
    getComponent(nextState, cb) {
      new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "O+B3")).then(loadRoute(cb));
    }
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "w/LM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Post__ = __webpack_require__("BUo6");



class PostList extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const { data } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      data && data.map(e => {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Post__["a" /* default */], { data: e, key: `post_${e.id}` });
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (PostList);

/***/ })

/******/ });