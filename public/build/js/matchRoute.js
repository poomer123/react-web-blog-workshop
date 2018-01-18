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

/***/ "28Ef":
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_postlist__ = __webpack_require__("w/LM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("nSrI");





class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  componentDidMount() {
    this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions__["b" /* loadPosts */])());
  }
  render() {
    const { posts } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Latest Posts'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__posts_postlist__["a" /* default */], { data: posts.data })
    );
  }
}

function selector(state) {
  return {
    posts: state.posts
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(selector)(Home));

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

/***/ "SHgP":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

function posts(state = {}, action) {
	switch (action.type) {
		case 'LOAD_POSTS_PENDING':
			return {
				isRejected: false,
				data: null
			};
		case 'LOAD_POSTS_FULFILLED':
			return {
				isRejected: false,
				data: action.payload
			};
		case 'LOAD_POSTS_REJECTED':
			return {
				isRejected: true,
				data: 'There is error'
			};
		default:
			return state;
	}
}

const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
	counter,
	posts
});

/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ "Vejm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("ZrOi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("Jmof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("jAJp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__("rxpj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_routes__ = __webpack_require__("tUxE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("H/qB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_configureStore__ = __webpack_require__("Zo1f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_actions__ = __webpack_require__("nSrI");


let matchRoute = (() => {
  var _ref = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_asyncToGenerator___default()(function* (req) {
    const store = Object(__WEBPACK_IMPORTED_MODULE_6__web_configureStore__["a" /* default */])();
    yield store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__web_actions__["a" /* fetchPosts */])());
    return new Promise(function (resolve, reject) {
      Object(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_4__web_routes__["a" /* default */], location: req.url }, function (error, redirectLocation, renderProp) {
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
          const element = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"],
            { store: store },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProp)
          );
          const content = __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default.a.renderToString(element);
          console.log(content);
          resolve({
            content,
            data: store.getState()
          });
        } else {
          console.log('error');
        }
      });
    });
  });

  return function matchRoute(_x) {
    return _ref.apply(this, arguments);
  };
})();









/* harmony default export */ __webpack_exports__["default"] = (matchRoute);

/***/ }),

/***/ "Zo1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("dJD+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware__ = __webpack_require__("28Ef");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("UdY5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("SHgP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);





const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];

function configureStore({ preloadState } = {}) {
    const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], preloadState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_1_redux_promise_middleware___default()())));
    return store;
}

/***/ }),

/***/ "ZrOi":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

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

/***/ "nSrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = loadPosts;
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchPosts;
function loadPosts() {
    return (dispatch, getState) => {
        const { posts } = getState();
        if (posts.data != null) {
            return;
        }
        return dispatch(fetchPosts());
    };
}

function fetchPosts() {
    return {
        type: 'LOAD_POSTS',
        payload: fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(d => d.json())
    };
}

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