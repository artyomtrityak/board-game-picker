webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var _reactRouter = __webpack_require__(8);
	
	var Router = _interopRequire(_reactRouter);
	
	var Route = _reactRouter.Route;
	var DefaultRoute = _reactRouter.DefaultRoute;
	var NotFoundRoute = _reactRouter.NotFoundRoute;
	
	// Components
	
	var AppComponent = _interopRequire(__webpack_require__(12));
	
	var NotFoundComponent = _interopRequire(__webpack_require__(13));
	
	var HelloComponent = _interopRequire(__webpack_require__(14));
	
	var GamesPickerComponent = _interopRequire(__webpack_require__(15));
	
	// i18n
	
	var intlData = _interopRequire(__webpack_require__(16));
	
	//NB: get Routes from modules and pass as {ModuleARoutes}
	var routes = React.createElement(
	  Route,
	  { name: "root", path: "/", handler: AppComponent },
	  React.createElement(
	    Route,
	    { name: "games-picker", handler: GamesPickerComponent },
	    React.createElement(Route, { name: "games-picker-step", path: ":stepId", handler: GamesPickerComponent })
	  ),
	  React.createElement(DefaultRoute, { name: "hello", handler: HelloComponent }),
	  React.createElement(NotFoundRoute, { handler: NotFoundComponent })
	);
	
	Router.run(routes, function (Handler) {
	  React.render(React.createElement(Handler, intlData), document.getElementById("react-root"));
	});

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var _reactRouter = __webpack_require__(8);
	
	var Link = _reactRouter.Link;
	var RouteHandler = _reactRouter.RouteHandler;
	
	var IntlMixin = __webpack_require__(1).IntlMixin;
	
	var classNames = _interopRequire(__webpack_require__(2));
	
	module.exports = React.createClass({
	  displayName: "app",
	
	  mixins: [IntlMixin],
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  render: function render() {
	    var helloCls,
	        pickerCls,
	        router = this.context.router;
	
	    helloCls = classNames({
	      active: router.isActive("hello")
	    });
	
	    pickerCls = classNames({
	      active: router.isActive("games-picker") || router.isActive("games-picker-step")
	    });
	
	    console.log(this.getIntlMessage("post.meta"));
	
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "nav",
	        { className: "navbar navbar-default navbar-static-top" },
	        React.createElement(
	          "div",
	          { className: "container" },
	          React.createElement(
	            "div",
	            { className: "navbar-header" },
	            React.createElement(
	              "a",
	              { className: "navbar-brand", href: "#" },
	              "Я (сердечко) настолочки"
	            )
	          ),
	          React.createElement(
	            "div",
	            { id: "navbar", className: "navbar-collapse collapse" },
	            React.createElement(
	              "ul",
	              { className: "nav navbar-nav" },
	              React.createElement(
	                "li",
	                { className: helloCls },
	                React.createElement(
	                  Link,
	                  { to: "hello" },
	                  "Просто "
	                )
	              ),
	              React.createElement(
	                "li",
	                { className: pickerCls },
	                React.createElement(
	                  Link,
	                  { to: "games-picker" },
	                  "What board game should i pick?"
	                )
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(RouteHandler, null)
	      )
	    );
	  }
	});

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var Link = __webpack_require__(8).Link;
	
	var IntlMixin = __webpack_require__(1).IntlMixin;
	
	module.exports = React.createClass({
	  displayName: "not-found",
	
	  mixins: [IntlMixin],
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { style: { textAlign: "center" } },
	      React.createElement(
	        "h3",
	        null,
	        "Oups, page not found :( . I am very sorry."
	      )
	    );
	  }
	});

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var Link = __webpack_require__(8).Link;
	
	module.exports = React.createClass({
	  displayName: "hello",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "jumbotron", style: { textAlign: "center" } },
	      React.createElement(
	        "h1",
	        null,
	        "Marketing stuff!"
	      ),
	      React.createElement(
	        "p",
	        { className: "lead" },
	        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet."
	      ),
	      React.createElement(
	        "p",
	        null,
	        React.createElement(
	          Link,
	          { className: "btn btn-lg btn-success", to: "games-picker" },
	          "Choose your perfect board game"
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var Link = __webpack_require__(8).Link;
	
	var GamesPickerStore = _interopRequire(__webpack_require__(29));
	
	var GamesPickerActions = _interopRequire(__webpack_require__(30));
	
	//Components
	
	var Question = _interopRequire(__webpack_require__(31));
	
	var Answer = _interopRequire(__webpack_require__(32));
	
	module.exports = React.createClass({
	  displayName: "games-picker",
	
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    return {};
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    GamesPickerActions.loadStep(this.context.router.getCurrentParams().stepId);
	  },
	
	  componentDidMount: function componentDidMount() {
	    GamesPickerStore.on("change", this.handleChange);
	    GamesPickerActions.loadStep(this.context.router.getCurrentParams().stepId);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    GamesPickerStore.off("change", this.handleChange);
	  },
	
	  handleChange: function handleChange() {
	    this.setState(GamesPickerStore.getData());
	  },
	
	  render: function render() {
	    var step = this.state.currentStep,
	        details;
	
	    if (!step) {
	      return null;
	    }
	
	    if (step.get("type") === "question") {
	      details = React.createElement(Question, { step: step });
	    }
	
	    if (step.get("type") === "answer") {
	      details = React.createElement(Answer, { step: step });
	    }
	
	    return React.createElement(
	      "div",
	      null,
	      details
	    );
	  }
	});

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var i18en = _interopRequire(__webpack_require__(33));
	
	var i18ru = _interopRequire(__webpack_require__(34));
	
	var localized;
	if (window.navigator.language && window.navigator.language.match(/ru/)) {
	  localized = i18ru;
	} else {
	  localized = i18en;
	}
	
	module.exports = localized;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var EventEmitter = _interopRequire(__webpack_require__(7));
	
	var AppDispatcher = _interopRequire(__webpack_require__(43));
	
	var Immutable = _interopRequire(__webpack_require__(5));
	
	var PRIVATE = {
	  //DATA
	  currentStep: undefined,
	  status: "NOT_LOADED",
	
	  //API
	  loadStep: loadStep,
	  unsetStep: unsetStep
	};
	
	//Store and Public Store API
	
	var GamesPickerStore = (function (_EventEmitter) {
	  function GamesPickerStore() {
	    _classCallCheck(this, GamesPickerStore);
	
	    if (_EventEmitter != null) {
	      _EventEmitter.apply(this, arguments);
	    }
	  }
	
	  _inherits(GamesPickerStore, _EventEmitter);
	
	  _createClass(GamesPickerStore, {
	    getData: {
	      value: function getData() {
	        return {
	          currentStep: PRIVATE.currentStep,
	          status: PRIVATE.status
	        };
	      }
	    }
	  });
	
	  return GamesPickerStore;
	})(EventEmitter);
	
	var store = new GamesPickerStore();
	
	// Dispatching
	AppDispatcher.register(function (action) {
	  switch (action.actionType) {
	
	    case "LOADED_STEP":
	      PRIVATE.loadStep(action.step);
	      break;
	
	    case "STEP_NOT_FOUND":
	      PRIVATE.unsetStep();
	      break;
	
	    default:
	    // no op
	  }
	});
	
	// Private API functions
	function loadStep(step) {
	  PRIVATE.currentStep = Immutable.fromJS(step);
	  PRIVATE.status = "DISPLAY_STEP";
	  store.emit("change");
	}
	
	function unsetStep() {
	  PRIVATE.currentStep = undefined;
	  PRIVATE.status = "STEP_NOT_FOUND";
	  store.emit("change");
	}
	
	module.exports = store;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var AppDispatcher = _interopRequire(__webpack_require__(43));
	
	var GamesPickerWebutils = _interopRequire(__webpack_require__(44));
	
	var GamesPickerActions = {
	  loadStep: function loadStep(stepId) {
	    var step = GamesPickerWebutils.getStep(stepId);
	
	    if (step) {
	      AppDispatcher.dispatch({
	        actionType: "LOADED_STEP",
	        step: step
	      });
	    } else {
	      AppDispatcher.dispatch({
	        actionType: "STEP_NOT_FOUND"
	      });
	    }
	  }
	};
	
	module.exports = GamesPickerActions;

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var Link = __webpack_require__(8).Link;
	
	var IntlMixin = __webpack_require__(1).IntlMixin;
	
	module.exports = React.createClass({
	  displayName: "question",
	
	  mixins: [IntlMixin],
	
	  render: function render() {
	    var answers = this.props.step.get("answers").toArray().map(function (item) {
	      return React.createElement(
	        "div",
	        { className: "btn-group", role: "group", key: item.get("next") },
	        React.createElement(
	          Link,
	          { className: "btn btn-default",
	            to: "games-picker-step",
	            params: { stepId: item.get("next") } },
	          item.get("text")
	        )
	      );
	    });
	
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "jumbotron" },
	        React.createElement(
	          "h2",
	          { style: { textAlign: "center" } },
	          this.props.step.get("text")
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "btn-group btn-group-justified", role: "group" },
	        answers
	      )
	    );
	  }
	});

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(3));
	
	var Link = __webpack_require__(8).Link;
	
	var IntlMixin = __webpack_require__(1).IntlMixin;
	
	module.exports = React.createClass({
	  displayName: "answer",
	
	  mixins: [IntlMixin],
	
	  render: function render() {
	    console.log(this.getIntlMessage("post.meta"));
	    return React.createElement(
	      "div",
	      { className: "jumbotron" },
	      React.createElement(
	        "h1",
	        { style: { textAlign: "center" } },
	        this.props.step.get("text")
	      )
	    );
	  }
	});

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var i18n = {
	    locales: ["ru-RU"],
	    messages: {
	        post: {
	            meta: "Постед !!! 111"
	        }
	    }
	};
	
	module.exports = i18n;

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Dispatcher = __webpack_require__(4).Dispatcher;
	
	module.exports = new Dispatcher();

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var STEPS = _interopRequire(__webpack_require__(135));
	
	var GamesPickerUtils = {
	  getStep: function getStep() {
	    var stepId = arguments[0] === undefined ? "step1" : arguments[0];
	
	    return STEPS[stepId];
	  }
	};
	
	module.exports = GamesPickerUtils;

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var STEPS = {
	  step1: {
	    type: "question",
	    text: "Как ты относишься к случайностям?",
	    answers: [{
	      text: "Хорошо", next: "step2"
	    }, {
	      text: "Плохо", next: "step3"
	    }]
	  },
	  step2: {
	    type: "answer",
	    text: "Descent",
	    img: "path-to-image"
	  },
	  step3: {
	    type: "answer",
	    text: "Stone Age",
	    img: "path-to-image"
	  }
	};
	
	module.exports = STEPS;

/***/ }

});
//# sourceMappingURL=bundle.js.map