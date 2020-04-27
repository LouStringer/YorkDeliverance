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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// grab empty div to populate with data\nlet businesses = document.querySelector(\".businesses\")\n// Shuffle an array\nvar shuffle = function (array) {\n\tvar currentIndex = array.length;\n\tvar temporaryValue, randomIndex;\n\t// While there remain elements to shuffle...\n\twhile (0 !== currentIndex) {\n\t\t// Pick a remaining element...\n\t\trandomIndex = Math.floor(Math.random() * currentIndex);\n\t\tcurrentIndex -= 1;\n\t\t// And swap it with the current element.\n\t\ttemporaryValue = array[currentIndex];\n\t\tarray[currentIndex] = array[randomIndex];\n\t\tarray[randomIndex] = temporaryValue;\n\t}\n\treturn array;\n};\n\n// Grab data from YorkDeliverance Google Sheet\nPapa.parse(\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSQeg-3t2VAfhThb_-zpDFmDzuVs7FTIJpXHwsfDFXTuRk0uB9T3QF9P6nx6MKvFAcXtklFKzEmjvZq/pub?output=csv\", {\n\tdownload: true,\n\tcomplete: function(results) {\n\t\tconsole.log(results);\n\t}\n});\n\n// // render data in the businesses div\n// const renderBusinessesYork = (data, tabletop) => {\n//   let pubList = shuffle(data);\n//   for (let i=0; i<pubList.length; i++) {\n//     if (pubList[i].active == \"TRUE\" && pubList[i].york == \"TRUE\" && pubList[i].booze == \"TRUE\") {\n//       makeBusinessItem(data[i]);\n//       businesses.lastChild.classList.add(\"yBorder\");\n//     }\n//   }\n//   for (let i=0; i<pubList.length; i++) {\n//     if (pubList[i].active == \"TRUE\" && pubList[i].york == \"TRUE\" && pubList[i].coffee == \"TRUE\") {\n//       makeBusinessItem(data[i]);\n//       businesses.lastChild.classList.add(\"yBorder\");\n//     }\n//   }\n// }\n\n// const renderBusinessesHk = (data, tabletop) => {\n//   let pubList = shuffle(data);\n//   for (let i=0; i<pubList.length; i++) {\n//     if (pubList[i].active == \"TRUE\" && pubList[i].hk == \"TRUE\" && pubList[i].booze == \"TRUE\" ) {\n//       makeBusinessItem(data[i]);\n//       businesses.lastChild.classList.add(\"hkBorder\");\n//     }\n//   }\n//   for (let i=0; i<pubList.length; i++) {\n//     if (pubList[i].active == \"TRUE\" && pubList[i].hk == \"TRUE\" && pubList[i].coffee == \"TRUE\") {\n//       makeBusinessItem(data[i]);\n//       businesses.lastChild.classList.add(\"hkBorder\");\n//     }\n//   }\n// }\n\n// const initYork = () => {\n//   businesses.innerHTML = \"<p class=\\\"businessHeader\\\">Beer first, coffee at the end. Priorities!</p>\";\n//   Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',\n//                    callback: renderBusinessesYork,\n//                    simpleSheet: true } )\n// }\n\n// const initHk = () => {\n//   businesses.innerHTML = \"<p class=\\\"businessHeader\\\">Beer first, coffee at the end. Priorities!</p>\";\n//   Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',\n//                    callback: renderBusinessesHk,\n//                    simpleSheet: true } )\n// }\n\n// // build HTML for each business\n// const makeBusinessItem = (businessData) => {\n//   let html = '<div class=\"business\"><h3 class=\"name\">%name%</h3><div class=\"beer\"><p class=\"businessType\">beer</p><p><span class=\"businessInfo takeaway\">pick up</span><span class=\"businessInfo delivery\">delivery</p></div><p class=\"notes\">%notes%</p><p>twitter <a href=\"https://twitter.com/%twitterLink%\">%twitterName%</p><p><a href=\"%link%\">%name%\\'s website</a></p></div>'\n//   html = html.replace(\"%name%\", businessData.name);\n//   if (businessData.coffee == \"TRUE\") {\n//     html = html.replace(\"<div class=\\\"beer\\\">\", \"<div class=\\\"coffee\\\">\");\n//     html = html.replace(\"<p class=\\\"businessType\\\">beer</p>\", \"<p class=\\\"businessType\\\">coffee</p>\");\n//   };\n//   if (businessData.takeaway == \"FALSE\") {\n//     html = html.replace(\"businessInfo takeaway\", \"businessInfo takeaway nope\");\n//   };\n//   if (businessData.delivery == \"FALSE\") {\n//     html = html.replace(\"businessInfo delivery\", \"businessInfo delivery nope\");\n//   }\n//   html = html.replace(\"%notes%\", businessData.notes);\n//   if (businessData.twitter.length > 0){\n//     html = html.replace(\"%twitterLink%\", businessData.twitter.substring(1));\n//   } else {\n//     html = html.replace(\"<p>twitter <a href=\\\"https://twitter.com/%twitterLink%\\\">%twitterName%</p>\", \"\")\n//   }; \n//   html = html.replace(\"%twitterName%\", businessData.twitter);\n//   html = html.replace(\"%link%\", businessData.link);\n//   html = html.replace(\"%name%\", businessData.name);\n//   businesses.insertAdjacentHTML(\"beforeend\", html);\n// }\n\n// document.querySelector(\"#y\").addEventListener('click', initYork)\n// document.querySelector(\"#hk\").addEventListener('click', initHk)\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });