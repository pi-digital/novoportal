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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-datepicker/dist/datepicker.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-datepicker/dist/datepicker.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1);var a=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],s={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function o(){}var l=["click","focusin","keydown","input"];function c(e){return Array.isArray(e)?e.map(c):"[object Object]"==={}.toString.call(e)?Object.keys(e).reduce((function(t,n){return t[n]=c(e[n]),t}),{}):e}function d(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[u(t,e,a),h(t,e,a),f(e,a)].join(""),a&&setTimeout((function(){w(!0,e)}),10)}function u(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function h(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.dateSelected,s=t.maxDate,o=t.minDate,l=t.showAllDates,c=t.days,d=t.disabledDates,u=t.disabler,h=t.noWeekends,f=t.startDay,v=t.weekendIndices,m=t.events,p=t.getRange?t.getRange():{},y=+p.start,b=+p.end,D=new Date,q=r===D.getFullYear()&&a===D.getMonth(),S=g(new Date(e).setDate(1)),w=S.getDay()-f,M=w<0?7:0;S.setMonth(S.getMonth()+1),S.setDate(0);var x=S.getDate(),L=[],C=M+7*((w+x)/7|0);C+=(w+x)%7?7:0,0!==f&&0===w&&(C+=7);for(var P=1;P<=C;P++){var j=(P-1)%7,k=c[j],Y=P-(w>=0?w:7+w),O=new Date(r,a,Y),N=m[+O],E="qs-num",I='<span class="qs-num">'+O.getDate()+"</span>",A=y&&b&&+O>=y&&+O<=b;Y<1||Y>x?(E="qs-empty qs-outside-current-month",l?(N&&(E+=" qs-event"),E+=" qs-disabled"):I=""):((o&&O<o||s&&O>s||u(O)||d.some((function(e){return e===+O}))||h&&v.some((function(e){return e===j})))&&(E="qs-disabled"),N&&(E+=" qs-event"),q&&Y===D.getDate()&&(E+=" qs-current"),+O==+i&&(E+=" qs-active"),A&&(E+=" qs-range-date-"+j,y!==b&&(E+=+O===y?" qs-range-date-start qs-active":+O===b?" qs-range-date-end qs-active":" qs-range-date-middle"))),L.push('<div class="qs-square '+E+" "+k+'">'+I+"</div>")}var F=c.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(L);if(F.length%7!=0)throw"Calendar not constructed properly. The # of squares should be a multiple of 7.";return F.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),F.push("</div>"),F.join("")}function f(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return['<div class="qs-overlay-month" data-month-num="'+t+'">','<span data-month-num="'+t+'">'+e+"</span>","</div>"].join("")})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function v(e,t,n){var a=t.el,r=t.calendar.querySelector(".qs-active"),i=e.textContent,s=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,i),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(a,t,n),n||q(t),s&&(m({instance:t,deselect:n}),t.first&&!s.dateSelected&&(s.currentYear=t.currentYear,s.currentMonth=t.currentMonth,s.currentMonthName=t.currentMonthName),d(t),d(s)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function m(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==o?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function y(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],d(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=[e.parent,e.el,e.calendarContainer].map((function(e){return e.getBoundingClientRect()})),r=a[0],i=a[1],s=a[2],o=i.top-r.top+e.parent.scrollTop-(t?s.height:-1*i.height)+"px",l=i.left-r.left+(n?i.width-s.width:0)+"px";e.calendarContainer.style.setProperty("top",o),e.calendarContainer.style.setProperty("left",l)}}function D(e){return"[object Date]"==={}.toString.call(e)&&"Invalid Date"!==e.toString()}function g(e){if(D(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function q(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&(w(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),b(e),e.onShow(e))}function w(e,t){var n=t.calendar;if(n){var a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),i=n.querySelector(".qs-controls"),s=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),i.classList.remove("qs-blur"),s.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),i.classList.add("qs-blur"),s.classList.add("qs-blur"),r.focus())}}function M(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),i=r?null:t.value;if(13===(e.which||e.keyCode)||"click"===e.type)a?y(null,n,i,a):r||t.classList.contains("qs-disabled")||y(null,n,i,a);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}}function x(e){var t=e.type,n=e.target,r=n.classList,i=a.filter((function(e){return e.calendar.contains(n)||e.el===n}))[0],s=i&&i.calendar.contains(n);if(!(i&&i.isMobile&&i.disableMobile))if("click"===t){if(!i)return a.forEach(q);if(i.disabled)return;var o=i.calendar,l=i.calendarContainer,c=i.disableYearOverlay,d=i.nonInput,u=o.querySelector(".qs-overlay-year"),h=!!o.querySelector(".qs-hidden"),f=o.querySelector(".qs-month-year").contains(n),m=n.dataset.monthNum;if(i.noPosition&&!s)(l.classList.contains("qs-hidden")?S:q)(i);else if(r.contains("qs-arrow"))y(r,i);else if(f||r.contains("qs-close"))c||w(!h,i);else if(m)M(e,u,i,m);else{if(r.contains("qs-num")){var p="SPAN"===n.nodeName?n.parentNode:n;return void(p.classList.contains("qs-active")?v(p,i,!0):p.classList.contains("qs-disabled")||v(p,i))}r.contains("qs-submit")&&!r.contains("qs-disabled")?M(e,u,i):d&&n===i.el&&S(i)}}else if("focusin"===t&&i)S(i),a.forEach((function(e){e!==i&&q(e)}));else if("keydown"===t&&i&&!i.disabled){var b=!i.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===(e.which||e.keyCode)&&b&&s?M(e,n,i):27===(e.which||e.keyCode)&&b&&s&&w(!0,i)}else if("input"===t){if(!i||!i.calendar.contains(n))return;var D=i.calendar.querySelector(".qs-submit"),g=n.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);n.value=g,D.classList[4===g.length?"remove":"add"]("qs-disabled")}}function L(){S(this)}function C(){q(this)}function P(e,t){var n=g(e),a=this.currentYear,r=this.currentMonth,i=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),i&&(m({instance:this,deselect:!0}),d(i)),d(this),this;if(!D(e))throw"`setDate` needs a JavaScript Date object.";if(this.disabledDates.some((function(e){return+e==+n}))||n<this.minDate||n>this.maxDate)throw"You can't manually set a date that's disabled.";return this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),p(this.el,this),i&&(m({instance:this}),d(i)),(a===n.getFullYear()&&r===n.getMonth()||t)&&d(this,n),this}function j(e){return Y(this,e,!0)}function k(e){return Y(this,e)}function Y(e,t,n){var a=e.dateSelected,r=e.first,i=e.sibling,s=e.minDate,o=e.maxDate,l=g(t),c=n?"Min":"Max";function u(){return"original"+c+"Date"}function h(){return c.toLowerCase()+"Date"}function f(){return"set"+c}function v(){throw"Out-of-range date passed to "+f()}if(null==t)e[u()]=void 0,i?(i[u()]=void 0,n?(r&&!a||!r&&!i.dateSelected)&&(e.minDate=void 0,i.minDate=void 0):(r&&!i.dateSelected||!r&&!a)&&(e.maxDate=void 0,i.maxDate=void 0)):e[h()]=void 0;else{if(!D(t))throw"Invalid date passed to "+f();i?((r&&n&&l>(a||o)||r&&!n&&l<(i.dateSelected||s)||!r&&n&&l>(i.dateSelected||o)||!r&&!n&&l<(a||s))&&v(),e[u()]=l,i[u()]=l,(n&&(r&&!a||!r&&!i.dateSelected)||!n&&(r&&!i.dateSelected||!r&&!a))&&(e[h()]=l,i[h()]=l)):((n&&l>(a||o)||!n&&l<(a||s))&&v(),e[h()]=l)}return i&&d(i),d(e),e}function O(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function N(){var e=this.inlinePosition,t=this.parent,n=this.calendarContainer,r=this.el,i=this.sibling,s=this;e&&(a.some((function(e){return e!==s&&e.parent===t}))||t.style.setProperty("position",null));for(prop in n.remove(),a=a.filter((function(e){return e.el!==r})),i&&delete i.sibling,this)delete this[prop];a.length||l.forEach((function(e){document.removeEventListener(e,x)}))}e.exports=function(e,t){a.length||l.forEach((function(e){document.addEventListener(e,x)}));var n=function(e,t){var n=e;"string"==typeof n&&(n="#"===n[0]?document.getElementById(n.slice(1)):document.querySelector(n));if(!n)throw"No selector / element found.";var l=function(e,t){if(a.some((function(e){return e.el===t})))throw"A datepicker already exists on that element.";var n=c(e);n.events&&(n.events=n.events.reduce((function(e,t){if(!D(t))throw'"options.events" must only contain valid JavaScript Date objects.';return e[+g(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var t=n[e];if(t&&!D(t))throw'"options.'+e+'" needs to be a valid JavaScript Date object.';n[e]=g(t)}));var i=n.position,l=n.maxDate,d=n.minDate,u=n.dateSelected,h=n.overlayPlaceholder,f=n.overlayButton,v=n.startDay,m=n.id;if(n.startDate=g(n.startDate||u||new Date),n.disabledDates=(n.disabledDates||[]).map((function(e){var t=+g(e);if(!D(e))throw'You supplied an invalid date to "options.disabledDates".';if(t===+g(u))throw'"disabledDates" cannot contain the same date as "dateSelected".';return t})),n.hasOwnProperty("id")&&null==m)throw"Id cannot be `null` or `undefined`";if(null!=m){var p=a.filter((function(e){return e.id===m}));if(p.length>1)throw"Only two datepickers can share an id.";p.length?(n.second=!0,n.sibling=p[0]):n.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return i===e}));if(i&&!y)throw'"options.position" must be one of the following: tl, tr, bl, br, or c.';if(n.position=function(e){var t=e[0],n=e[1],a={};a[s[t]]=1,n&&(a[s[n]]=1);return a}(i||"bl"),l<d)throw'"maxDate" in options is less than "minDate".';if(u){function b(e){throw'"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".'}d>u&&b("min"),l<u&&b()}if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof n[e]&&(n[e]=o)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,t){var a=n[e],r=t?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw'"'+e+'" must be an array with ${num} strings.';n[t?t<2?"months":"overlayMonths":"days"]=a}})),v&&v>0&&v<7){var q=(n.customDays||r).slice(),S=q.splice(0,v);n.customDays=q.concat(S),n.startDay=+v,n.weekendIndices=[q.length-1,q.length]}else n.startDay=0,n.weekendIndices=[6,0];"string"!=typeof h&&delete n.overlayPlaceholder;"string"!=typeof f&&delete n.overlayButton;return n}(t||{startDate:g(new Date),position:"bl"},n),d=n===document.body,u=d?document.body:n.parentElement,h=document.createElement("div"),f=document.createElement("div");h.className="qs-datepicker-container qs-hidden",f.className="qs-datepicker";var v={el:n,parent:u,nonInput:"INPUT"!==n.nodeName,noPosition:d,position:!d&&l.position,startDate:l.startDate,dateSelected:l.dateSelected,disabledDates:l.disabledDates,minDate:l.minDate,maxDate:l.maxDate,noWeekends:!!l.noWeekends,weekendIndices:l.weekendIndices,calendarContainer:h,calendar:f,currentMonth:(l.startDate||l.dateSelected).getMonth(),currentMonthName:(l.months||i)[(l.startDate||l.dateSelected).getMonth()],currentYear:(l.startDate||l.dateSelected).getFullYear(),events:l.events||{},setDate:P,remove:N,setMin:j,setMax:k,show:L,hide:C,onSelect:l.onSelect,onShow:l.onShow,onHide:l.onHide,onMonthChange:l.onMonthChange,formatter:l.formatter,disabler:l.disabler,months:l.months||i,days:l.customDays||r,startDay:l.startDay,overlayMonths:l.overlayMonths||(l.months||i).map((function(e){return e.slice(0,3)})),overlayPlaceholder:l.overlayPlaceholder||"4-digit year",overlayButton:l.overlayButton||"Submit",disableYearOverlay:!!l.disableYearOverlay,disableMobile:!!l.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!l.alwaysShow,id:l.id,showAllDates:!!l.showAllDates,respectDisabledReadOnly:!!l.respectDisabledReadOnly,first:l.first,second:l.second};if(l.sibling){var m=l.sibling,y=v,b=m.minDate||y.minDate,q=m.maxDate||y.maxDate;y.sibling=m,m.sibling=y,m.minDate=b,m.maxDate=q,y.minDate=b,y.maxDate=q,m.originalMinDate=b,m.originalMaxDate=q,y.originalMinDate=b,y.originalMaxDate=q,m.getRange=O,y.getRange=O}l.dateSelected&&p(n,v);var w=getComputedStyle(u).position;d||w&&"static"!==w||(v.inlinePosition=!0,u.style.setProperty("position","relative"));v.inlinePosition&&a.forEach((function(e){e.parent===v.parent&&(e.inlinePosition=!0)}));a.push(v),h.appendChild(f),u.appendChild(h),v.alwaysShow&&S(v);return v}(e,t);if(n.second){var u=n.sibling;m({instance:n,deselect:!n.dateSelected}),m({instance:u,deselect:!u.dateSelected}),d(u)}return d(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}},function(e,t,n){}])}));

/***/ }),

/***/ "./src/js/components/accordeon.js":
/*!****************************************!*\
  !*** ./src/js/components/accordeon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRAccordeon = /*#__PURE__*/function () {
  function BRAccordeon(name, component) {
    _classCallCheck(this, BRAccordeon);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _createClass(BRAccordeon, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll("button.header")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var button = _step.value;
          button.addEventListener("click", function (event) {
            _this._collapse(event);

            _this._changeIcon(event);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_collapse",
    value: function _collapse(event) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.component.querySelectorAll(".item")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          if (field === event.currentTarget.parentNode) {
            field.classList.toggle("is-active");
          } else if (field.classList.contains("is-active")) {
            field.classList.toggle("is-active");
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_changeIcon",
    value: function _changeIcon(event) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.component.querySelectorAll(".item")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;

          if (field.classList.contains("is-active")) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = field.querySelectorAll(".icon")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var icon = _step4.value;
                icon.children[0].classList.remove("fa-plus");
                icon.children[0].classList.add("fa-minus");
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          } else {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = field.querySelectorAll(".icon")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _icon = _step5.value;

                _icon.children[0].classList.remove("fa-minus");

                _icon.children[0].classList.add("fa-plus");
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return BRAccordeon;
}();

var accordeonList = [];
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = window.document.querySelectorAll(".br-accordeon")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var brAccordeon = _step6.value;
    accordeonList.push(Object.create(new BRAccordeon("br-accordeon", brAccordeon)));
  }
} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
      _iterator6.return();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRAccordeon);

/***/ }),

/***/ "./src/js/components/checklist.js":
/*!****************************************!*\
  !*** ./src/js/components/checklist.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRChecklist = /*#__PURE__*/function () {
  function BRChecklist(name, component) {
    _classCallCheck(this, BRChecklist);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _createClass(BRChecklist, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll('input[type="radio"]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var inputRadio = _step.value;

          if (inputRadio.checked) {
            this._switchSole(inputRadio);
          }

          inputRadio.addEventListener("click", function (event) {
            _this._switchSole(event.currentTarget);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.component.querySelectorAll('input[type="checkbox"]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var inputCheckbox = _step2.value;

          if (inputCheckbox.checked) {
            this._switchShared(inputCheckbox);
          }

          inputCheckbox.addEventListener("click", function (event) {
            _this._switchShared(event.currentTarget);
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_switchSole",
    value: function _switchSole(currentCheckedElement) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.component.querySelectorAll(".item")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;

          if (field === this._getParentElementByClass(currentCheckedElement, "item")) {
            field.classList.add("is-active");
          } else {
            field.classList.remove("is-active");
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "_switchShared",
    value: function _switchShared(currentCheckedElement) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.component.querySelectorAll(".item")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var field = _step4.value;

          if (field === this._getParentElementByClass(currentCheckedElement, "item")) {
            field.classList.toggle("is-active");
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "_getParentElementByClass",
    value: function _getParentElementByClass(element, parentClass) {
      while (!element.classList.contains(parentClass)) {
        element = element.parentNode;
      }

      return element;
    }
  }]);

  return BRChecklist;
}();

var checklistList = [];
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = window.document.querySelectorAll('.br-checklist')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var brChecklist = _step5.value;
    checklistList.push(new BRChecklist('br-checklist', brChecklist));
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRChecklist);

/***/ }),

/***/ "./src/js/components/datepicker.js":
/*!*****************************************!*\
  !*** ./src/js/components/datepicker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BRDatepicker = /*#__PURE__*/function () {
  function BRDatepicker(name, component, configData) {
    var _this = this;

    _classCallCheck(this, BRDatepicker);

    this.name = name;
    this.component = component; //Mensagens de erro padrao

    this._ERRO_1 = 'Data inicial maior que data final ';
    this._ERRO_2 = 'Data final maior que data inicial ';
    this._ERRO_3 = 'Data deve ser superior a ';
    this._ERRO_4 = 'Data deve ser inferior a ';
    this._ERRO_5 = 'Data deve estar entre ';
    this._ERRO_5_AND = ' e '; // Configuração padrão do datepicker

    this._formatter = function (input, date, instance) {
      var value = date.toLocaleDateString();
      input.value = value; // => '1/1/2099'
    };

    this._onShow = function (instance) {
      instance.el.value = "";
    };

    this._onHide = function (instance) {
      var erro = _this._validDate(instance);

      if (instance.dateSelected && !erro) {
        instance.el.value = instance.dateSelected.toLocaleDateString();

        _this._validDate(instance);
      }
    };

    this._position = 'bl';
    this._customDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    this._customMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    this._customOverlayMonths = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    this._overlayButtom = "Confirma";
    this._overlayPlaceholder = "Digite um ano";
    this._maxDate = new Date();
    this._minDate = new Date(2019, 0, 1);
    this._respectDisabledReadOnly = true;
    this._noWeekends = true;
    this._id = "dtp" + Math.floor(Math.random() * 100);
    this._datepickerProperties = ["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "position", "startDay", "customDays", "customMonths", "customOverlayMonths", "overlayButtom", "overlayPlaceholder", "events", "alwaysShow", "dateSelected", "maxDate", "minDate", "startDate", "showAllDates", "respectDisabledReadOnly", "noWeekends", "disabler", "disableDates", "disableMobile", "disableYearOverlay", "disabled", "id"];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.component.querySelectorAll("input")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var inputDate = _step.value;
        this.picker = js_datepicker__WEBPACK_IMPORTED_MODULE_0___default()(inputDate, this._configDatepicker(configData));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._setBehavior();
  }

  _createClass(BRDatepicker, [{
    key: "_configDatepicker",
    value: function _configDatepicker(configData) {
      var pickerConfig = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._datepickerProperties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;
          pickerConfig[key] = configData ? configData[key] || this["_" + key] : this["_" + key];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return pickerConfig;
    }
  }, {
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this2 = this;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.component.querySelectorAll("button.icon")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var datepickerButton = _step3.value;
          datepickerButton.addEventListener("click", function (event) {
            _this2._toggleDatepicker(event);
          });
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.picker.el.addEventListener("keyup", function (event) {
        _this2._maskDate(event);
      });
    } // Funcao para ativar e/ou desativar o componente

  }, {
    key: "_toggleDatepicker",
    value: function _toggleDatepicker(event) {
      if (!this.component.classList.contains("is-disabled")) {
        event.stopPropagation();
        this.picker.calendarContainer.classList.contains("qs-hidden") ? this.picker.show() : this.picker.hide();
      }
    } // Função para mascarar a data no formato dd/mm/yyyy ao digitar no campo

  }, {
    key: "_maskDate",
    value: function _maskDate(event) {
      var date = event.target.value;

      if (event.key == "Enter") {
        this.picker.hide();

        this._focusNextElement();

        return;
      }

      var v = date.replace(/\D/g, '').slice(0, 8);

      if (v.length >= 5) {
        event.target.value = "".concat(v.slice(0, 2), "/").concat(v.slice(2, 4), "/").concat(v.slice(4));
        return;
      } else if (v.length >= 3) {
        event.target.value = "".concat(v.slice(0, 2), "/").concat(v.slice(2));
        return;
      }

      event.target.value = v;
      return;
    } // Funcao para mudar o foco para o proximo elemento

  }, {
    key: "_focusNextElement",
    value: function _focusNextElement() {
      var inputs = Array.prototype.slice.call(document.querySelectorAll("input:not([disabled]):not([class='qs-overlay-year']), select"));
      var index = (inputs.indexOf(document.activeElement) + 1) % inputs.length;
      var input = inputs[index];
      input.focus();
      input.select();
    } // Funcao para transferir o valor digitado no input para o componente 

  }, {
    key: "_validDate",
    value: function _validDate(instance) {
      var stringDate = instance.el.value;
      var range = undefined;
      var msg_error = [];

      try {
        range = instance.getRange();
      } catch (error) {}

      var date = new Date(stringDate.split('/').reverse().join('/'));
      var valid = false;

      if (isFinite(date)) {
        valid = true;

        if (range) {
          if (instance.first) {
            if (range.end) {
              valid = date > range.end ? false : true;
              if (!valid) msg_error.push(this._ERRO_1);
            }
          } else if (range.start) {
            valid = date < range.start ? false : true;
            if (!valid) msg_error.push(this._ERRO_2);
          }
        } // Validação da data para o minDate e maxDate


        if (instance.minDate && instance.maxDate) {
          valid = date >= instance.minDate && date <= instance.maxDate ? true : false;
          if (!valid) msg_error.push(this._ERRO_5 + instance.minDate.toLocaleDateString() + this._ERRO_5_AND + instance.maxDate.toLocaleDateString());
        } else if (instance.minDate) {
          valid = date >= instance.minDate ? true : false;
          if (!valid) msg_error.push(this._ERRO_3 + instance.minDate.toLocaleDateString());
        } else if (instance.maxDate) {
          valid = date <= instance.maxDate ? true : false;
          if (!valid) msg_error.push(this._ERRO_4 + instance.maxDate.toLocaleDateString());
        } // Muda a data apenas se for valida


        if (msg_error.length == 0) {
          instance.setDate(date, 1);

          this._showSucess(instance);
        } else {
          this._showError(instance, msg_error);
        }

        return msg_error;
      }
    } // Funcao mostrar os erros no campo de feedback

  }, {
    key: "_showError",
    value: function _showError(instance, msg_error) {
      this.component.classList.add("is-invalid");
      this.component.classList.remove("is-valid");
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.component.parentNode.querySelectorAll("div.feedback.is-invalid span")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var message = _step4.value;
          message.innerText = msg_error[0];
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "_showSucess",
    value: function _showSucess(instance) {
      this.component.classList.add("is-valid");
      this.component.classList.remove("is-invalid");
    } // Funcoes para ativar/desativar o componente 

  }, {
    key: "disableDatepicker",
    value: function disableDatepicker() {
      this.component.classList.add("is-disabled");
      this.picker.el.disabled = true;
    }
  }, {
    key: "enableDatepicker",
    value: function enableDatepicker() {
      this.component.classList.remove("is-disabled");
      this.picker.el.disabled = false;
    }
  }]);

  return BRDatepicker;
}();

var datepickerList = [];
var configData = {};
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = window.document.querySelectorAll(".br-datepicker")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    var brDatepicker = _step5.value;

    if (brDatepicker.classList.contains("range")) {
      configData = {
        id: "range-1"
      };
      datepickerList.push(new BRDatepicker("br-datepicker", brDatepicker, configData));
    } else {
      datepickerList.push(new BRDatepicker("br-datepicker", brDatepicker));
    }
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRDatepicker);

/***/ }),

/***/ "./src/js/components/globals-class.js":
/*!********************************************!*\
  !*** ./src/js/components/globals-class.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Globals; });
/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordeon */ "./src/js/components/accordeon.js");
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist */ "./src/js/components/checklist.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker */ "./src/js/components/datepicker.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/js/components/header.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./src/js/components/input.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/js/components/message.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation */ "./src/js/components/navigation.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select */ "./src/js/components/select.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload */ "./src/js/components/upload.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table */ "./src/js/components/table.js");
/* harmony import */ var _scrim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scrim */ "./src/js/components/scrim.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal */ "./src/js/components/modal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















var Globals = /*#__PURE__*/function () {
  function Globals() {
    _classCallCheck(this, Globals);
  }

  _createClass(Globals, [{
    key: "initInstanceAll",
    value: function initInstanceAll() {
      this.initInstanceAccordeon();
      this.initInstanceChecklist();
      this.initInstanceMessage();
      this.initInstanceHeader();
      this.initInstanceInput();
      this.initInstanceNavigation();
      this.initInstanceSelect();
      this.initInstanceTabs();
      this.initInstanceUpload();
      this.initInstanceDatepicker();
      this.initInstanceTable();
      this.initInstanceScrim();
      this.initInstanceModal();
    }
  }, {
    key: "initInstanceAccordeon",
    value: function initInstanceAccordeon() {
      var accordeonList = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = window.document.querySelectorAll('.br-accordeon')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var brAccordeon = _step.value;
          accordeonList.push(new _accordeon__WEBPACK_IMPORTED_MODULE_0__["default"]('br-accordeon', brAccordeon));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "initInstanceChecklist",
    value: function initInstanceChecklist() {
      var checklistList = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = window.document.querySelectorAll('.br-checklist')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var brChecklist = _step2.value;
          checklistList.push(new _checklist__WEBPACK_IMPORTED_MODULE_1__["default"]('br-checklist', brChecklist));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "initInstanceMessage",
    value: function initInstanceMessage() {
      var alertList = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = window.document.querySelectorAll('.br-message')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var brAlert = _step3.value;
          alertList.push(new _message__WEBPACK_IMPORTED_MODULE_5__["default"]('br-message', brAlert));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "initInstanceHeader",
    value: function initInstanceHeader() {
      var listHeader = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = window.document.querySelectorAll('.br-header')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var header = _step4.value;
          listHeader.push(new _header__WEBPACK_IMPORTED_MODULE_3__["default"]('br-header', header));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "initInstanceInput",
    value: function initInstanceInput() {
      var countries = ['Afeganistão', 'África do Sul', 'Albânia', 'Alemanha', 'Andorra', 'Angola', 'Anguilla', 'Antártida', 'Antígua e Barbuda', 'Antilhas Holandesas', 'Arábia Saudita', 'Argélia', 'Argentina', 'Armênia', 'Aruba', 'Austrália', 'Áustria', 'Azerbaijão', 'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Belarus', 'Bélgica', 'Belize', 'Benin', 'Bermudas', 'Bolívia', 'Bósnia-Herzegóvina', 'Botsuana', 'Brasil', 'Brunei', 'Bulgária', 'Burkina Fasso', 'Burundi', 'Butão', 'Cabo Verde', 'Camarões', 'Camboja', 'Canadá', 'Cazaquistão', 'Chade', 'Chile', 'China', 'Chipre', 'Cingapura', 'Colômbia', 'Congo', 'Coréia do Norte', 'Coréia do Sul', 'Costa do Marfim', 'Costa Rica', 'Croácia (Hrvatska)', 'Cuba', 'Dinamarca', 'Djibuti', 'Dominica', 'Egito', 'El Salvador', 'Emirados Árabes Unidos', 'Equador', 'Eritréia', 'Eslováquia', 'Eslovênia', 'Espanha', 'Estados Unidos', 'Estônia', 'Etiópia', 'Fiji', 'Filipinas', 'Finlândia', 'França', 'Gabão', 'Gâmbia', 'Gana', 'Geórgia', 'Gibraltar', 'Grã-Bretanha (Reino Unido, UK)', 'Granada', 'Grécia', 'Groelândia', 'Guadalupe', 'Guam (Território dos Estados Unidos)', 'Guatemala', 'Guernsey', 'Guiana', 'Guiana Francesa', 'Guiné', 'Guiné Equatorial', 'Guiné-Bissau', 'Haiti', 'Holanda', 'Honduras', 'Hong Kong', 'Hungria', 'Iêmen', 'Ilha Bouvet (Território da Noruega)', 'Ilha do Homem', 'Ilha Natal', 'Ilha Pitcairn', 'Ilha Reunião', 'Ilhas Aland', 'Ilhas Cayman', 'Ilhas Cocos', 'Ilhas Comores', 'Ilhas Cook', 'Ilhas Faroes', 'Ilhas Falkland (Malvinas)', 'Ilhas Geórgia do Sul e Sandwich do Sul', 'Ilhas Heard e McDonald (Território da Austrália)', 'Ilhas Marianas do Norte', 'Ilhas Marshall', 'Ilhas Menores dos Estados Unidos', 'Ilhas Norfolk', 'Ilhas Seychelles', 'Ilhas Solomão', 'Ilhas Svalbard e Jan Mayen', 'Ilhas Tokelau', 'Ilhas Turks e Caicos', 'Ilhas Virgens (Estados Unidos)', 'Ilhas Virgens (Inglaterra)', 'Ilhas Wallis e Futuna', 'índia', 'Indonésia', 'Irã', 'Iraque', 'Irlanda', 'Islândia', 'Israel', 'Itália', 'Jamaica', 'Japão', 'Jersey', 'Jordânia', 'Kênia', 'Kiribati', 'Kuait', 'Laos', 'Látvia', 'Lesoto', 'Líbano', 'Libéria', 'Líbia', 'Liechtenstein', 'Lituânia', 'Luxemburgo', 'Macau', 'Macedônia (República Yugoslava)', 'Madagascar', 'Malásia', 'Malaui', 'Maldivas', 'Mali', 'Malta', 'Marrocos', 'Martinica', 'Maurício', 'Mauritânia', 'Mayotte', 'México', 'Micronésia', 'Moçambique', 'Moldova', 'Mônaco', 'Mongólia', 'Montenegro', 'Montserrat', 'Myanma', 'Namíbia', 'Nauru', 'Nepal', 'Nicarágua', 'Níger', 'Nigéria', 'Niue', 'Noruega', 'Nova Caledônia', 'Nova Zelândia', 'Omã', 'Palau', 'Panamá', 'Papua-Nova Guiné', 'Paquistão', 'Paraguai', 'Peru', 'Polinésia Francesa', 'Polônia', 'Porto Rico', 'Portugal', 'Qatar', 'Quirguistão', 'República Centro-Africana', 'República Democrática do Congo', 'República Dominicana', 'República Tcheca', 'Romênia', 'Ruanda', 'Rússia (antiga URSS) - Federação Russa', 'Saara Ocidental', 'Saint Vincente e Granadinas', 'Samoa Americana', 'Samoa Ocidental', 'San Marino', 'Santa Helena', 'Santa Lúcia', 'São Bartolomeu', 'São Cristóvão e Névis', 'São Martim', 'São Tomé e Príncipe', 'Senegal', 'Serra Leoa', 'Sérvia', 'Síria', 'Somália', 'Sri Lanka', 'St. Pierre and Miquelon', 'Suazilândia', 'Sudão', 'Suécia', 'Suíça', 'Suriname', 'Tadjiquistão', 'Tailândia', 'Taiwan', 'Tanzânia', 'Território Britânico do Oceano índico', 'Territórios do Sul da França', 'Territórios Palestinos Ocupados', 'Timor Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunísia', 'Turcomenistão', 'Turquia', 'Tuvalu', 'Ucrânia', 'Uganda', 'Uruguai', 'Uzbequistão', 'Vanuatu', 'Vaticano', 'Venezuela', 'Vietnã', 'Zâmbia', 'Zimbábue'];
      var inputList = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = window.document.querySelectorAll('.br-input')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var brInput = _step5.value;
          inputList.push(new _input__WEBPACK_IMPORTED_MODULE_4__["default"]('br-input', brInput));
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      for (var _i = 0, _inputList = inputList; _i < _inputList.length; _i++) {
        var _brInput = _inputList[_i];
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = _brInput.component.querySelectorAll('input.search-autocomplete')[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var inputAutocomplete = _step6.value;

            _brInput.setAutocompleteData(countries);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    }
  }, {
    key: "initInstanceNavigation",
    value: function initInstanceNavigation() {
      var navigationList = [];
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = window.document.querySelectorAll('.br-navigation')[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var brNavigation = _step7.value;
          navigationList.push(new _navigation__WEBPACK_IMPORTED_MODULE_6__["default"]('br-navigation', brNavigation));
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  }, {
    key: "initInstanceSelect",
    value: function initInstanceSelect() {
      var selectList = [];
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = window.document.querySelectorAll('.br-select')[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var brSelect = _step8.value;
          selectList.push(new _select__WEBPACK_IMPORTED_MODULE_7__["default"]('br-select', brSelect));
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  }, {
    key: "initInstanceTabs",
    value: function initInstanceTabs() {
      var abasList = [];
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = window.document.querySelectorAll('.br-tabs')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var brTabs = _step9.value;
          abasList.push(new _tabs__WEBPACK_IMPORTED_MODULE_8__["default"]('br-tabs', brTabs));
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    }
  }, {
    key: "initInstanceUpload",
    value: function initInstanceUpload() {
      var uploadList = [];
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = window.document.querySelectorAll('.br-upload')[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var brUpload = _step10.value;
          uploadList.push(new _upload__WEBPACK_IMPORTED_MODULE_9__["default"]('br-upload', brUpload));
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
  }, {
    key: "initInstanceDatepicker",
    value: function initInstanceDatepicker() {
      var datepickerList = [];
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = window.document.querySelectorAll('.br-datepicker')[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var brDatepicker = _step11.value;
          datepickerList.push(new _datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]('br-datepicker', brDatepicker));
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }
    }
  }, {
    key: "initInstanceTable",
    value: function initInstanceTable() {
      var tableList = [];
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = window.document.querySelectorAll(".br-table").entries()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var _step12$value = _slicedToArray(_step12.value, 2),
              index = _step12$value[0],
              brTable = _step12$value[1];

          tableList.push(new _table__WEBPACK_IMPORTED_MODULE_10__["default"]("br-table", brTable, index));
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    }
  }, {
    key: "initInstanceScrim",
    value: function initInstanceScrim() {
      var scrimList = [];
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = window.document.querySelectorAll(".br-scrim")[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var brScrim = _step13.value;
          scrimList.push(new _scrim__WEBPACK_IMPORTED_MODULE_11__["default"]("br-scrim", brScrim));
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
            _iterator13.return();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }

      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = window.document.querySelectorAll(".bloco1 button")[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var buttonBloco1 = _step14.value;
          buttonBloco1.addEventListener("click", function () {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = scrimList[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var _brScrim = _step15.value;

                _brScrim.showScrim();
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          });
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }, {
    key: "initInstanceModal",
    value: function initInstanceModal() {
      var modalList = [];
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = window.document.querySelectorAll(".br-modal")[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var brModal = _step16.value;
          modalList.push(new _modal__WEBPACK_IMPORTED_MODULE_12__["default"]("br-modal", brModal));
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
            _iterator16.return();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      var _iteratorNormalCompletion17 = true;
      var _didIteratorError17 = false;
      var _iteratorError17 = undefined;

      try {
        var _loop = function _loop() {
          var brScrim = _step17.value;
          var scrim = new _scrim__WEBPACK_IMPORTED_MODULE_11__["default"]("br-scrim", brScrim);
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = window.document.querySelectorAll(".br-scrim + button")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var button = _step18.value;
              button.addEventListener("click", function () {
                scrim.showScrim();
              });
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }
        };

        for (var _iterator17 = window.document.querySelectorAll(".br-scrim")[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
            _iterator17.return();
          }
        } finally {
          if (_didIteratorError17) {
            throw _iteratorError17;
          }
        }
      }
    }
  }]);

  return Globals;
}();



/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRHeader = /*#__PURE__*/function () {
  function BRHeader(name, component) {
    _classCallCheck(this, BRHeader);

    this.HEADER_SITE_SELECTOR = '.br-header.is-site';
    this.LANGUAGE_MENU_TRIGGER_SELECTOR = '.language.menu button.trigger';
    this.LANGUAGE_MENU_TRIGGER_NAME_SELECTOR = '.language.menu button.trigger .name';
    this.LANGUAGE_MENU_ITEM_SELECTOR = '.language.menu .item';
    this.LANGUAGE_MENU_ITEM_NAME_SELECTOR = '.name';
    this.SEARCH_INPUT_SELECTOR = '.search input';
    this.SEARCH_CLOSE_SELECTOR = '.search .close';
    this.CONFIGS_MENU_TRIGGER_SELECTOR = '.configs.menu button.trigger';
    this.BOOKMARKS_MENU_TRIGGER_SELECTOR = '.bookmarks.menu button.trigger';
    this.MENU_HAMBURGER_TRIGGER_SELECTOR = '.menu-hamburger';
    this.ACTIVE_CLASS = 'is-active';
    this.name = name;
    this.component = component;

    switch (this.component.classList.value) {
      case 'br-header is-site':
        this._setSiteHeaderBehavior();

        break;

      case 'br-header is-system':
        this._setSystemHeaderBehavior();

        break;
    }
  }

  _createClass(BRHeader, [{
    key: "_setSiteHeaderBehavior",
    value: function _setSiteHeaderBehavior() {
      this._setSelectedLanguage();

      this._setLanguageMenuBehavior();

      this._setSearchMenuBehavior();

      this._setMenuHamburgerBehavior();
    }
  }, {
    key: "_setSystemHeaderBehavior",
    value: function _setSystemHeaderBehavior() {
      this._setConfigsMenuBehavior();

      this._setBookmarksMenuBehavior();

      this._setSearchMenuBehavior();

      this._setMenuHamburgerBehavior();
    }
  }, {
    key: "_setLanguageMenuBehavior",
    value: function _setLanguageMenuBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var languageMenuTrigger = _step.value;
          languageMenuTrigger.addEventListener('click', function (event) {
            event.currentTarget.parentNode.classList.toggle(_this.ACTIVE_CLASS);
          });
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _this.component.querySelectorAll(_this.LANGUAGE_MENU_ITEM_SELECTOR)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var languageMenuItem = _step2.value;
              languageMenuItem.addEventListener('click', function (event) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = _this.component.querySelectorAll(_this.LANGUAGE_MENU_ITEM_SELECTOR)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var sibling = _step3.value;

                    if (sibling === event.currentTarget) {
                      sibling.classList.add(_this.ACTIVE_CLASS);
                      languageMenuTrigger.parentNode.classList.toggle(_this.ACTIVE_CLASS);
                    } else {
                      sibling.classList.remove(_this.ACTIVE_CLASS);
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }

                _this._setSelectedLanguage();
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        };

        for (var _iterator = this.component.querySelectorAll(this.LANGUAGE_MENU_TRIGGER_SELECTOR)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_setSelectedLanguage",
    value: function _setSelectedLanguage() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.component.querySelectorAll(this.LANGUAGE_MENU_ITEM_SELECTOR)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var languageItem = _step4.value;

          if (languageItem.classList.contains(this.ACTIVE_CLASS)) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = languageItem.querySelectorAll(this.LANGUAGE_MENU_ITEM_NAME_SELECTOR)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var languageItemName = _step5.value;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = this.component.querySelectorAll(this.LANGUAGE_MENU_TRIGGER_NAME_SELECTOR)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var languageTriggerName = _step6.value;
                    languageTriggerName.innerText = languageItemName.innerText;
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "_setSearchMenuBehavior",
    value: function _setSearchMenuBehavior() {
      var _this2 = this;

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = this.component.querySelectorAll(this.SEARCH_INPUT_SELECTOR)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var searchInput = _step7.value;
          searchInput.addEventListener('focus', function (event) {
            event.currentTarget.parentNode.parentNode.classList.add(_this2.ACTIVE_CLASS);
          });
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = this.component.querySelectorAll(this.SEARCH_CLOSE_SELECTOR)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var searchClose = _step8.value;
          searchClose.addEventListener('click', function (event) {
            event.currentTarget.parentNode.classList.remove(_this2.ACTIVE_CLASS);
          });
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  }, {
    key: "_setConfigsMenuBehavior",
    value: function _setConfigsMenuBehavior() {
      var _this3 = this;

      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.component.querySelectorAll(this.CONFIGS_MENU_TRIGGER_SELECTOR)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var configsMenuTrigger = _step9.value;
          configsMenuTrigger.addEventListener('click', function (event) {
            event.currentTarget.parentNode.classList.toggle(_this3.ACTIVE_CLASS);
          });
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    }
  }, {
    key: "_setBookmarksMenuBehavior",
    value: function _setBookmarksMenuBehavior() {
      var _this4 = this;

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this.component.querySelectorAll(this.BOOKMARKS_MENU_TRIGGER_SELECTOR)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var bookmarksMenuTrigger = _step10.value;
          bookmarksMenuTrigger.addEventListener('click', function (event) {
            event.currentTarget.parentNode.classList.toggle(_this4.ACTIVE_CLASS);
          });
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
  }, {
    key: "_setMenuHamburgerBehavior",
    value: function _setMenuHamburgerBehavior() {
      var _this5 = this;

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = this.component.querySelectorAll(this.MENU_HAMBURGER_TRIGGER_SELECTOR)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var menuHamburger = _step11.value;
          menuHamburger.addEventListener('click', function (event) {
            event.currentTarget.classList.toggle(_this5.ACTIVE_CLASS);
          });
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }
    }
  }]);

  return BRHeader;
}();

/* harmony default export */ __webpack_exports__["default"] = (BRHeader);

/***/ }),

/***/ "./src/js/components/input.js":
/*!************************************!*\
  !*** ./src/js/components/input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRInput = /*#__PURE__*/function () {
  function BRInput(name, component) {
    _classCallCheck(this, BRInput);

    this.name = name;
    this.component = component;
    this._currentFocus = -1;

    this._setBehavior();
  }

  _createClass(BRInput, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      this._setPasswordViewBehavior();

      this._setAutocompleteBehavior();
    }
  }, {
    key: "_setPasswordViewBehavior",
    value: function _setPasswordViewBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll("input[type='password']")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var inputPassword = _step.value;

          if (inputPassword.parentNode.classList.contains("has-icon")) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = inputPassword.parentNode.querySelectorAll("button.icon")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var buttonIcon = _step2.value;
                buttonIcon.addEventListener("click", function (event) {
                  _this._toggleShowPassword(event);
                }, false);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_toggleShowPassword",
    value: function _toggleShowPassword(event) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = event.currentTarget.querySelectorAll(".svg-inline--fa")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var icon = _step3.value;

          if (icon.classList.contains("fa-eye")) {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = this.component.querySelectorAll("input[type='password']")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var input = _step4.value;
                input.setAttribute("type", "text");
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          } else if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = this.component.querySelectorAll("input[type='text']")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _input = _step5.value;

                _input.setAttribute("type", "password");
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "_setAutocompleteBehavior",
    value: function _setAutocompleteBehavior() {
      var _this2 = this;

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.component.querySelectorAll('input.search-autocomplete')[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var inputAutocomplete = _step6.value;
          inputAutocomplete.addEventListener("input", function (event) {
            _this2._clearSearchItems();

            _this2._buildSearchItems(event.currentTarget);
          }, false);
          inputAutocomplete.addEventListener("keydown", function (event) {
            _this2._handleArrowKeys(event);
          }, false);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: "_buildSearchItems",
    value: function _buildSearchItems(element) {
      var _this3 = this;

      var searchList = window.document.createElement("div");
      searchList.setAttribute("class", "search-items");
      this.component.appendChild(searchList);

      if (element.value !== "") {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.dataList[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var data = _step7.value;

            if (data.substr(0, element.value.length).toUpperCase() == element.value.toUpperCase()) {
              var item = window.document.createElement("div");
              item.innerHTML = "<strong>" + data.substr(0, element.value.length) + "</strong>";
              item.innerHTML += data.substr(element.value.length);
              item.innerHTML += "<input type=\"hidden\" value=\"" + data + "\">";
              item.addEventListener("click", function (event) {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                  for (var _iterator8 = event.currentTarget.querySelectorAll("input[type='hidden']")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var input = _step8.value;
                    element.value = input.value;
                  }
                } catch (err) {
                  _didIteratorError8 = true;
                  _iteratorError8 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                      _iterator8.return();
                    }
                  } finally {
                    if (_didIteratorError8) {
                      throw _iteratorError8;
                    }
                  }
                }

                _this3._clearSearchItems();
              }, false);
              searchList.appendChild(item);
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      } else {
        this._clearSearchItems();
      }
    }
  }, {
    key: "_clearSearchItems",
    value: function _clearSearchItems() {
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = this.component.querySelectorAll(".search-items")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var searchItems = _step9.value;
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = searchItems.querySelectorAll("div")[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var item = _step10.value;
              searchItems.removeChild(item);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          this.component.removeChild(searchItems);
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    }
  }, {
    key: "_handleArrowKeys",
    value: function _handleArrowKeys(event) {
      switch (event.keyCode) {
        case 13:
          if (this._currentFocus > -1) {
            event.preventDefault();
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = this.component.querySelectorAll(".search-items")[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var searchItems = _step11.value;
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                  for (var _iterator12 = searchItems.querySelectorAll("div.is-active")[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var itemActive = _step12.value;
                    itemActive.click();
                  }
                } catch (err) {
                  _didIteratorError12 = true;
                  _iteratorError12 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                      _iterator12.return();
                    }
                  } finally {
                    if (_didIteratorError12) {
                      throw _iteratorError12;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }

            this._currentFocus = -1;
          }

          break;

        case 38:
          if (this._currentFocus > 0) {
            this._currentFocus--;
          }

          this._switchFocus();

          break;

        case 40:
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this.component.querySelectorAll(".search-items")[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var _searchItems = _step13.value;

              if (this._currentFocus < _searchItems.querySelectorAll("div").length - 1) {
                this._currentFocus++;
              }
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          this._switchFocus();

          break;
      }
    }
  }, {
    key: "_switchFocus",
    value: function _switchFocus() {
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = this.component.querySelectorAll(".search-items")[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var searchItems = _step14.value;
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = searchItems.querySelectorAll("div").entries()[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var _step15$value = _slicedToArray(_step15.value, 2),
                  index = _step15$value[0],
                  item = _step15$value[1];

              if (index === this._currentFocus) {
                item.classList.add("is-active");
              }

              if (index !== this._currentFocus) {
                item.classList.remove("is-active");
              }
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                _iterator15.return();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }, {
    key: "setAutocompleteData",
    value: function setAutocompleteData(dataList) {
      this.dataList = dataList;
    }
  }]);

  return BRInput;
}();

/* harmony default export */ __webpack_exports__["default"] = (BRInput);

/***/ }),

/***/ "./src/js/components/message.js":
/*!**************************************!*\
  !*** ./src/js/components/message.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRAlert = /*#__PURE__*/function () {
  function BRAlert(name, component) {
    _classCallCheck(this, BRAlert);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _createClass(BRAlert, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll("div.close button")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var button = _step.value;
          button.addEventListener("click", function () {
            _this._dismiss(_this.component);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_dismiss",
    value: function _dismiss(component) {
      component.parentNode.removeChild(component);
    }
  }]);

  return BRAlert;
}();
/* Instancia a classe */


var alertList = [];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = window.document.querySelectorAll('.br-message')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var brAlert = _step2.value;
    alertList.push(new BRAlert('br-message', brAlert));
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRAlert);

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrim */ "./src/js/components/scrim.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BRModal = /*#__PURE__*/function () {
  function BRModal(name, component) {
    _classCallCheck(this, BRModal);

    this.name = name;
    this.component = component;
    console.log(this.component);

    this._setBehavior();
  }

  _createClass(BRModal, [{
    key: "_setBehavior",
    value: function _setBehavior() {}
  }]);

  return BRModal;
}();

/* harmony default export */ __webpack_exports__["default"] = (BRModal);
var modalList = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = window.document.querySelectorAll(".br-modal")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var brModal = _step.value;
    modalList.push(new BRModal("br-modal", brModal));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var brScrim = _step2.value;
    var scrim = new _scrim__WEBPACK_IMPORTED_MODULE_0__["default"]("br-scrim", brScrim);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = window.document.querySelectorAll(".br-scrim + button")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var button = _step3.value;
        button.addEventListener("click", function () {
          scrim.showScrim();
        });
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  for (var _iterator2 = window.document.querySelectorAll(".br-scrim")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

/***/ }),

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Componente BRNavigation
 * Esse objeto trata a navegação do menu de site e de sistema
 */
var BRNavigation = /*#__PURE__*/function () {
  function BRNavigation(name, component) {
    _classCallCheck(this, BRNavigation);

    this.INITIAL_LEVEL = 0;
    this.name = name;
    this.component = component;

    this._setBehavior();
  }
  /* Gerencia toda a configuaração do compontamento dos menus de site e sistema. */


  _createClass(BRNavigation, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll(".navigation .container")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var navContainer = _step.value;

          this._setTreeLevel(navContainer, 0);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._setNavigationBehavior();

      switch (this.component.id) {
        case "site-nav":
          this._setLanguageMenuBehavior();

          break;

        case "system-nav":
          this._setConfigsMenuBehavior();

          this._setBookmarksMenuBehavior();

          break;
      }
    }
    /* Coloca o atributo 'data-level' nos elementos com a classe 'tree'
     * tendo o valor correspondente ao nível do menu, começando no nível 0.
     */

  }, {
    key: "_setTreeLevel",
    value: function _setTreeLevel(item, level) {
      if (item) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = item.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tree = _step2.value;

            if (tree.classList.contains("menu-nav")) {
              tree.setAttribute("data-level", level);
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = tree.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _item = _step3.value;

                  if (_item.classList.contains("has-children")) {
                    this._setTreeLevel(_item, level + 1);
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: "_setNavigationBehavior",
    value: function _setNavigationBehavior() {
      var _this = this;

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.component.querySelectorAll(".navigation ul.tree.menu-nav .item.has-children button.trigger")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var navTrigger = _step4.value;
          navTrigger.addEventListener("click", function (event) {
            _this._handleInitialLevel(event);

            _this._handleItemSelection(event);
          });
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.component.querySelectorAll(".header .container button.go-back")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var goBackTrigger = _step5.value;
          goBackTrigger.addEventListener("click", function (event) {
            _this._handleGoBack(event);
          });
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "_getParentElementByClass",
    value: function _getParentElementByClass(element, parentClass) {
      while (!element.classList.contains(parentClass)) {
        element = element.parentNode;
      }

      return element;
    }
  }, {
    key: "_getTreeLevel",
    value: function _getTreeLevel(element) {
      return Number(this._getParentElementByClass(element, "tree").getAttribute("data-level"));
    }
  }, {
    key: "_getSiblingsElementsByClass",
    value: function _getSiblingsElementsByClass(element, siblingClass) {
      var siblings = [];
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = element.parentNode.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var sibling = _step6.value;

          if (sibling.classList.contains(siblingClass)) {
            siblings.push(sibling);
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return siblings;
    }
  }, {
    key: "_handleInitialLevel",
    value: function _handleInitialLevel(event) {
      switch (this._getParentElementByClass(event.currentTarget, "br-navigation").id) {
        case "site-nav":
          if (this._getTreeLevel(event.currentTarget) === this.INITIAL_LEVEL) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = this._getParentElementByClass(event.currentTarget, "container").children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var tree = _step7.value;

                if (tree !== this._getParentElementByClass(event.currentTarget, "tree")) {
                  tree.classList.remove("is-active");
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }

          break;

        case "system-nav":
          if (Number(this._getTreeLevel(event.currentTarget)) === this.INITIAL_LEVEL) {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = this._getSiblingsElementsByClass(event.currentTarget, "tree")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var _tree = _step8.value;
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = _tree.children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var item = _step10.value;
                    item.classList.toggle("is-active");
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                      _iterator10.return();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }

                _tree.classList.toggle("is-active");
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }

            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = event.currentTarget.querySelectorAll(".arrow svg")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var arrow = _step9.value;

                if (arrow.classList.contains("fa-chevron-right")) {
                  arrow.classList.remove("fa-chevron-right");
                  arrow.classList.add("fa-chevron-left");
                } else if (arrow.classList.contains("fa-chevron-left")) {
                  arrow.classList.remove("fa-chevron-left");
                  arrow.classList.add("fa-chevron-right");
                }
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          }

          if (Number(this._getTreeLevel(event.currentTarget)) === this.INITIAL_LEVEL + 1) {
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
              for (var _iterator11 = this.component.querySelectorAll('#system-nav .navigation .tree.menu-nav[data-level="0"]')[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var _tree2 = _step11.value;
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                  for (var _iterator12 = _tree2.children[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var _item2 = _step12.value;

                    if (_item2 !== this._getParentElementByClass(this._getParentElementByClass(event.currentTarget, "tree"), "item")) {
                      var _iteratorNormalCompletion13 = true;
                      var _didIteratorError13 = false;
                      var _iteratorError13 = undefined;

                      try {
                        for (var _iterator13 = _item2.children[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                          var _tree3 = _step13.value;

                          if (_tree3.classList.contains("tree")) {
                            var _iteratorNormalCompletion14 = true;
                            var _didIteratorError14 = false;
                            var _iteratorError14 = undefined;

                            try {
                              for (var _iterator14 = _tree3.children[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                var _item3 = _step14.value;

                                _item3.classList.remove("is-active");
                              }
                            } catch (err) {
                              _didIteratorError14 = true;
                              _iteratorError14 = err;
                            } finally {
                              try {
                                if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                                  _iterator14.return();
                                }
                              } finally {
                                if (_didIteratorError14) {
                                  throw _iteratorError14;
                                }
                              }
                            }

                            _tree3.classList.remove("is-active");
                          }
                        }
                      } catch (err) {
                        _didIteratorError13 = true;
                        _iteratorError13 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                            _iterator13.return();
                          }
                        } finally {
                          if (_didIteratorError13) {
                            throw _iteratorError13;
                          }
                        }
                      }

                      _item2.classList.remove("is-active");
                    } else {
                      var _iteratorNormalCompletion15 = true;
                      var _didIteratorError15 = false;
                      var _iteratorError15 = undefined;

                      try {
                        for (var _iterator15 = _item2.children[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                          var child = _step15.value;

                          if (child.classList.contains("trigger")) {
                            child.classList.add("is-hidden");
                          }
                        }
                      } catch (err) {
                        _didIteratorError15 = true;
                        _iteratorError15 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                            _iterator15.return();
                          }
                        } finally {
                          if (_didIteratorError15) {
                            throw _iteratorError15;
                          }
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError12 = true;
                  _iteratorError12 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                      _iterator12.return();
                    }
                  } finally {
                    if (_didIteratorError12) {
                      throw _iteratorError12;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError11 = true;
              _iteratorError11 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                  _iterator11.return();
                }
              } finally {
                if (_didIteratorError11) {
                  throw _iteratorError11;
                }
              }
            }
          }

          break;
      }
    }
  }, {
    key: "_handleItemSelection",
    value: function _handleItemSelection(event) {
      switch (this._getParentElementByClass(event.currentTarget, "br-navigation").id) {
        case "site-nav":
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this._getParentElementByClass(event.currentTarget, "tree").children[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var item = _step16.value;

              if (item !== this._getParentElementByClass(event.currentTarget, "item")) {
                item.classList.remove("is-active");
              }
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = this._getSiblingsElementsByClass(event.currentTarget, "tree")[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var tree = _step17.value;
              tree.classList.add("is-active");
              var _iteratorNormalCompletion19 = true;
              var _didIteratorError19 = false;
              var _iteratorError19 = undefined;

              try {
                for (var _iterator19 = tree.children[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                  var _item4 = _step19.value;

                  _item4.classList.add("is-active");
                }
              } catch (err) {
                _didIteratorError19 = true;
                _iteratorError19 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                    _iterator19.return();
                  }
                } finally {
                  if (_didIteratorError19) {
                    throw _iteratorError19;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          event.currentTarget.classList.add("is-hidden");
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = event.currentTarget.querySelectorAll(".name")[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var name = _step18.value;

              this._setGoBackButton(name.innerText, this._getTreeLevel(event.currentTarget));
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          break;

        case "system-nav":
          if (this._getTreeLevel(event.currentTarget) > this.INITIAL_LEVEL) {
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
              for (var _iterator20 = this._getSiblingsElementsByClass(event.currentTarget, "tree")[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                var _tree4 = _step20.value;
                var _iteratorNormalCompletion23 = true;
                var _didIteratorError23 = false;
                var _iteratorError23 = undefined;

                try {
                  for (var _iterator23 = _tree4.children[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                    var _item5 = _step23.value;

                    _item5.classList.add("is-active");
                  }
                } catch (err) {
                  _didIteratorError23 = true;
                  _iteratorError23 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                      _iterator23.return();
                    }
                  } finally {
                    if (_didIteratorError23) {
                      throw _iteratorError23;
                    }
                  }
                }

                _tree4.classList.add("is-active");
              }
            } catch (err) {
              _didIteratorError20 = true;
              _iteratorError20 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                  _iterator20.return();
                }
              } finally {
                if (_didIteratorError20) {
                  throw _iteratorError20;
                }
              }
            }

            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
              for (var _iterator21 = this._getParentElementByClass(event.currentTarget, "tree").children[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                var _item6 = _step21.value;

                if (_item6 !== this._getParentElementByClass(event.currentTarget, "item")) {
                  _item6.classList.remove("is-active");
                }
              }
            } catch (err) {
              _didIteratorError21 = true;
              _iteratorError21 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                  _iterator21.return();
                }
              } finally {
                if (_didIteratorError21) {
                  throw _iteratorError21;
                }
              }
            }

            event.currentTarget.classList.add("is-hidden");
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
              for (var _iterator22 = event.currentTarget.querySelectorAll(".name")[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                var _name = _step22.value;

                this._setGoBackButton(_name.innerText, this._getTreeLevel(event.currentTarget));
              }
            } catch (err) {
              _didIteratorError22 = true;
              _iteratorError22 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                  _iterator22.return();
                }
              } finally {
                if (_didIteratorError22) {
                  throw _iteratorError22;
                }
              }
            }
          }

          break;
      }
    }
  }, {
    key: "_setGoBackButton",
    value: function _setGoBackButton(name, level) {
      if (this._getParentElementByClass(event.currentTarget, "br-navigation").id === "site-nav") {
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = this.component.querySelectorAll(".br-navigation .header .logo")[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var logo = _step24.value;
            logo.classList.remove("is-active");
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
              _iterator24.return();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }
      }

      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = this.component.querySelectorAll(".br-navigation .header button.go-back")[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var goBackButton = _step25.value;
          var _iteratorNormalCompletion26 = true;
          var _didIteratorError26 = false;
          var _iteratorError26 = undefined;

          try {
            for (var _iterator26 = goBackButton.querySelectorAll(".node")[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
              var node = _step26.value;
              node.innerText = name;
            }
          } catch (err) {
            _didIteratorError26 = true;
            _iteratorError26 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
                _iterator26.return();
              }
            } finally {
              if (_didIteratorError26) {
                throw _iteratorError26;
              }
            }
          }

          goBackButton.setAttribute("goto-level", level);
          goBackButton.classList.add("is-active");
        }
      } catch (err) {
        _didIteratorError25 = true;
        _iteratorError25 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
            _iterator25.return();
          }
        } finally {
          if (_didIteratorError25) {
            throw _iteratorError25;
          }
        }
      }
    }
  }, {
    key: "_handleGoBack",
    value: function _handleGoBack(event) {
      switch (this._getParentElementByClass(event.currentTarget, "br-navigation").id) {
        case "site-nav":
          var _iteratorNormalCompletion27 = true;
          var _didIteratorError27 = false;
          var _iteratorError27 = undefined;

          try {
            for (var _iterator27 = this.component.querySelectorAll('#site-nav .navigation .tree.is-active[data-level="' + (Number(event.currentTarget.getAttribute("goto-level")) + 1) + '"]')[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
              var tree = _step27.value;
              var _iteratorNormalCompletion29 = true;
              var _didIteratorError29 = false;
              var _iteratorError29 = undefined;

              try {
                for (var _iterator29 = tree.children[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                  var child = _step29.value;
                  child.classList.remove("is-active");
                }
              } catch (err) {
                _didIteratorError29 = true;
                _iteratorError29 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                    _iterator29.return();
                  }
                } finally {
                  if (_didIteratorError29) {
                    throw _iteratorError29;
                  }
                }
              }

              tree.classList.remove("is-active");
              var _iteratorNormalCompletion30 = true;
              var _didIteratorError30 = false;
              var _iteratorError30 = undefined;

              try {
                for (var _iterator30 = this._getSiblingsElementsByClass(tree, "trigger")[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                  var sibling = _step30.value;
                  sibling.classList.remove("is-hidden");
                }
              } catch (err) {
                _didIteratorError30 = true;
                _iteratorError30 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion30 && _iterator30.return != null) {
                    _iterator30.return();
                  }
                } finally {
                  if (_didIteratorError30) {
                    throw _iteratorError30;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError27 = true;
            _iteratorError27 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
                _iterator27.return();
              }
            } finally {
              if (_didIteratorError27) {
                throw _iteratorError27;
              }
            }
          }

          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = this.component.querySelectorAll('#site-nav .navigation .tree.is-active[data-level="' + event.currentTarget.getAttribute("goto-level") + '"]')[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var _tree5 = _step28.value;
              var _iteratorNormalCompletion31 = true;
              var _didIteratorError31 = false;
              var _iteratorError31 = undefined;

              try {
                for (var _iterator31 = _tree5.children[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                  var _child2 = _step31.value;

                  _child2.classList.add("is-active");
                }
              } catch (err) {
                _didIteratorError31 = true;
                _iteratorError31 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion31 && _iterator31.return != null) {
                    _iterator31.return();
                  }
                } finally {
                  if (_didIteratorError31) {
                    throw _iteratorError31;
                  }
                }
              }

              if (Number(event.currentTarget.getAttribute("goto-level")) === this.INITIAL_LEVEL) {
                event.currentTarget.classList.remove("is-active");
                var _iteratorNormalCompletion32 = true;
                var _didIteratorError32 = false;
                var _iteratorError32 = undefined;

                try {
                  for (var _iterator32 = event.currentTarget.querySelectorAll(".node")[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                    var node = _step32.value;
                    node.innerText = "";
                  }
                } catch (err) {
                  _didIteratorError32 = true;
                  _iteratorError32 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion32 && _iterator32.return != null) {
                      _iterator32.return();
                    }
                  } finally {
                    if (_didIteratorError32) {
                      throw _iteratorError32;
                    }
                  }
                }

                var _iteratorNormalCompletion33 = true;
                var _didIteratorError33 = false;
                var _iteratorError33 = undefined;

                try {
                  for (var _iterator33 = this._getParentElementByClass(event.currentTarget, "container").children[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                    var headerItem = _step33.value;

                    if (headerItem.classList.contains("logo")) {
                      headerItem.classList.add("is-active");
                    }
                  }
                } catch (err) {
                  _didIteratorError33 = true;
                  _iteratorError33 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion33 && _iterator33.return != null) {
                      _iterator33.return();
                    }
                  } finally {
                    if (_didIteratorError33) {
                      throw _iteratorError33;
                    }
                  }
                }

                var _iteratorNormalCompletion34 = true;
                var _didIteratorError34 = false;
                var _iteratorError34 = undefined;

                try {
                  for (var _iterator34 = this._getParentElementByClass(_tree5, "container").children[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                    var _child = _step34.value;

                    _child.classList.add("is-active");
                  }
                } catch (err) {
                  _didIteratorError34 = true;
                  _iteratorError34 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion34 && _iterator34.return != null) {
                      _iterator34.return();
                    }
                  } finally {
                    if (_didIteratorError34) {
                      throw _iteratorError34;
                    }
                  }
                }
              } else {
                var _iteratorNormalCompletion35 = true;
                var _didIteratorError35 = false;
                var _iteratorError35 = undefined;

                try {
                  for (var _iterator35 = this._getSiblingsElementsByClass(_tree5, "trigger")[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                    var _sibling = _step35.value;
                    var _iteratorNormalCompletion36 = true;
                    var _didIteratorError36 = false;
                    var _iteratorError36 = undefined;

                    try {
                      for (var _iterator36 = _sibling.querySelectorAll(".name")[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                        var name = _step36.value;
                        var _iteratorNormalCompletion37 = true;
                        var _didIteratorError37 = false;
                        var _iteratorError37 = undefined;

                        try {
                          for (var _iterator37 = event.currentTarget.querySelectorAll(".node")[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                            var _node = _step37.value;
                            _node.innerText = name.innerText;
                          }
                        } catch (err) {
                          _didIteratorError37 = true;
                          _iteratorError37 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion37 && _iterator37.return != null) {
                              _iterator37.return();
                            }
                          } finally {
                            if (_didIteratorError37) {
                              throw _iteratorError37;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError36 = true;
                      _iteratorError36 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion36 && _iterator36.return != null) {
                          _iterator36.return();
                        }
                      } finally {
                        if (_didIteratorError36) {
                          throw _iteratorError36;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError35 = true;
                  _iteratorError35 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion35 && _iterator35.return != null) {
                      _iterator35.return();
                    }
                  } finally {
                    if (_didIteratorError35) {
                      throw _iteratorError35;
                    }
                  }
                }

                event.currentTarget.setAttribute("goto-level", Number(event.currentTarget.getAttribute("goto-level")) - 1);
              }
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }

          break;

        case "system-nav":
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = this.component.querySelectorAll('#system-nav .navigation .tree.is-active[data-level="' + (Number(event.currentTarget.getAttribute("goto-level")) + 1) + '"]')[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var _tree6 = _step38.value;
              var _iteratorNormalCompletion40 = true;
              var _didIteratorError40 = false;
              var _iteratorError40 = undefined;

              try {
                for (var _iterator40 = _tree6.children[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
                  var _child3 = _step40.value;

                  _child3.classList.remove("is-active");
                }
              } catch (err) {
                _didIteratorError40 = true;
                _iteratorError40 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion40 && _iterator40.return != null) {
                    _iterator40.return();
                  }
                } finally {
                  if (_didIteratorError40) {
                    throw _iteratorError40;
                  }
                }
              }

              _tree6.classList.remove("is-active");

              var _iteratorNormalCompletion41 = true;
              var _didIteratorError41 = false;
              var _iteratorError41 = undefined;

              try {
                for (var _iterator41 = this._getSiblingsElementsByClass(_tree6, "trigger")[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
                  var _sibling2 = _step41.value;

                  _sibling2.classList.remove("is-hidden");
                }
              } catch (err) {
                _didIteratorError41 = true;
                _iteratorError41 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion41 && _iterator41.return != null) {
                    _iterator41.return();
                  }
                } finally {
                  if (_didIteratorError41) {
                    throw _iteratorError41;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38.return != null) {
                _iterator38.return();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }

          var _iteratorNormalCompletion39 = true;
          var _didIteratorError39 = false;
          var _iteratorError39 = undefined;

          try {
            for (var _iterator39 = this.component.querySelectorAll('#system-nav .navigation .tree.is-active[data-level="' + event.currentTarget.getAttribute("goto-level") + '"]')[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
              var _tree7 = _step39.value;
              var _iteratorNormalCompletion42 = true;
              var _didIteratorError42 = false;
              var _iteratorError42 = undefined;

              try {
                for (var _iterator42 = _tree7.children[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                  var _child5 = _step42.value;

                  _child5.classList.add("is-active");
                }
              } catch (err) {
                _didIteratorError42 = true;
                _iteratorError42 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion42 && _iterator42.return != null) {
                    _iterator42.return();
                  }
                } finally {
                  if (_didIteratorError42) {
                    throw _iteratorError42;
                  }
                }
              }

              if (Number(event.currentTarget.getAttribute("goto-level")) === this.INITIAL_LEVEL + 1) {
                event.currentTarget.classList.remove("is-active");
                var _iteratorNormalCompletion43 = true;
                var _didIteratorError43 = false;
                var _iteratorError43 = undefined;

                try {
                  for (var _iterator43 = event.currentTarget.querySelectorAll(".node")[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
                    var _node2 = _step43.value;
                    _node2.innerText = "";
                  }
                } catch (err) {
                  _didIteratorError43 = true;
                  _iteratorError43 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion43 && _iterator43.return != null) {
                      _iterator43.return();
                    }
                  } finally {
                    if (_didIteratorError43) {
                      throw _iteratorError43;
                    }
                  }
                }

                var _iteratorNormalCompletion44 = true;
                var _didIteratorError44 = false;
                var _iteratorError44 = undefined;

                try {
                  for (var _iterator44 = this._getParentElementByClass(_tree7, "container").children[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
                    var _child4 = _step44.value;

                    if (_child4.classList.contains("menu-nav")) {
                      var _iteratorNormalCompletion45 = true;
                      var _didIteratorError45 = false;
                      var _iteratorError45 = undefined;

                      try {
                        for (var _iterator45 = _child4.children[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
                          var item = _step45.value;
                          var _iteratorNormalCompletion46 = true;
                          var _didIteratorError46 = false;
                          var _iteratorError46 = undefined;

                          try {
                            for (var _iterator46 = item.querySelectorAll('.tree.menu-nav[data-level="1"]')[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
                              var _tree8 = _step46.value;
                              var _iteratorNormalCompletion47 = true;
                              var _didIteratorError47 = false;
                              var _iteratorError47 = undefined;

                              try {
                                for (var _iterator47 = _tree8.children[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
                                  var _item7 = _step47.value;

                                  _item7.classList.add("is-active");
                                }
                              } catch (err) {
                                _didIteratorError47 = true;
                                _iteratorError47 = err;
                              } finally {
                                try {
                                  if (!_iteratorNormalCompletion47 && _iterator47.return != null) {
                                    _iterator47.return();
                                  }
                                } finally {
                                  if (_didIteratorError47) {
                                    throw _iteratorError47;
                                  }
                                }
                              }

                              var _iteratorNormalCompletion48 = true;
                              var _didIteratorError48 = false;
                              var _iteratorError48 = undefined;

                              try {
                                for (var _iterator48 = this._getSiblingsElementsByClass(_tree8, "trigger")[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
                                  var _sibling3 = _step48.value;

                                  _sibling3.classList.remove("is-hidden");
                                }
                              } catch (err) {
                                _didIteratorError48 = true;
                                _iteratorError48 = err;
                              } finally {
                                try {
                                  if (!_iteratorNormalCompletion48 && _iterator48.return != null) {
                                    _iterator48.return();
                                  }
                                } finally {
                                  if (_didIteratorError48) {
                                    throw _iteratorError48;
                                  }
                                }
                              }

                              _tree8.classList.add("is-active");
                            }
                          } catch (err) {
                            _didIteratorError46 = true;
                            _iteratorError46 = err;
                          } finally {
                            try {
                              if (!_iteratorNormalCompletion46 && _iterator46.return != null) {
                                _iterator46.return();
                              }
                            } finally {
                              if (_didIteratorError46) {
                                throw _iteratorError46;
                              }
                            }
                          }

                          item.classList.add("is-active");
                        }
                      } catch (err) {
                        _didIteratorError45 = true;
                        _iteratorError45 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion45 && _iterator45.return != null) {
                            _iterator45.return();
                          }
                        } finally {
                          if (_didIteratorError45) {
                            throw _iteratorError45;
                          }
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError44 = true;
                  _iteratorError44 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion44 && _iterator44.return != null) {
                      _iterator44.return();
                    }
                  } finally {
                    if (_didIteratorError44) {
                      throw _iteratorError44;
                    }
                  }
                }
              } else {
                var _iteratorNormalCompletion49 = true;
                var _didIteratorError49 = false;
                var _iteratorError49 = undefined;

                try {
                  for (var _iterator49 = this._getSiblingsElementsByClass(_tree7, "trigger")[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
                    var _sibling4 = _step49.value;
                    var _iteratorNormalCompletion50 = true;
                    var _didIteratorError50 = false;
                    var _iteratorError50 = undefined;

                    try {
                      for (var _iterator50 = _sibling4.querySelectorAll(".name")[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
                        var _name2 = _step50.value;
                        var _iteratorNormalCompletion51 = true;
                        var _didIteratorError51 = false;
                        var _iteratorError51 = undefined;

                        try {
                          for (var _iterator51 = event.currentTarget.querySelectorAll(".node")[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
                            var _node3 = _step51.value;
                            _node3.innerText = _name2.innerText;
                          }
                        } catch (err) {
                          _didIteratorError51 = true;
                          _iteratorError51 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion51 && _iterator51.return != null) {
                              _iterator51.return();
                            }
                          } finally {
                            if (_didIteratorError51) {
                              throw _iteratorError51;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError50 = true;
                      _iteratorError50 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion50 && _iterator50.return != null) {
                          _iterator50.return();
                        }
                      } finally {
                        if (_didIteratorError50) {
                          throw _iteratorError50;
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError49 = true;
                  _iteratorError49 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion49 && _iterator49.return != null) {
                      _iterator49.return();
                    }
                  } finally {
                    if (_didIteratorError49) {
                      throw _iteratorError49;
                    }
                  }
                }

                event.currentTarget.setAttribute("goto-level", Number(event.currentTarget.getAttribute("goto-level")) - 1);
              }
            }
          } catch (err) {
            _didIteratorError39 = true;
            _iteratorError39 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion39 && _iterator39.return != null) {
                _iterator39.return();
              }
            } finally {
              if (_didIteratorError39) {
                throw _iteratorError39;
              }
            }
          }

          break;
      }
    }
  }, {
    key: "_setLanguageMenuBehavior",
    value: function _setLanguageMenuBehavior() {
      var _this2 = this;

      var _iteratorNormalCompletion52 = true;
      var _didIteratorError52 = false;
      var _iteratorError52 = undefined;

      try {
        var _loop = function _loop() {
          var languageTrigger = _step52.value;
          languageTrigger.addEventListener("click", function (event) {
            _this2._getParentElementByClass(event.currentTarget, "language").classList.toggle("is-active");
          });
          var _iteratorNormalCompletion53 = true;
          var _didIteratorError53 = false;
          var _iteratorError53 = undefined;

          try {
            var _loop2 = function _loop2() {
              var items = _step53.value;
              var _iteratorNormalCompletion54 = true;
              var _didIteratorError54 = false;
              var _iteratorError54 = undefined;

              try {
                for (var _iterator54 = items.children[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
                  var item = _step54.value;
                  item.addEventListener("click", function (event) {
                    var _iteratorNormalCompletion55 = true;
                    var _didIteratorError55 = false;
                    var _iteratorError55 = undefined;

                    try {
                      for (var _iterator55 = items.children[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
                        var _item8 = _step55.value;

                        if (_item8 !== event.currentTarget) {
                          _item8.classList.remove("is-active");
                        } else {
                          _item8.classList.add("is-active");

                          var _iteratorNormalCompletion56 = true;
                          var _didIteratorError56 = false;
                          var _iteratorError56 = undefined;

                          try {
                            for (var _iterator56 = languageTrigger.querySelectorAll(".name")[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
                              var triggerName = _step56.value;
                              var _iteratorNormalCompletion57 = true;
                              var _didIteratorError57 = false;
                              var _iteratorError57 = undefined;

                              try {
                                for (var _iterator57 = event.currentTarget.querySelectorAll(".name")[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
                                  var languageName = _step57.value;
                                  triggerName.innerText = languageName.innerText;
                                }
                              } catch (err) {
                                _didIteratorError57 = true;
                                _iteratorError57 = err;
                              } finally {
                                try {
                                  if (!_iteratorNormalCompletion57 && _iterator57.return != null) {
                                    _iterator57.return();
                                  }
                                } finally {
                                  if (_didIteratorError57) {
                                    throw _iteratorError57;
                                  }
                                }
                              }
                            }
                          } catch (err) {
                            _didIteratorError56 = true;
                            _iteratorError56 = err;
                          } finally {
                            try {
                              if (!_iteratorNormalCompletion56 && _iterator56.return != null) {
                                _iterator56.return();
                              }
                            } finally {
                              if (_didIteratorError56) {
                                throw _iteratorError56;
                              }
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _didIteratorError55 = true;
                      _iteratorError55 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion55 && _iterator55.return != null) {
                          _iterator55.return();
                        }
                      } finally {
                        if (_didIteratorError55) {
                          throw _iteratorError55;
                        }
                      }
                    }
                  });
                }
              } catch (err) {
                _didIteratorError54 = true;
                _iteratorError54 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion54 && _iterator54.return != null) {
                    _iterator54.return();
                  }
                } finally {
                  if (_didIteratorError54) {
                    throw _iteratorError54;
                  }
                }
              }
            };

            for (var _iterator53 = _this2._getSiblingsElementsByClass(languageTrigger, "items")[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
              _loop2();
            }
          } catch (err) {
            _didIteratorError53 = true;
            _iteratorError53 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion53 && _iterator53.return != null) {
                _iterator53.return();
              }
            } finally {
              if (_didIteratorError53) {
                throw _iteratorError53;
              }
            }
          }
        };

        for (var _iterator52 = this.component.querySelectorAll("#site-nav .footer .language.menu button.trigger")[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError52 = true;
        _iteratorError52 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion52 && _iterator52.return != null) {
            _iterator52.return();
          }
        } finally {
          if (_didIteratorError52) {
            throw _iteratorError52;
          }
        }
      }
    }
  }, {
    key: "_setConfigsMenuBehavior",
    value: function _setConfigsMenuBehavior() {
      var _this3 = this;

      var _iteratorNormalCompletion58 = true;
      var _didIteratorError58 = false;
      var _iteratorError58 = undefined;

      try {
        for (var _iterator58 = this.component.querySelectorAll("#system-nav .header .configs.menu button.trigger")[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
          var configsTrigger = _step58.value;
          configsTrigger.addEventListener("click", function (event) {
            if (_this3._getParentElementByClass(event.currentTarget, "configs").classList.contains("is-active")) {
              var _iteratorNormalCompletion59 = true;
              var _didIteratorError59 = false;
              var _iteratorError59 = undefined;

              try {
                for (var _iterator59 = _this3.component.querySelectorAll("#system-nav .navigation .container")[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
                  var container = _step59.value;
                  var _iteratorNormalCompletion60 = true;
                  var _didIteratorError60 = false;
                  var _iteratorError60 = undefined;

                  try {
                    for (var _iterator60 = container.children[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
                      var tree = _step60.value;

                      if (tree.classList.contains("menu-nav")) {
                        tree.classList.add("is-active");
                      } else {
                        tree.classList.remove("is-active");
                      }
                    }
                  } catch (err) {
                    _didIteratorError60 = true;
                    _iteratorError60 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion60 && _iterator60.return != null) {
                        _iterator60.return();
                      }
                    } finally {
                      if (_didIteratorError60) {
                        throw _iteratorError60;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError59 = true;
                _iteratorError59 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion59 && _iterator59.return != null) {
                    _iterator59.return();
                  }
                } finally {
                  if (_didIteratorError59) {
                    throw _iteratorError59;
                  }
                }
              }

              _this3._getParentElementByClass(event.currentTarget, "configs").classList.remove("is-active");
            } else {
              var _iteratorNormalCompletion61 = true;
              var _didIteratorError61 = false;
              var _iteratorError61 = undefined;

              try {
                for (var _iterator61 = _this3.component.querySelectorAll("#system-nav .navigation .container")[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
                  var _container = _step61.value;
                  var _iteratorNormalCompletion63 = true;
                  var _didIteratorError63 = false;
                  var _iteratorError63 = undefined;

                  try {
                    for (var _iterator63 = _container.children[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
                      var _tree9 = _step63.value;

                      if (_tree9.classList.contains("info-nav")) {
                        _tree9.classList.add("is-active");
                      } else {
                        _tree9.classList.remove("is-active");
                      }
                    }
                  } catch (err) {
                    _didIteratorError63 = true;
                    _iteratorError63 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion63 && _iterator63.return != null) {
                        _iterator63.return();
                      }
                    } finally {
                      if (_didIteratorError63) {
                        throw _iteratorError63;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError61 = true;
                _iteratorError61 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion61 && _iterator61.return != null) {
                    _iterator61.return();
                  }
                } finally {
                  if (_didIteratorError61) {
                    throw _iteratorError61;
                  }
                }
              }

              _this3._getParentElementByClass(event.currentTarget, "configs").classList.add("is-active");

              var _iteratorNormalCompletion62 = true;
              var _didIteratorError62 = false;
              var _iteratorError62 = undefined;

              try {
                for (var _iterator62 = _this3._getParentElementByClass(event.currentTarget, "container").querySelectorAll(".bookmarks.menu")[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
                  var bookmarksMenu = _step62.value;
                  bookmarksMenu.classList.remove("is-active");
                }
              } catch (err) {
                _didIteratorError62 = true;
                _iteratorError62 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion62 && _iterator62.return != null) {
                    _iterator62.return();
                  }
                } finally {
                  if (_didIteratorError62) {
                    throw _iteratorError62;
                  }
                }
              }
            }
          });
        }
      } catch (err) {
        _didIteratorError58 = true;
        _iteratorError58 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion58 && _iterator58.return != null) {
            _iterator58.return();
          }
        } finally {
          if (_didIteratorError58) {
            throw _iteratorError58;
          }
        }
      }
    }
  }, {
    key: "_setBookmarksMenuBehavior",
    value: function _setBookmarksMenuBehavior() {
      var _this4 = this;

      var _iteratorNormalCompletion64 = true;
      var _didIteratorError64 = false;
      var _iteratorError64 = undefined;

      try {
        for (var _iterator64 = this.component.querySelectorAll("#system-nav .header .bookmarks.menu button.trigger")[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
          var bookmarksTrigger = _step64.value;
          bookmarksTrigger.addEventListener("click", function (event) {
            if (_this4._getParentElementByClass(event.currentTarget, "bookmarks").classList.contains("is-active")) {
              var _iteratorNormalCompletion65 = true;
              var _didIteratorError65 = false;
              var _iteratorError65 = undefined;

              try {
                for (var _iterator65 = _this4.component.querySelectorAll("#system-nav .navigation .container")[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
                  var container = _step65.value;
                  var _iteratorNormalCompletion66 = true;
                  var _didIteratorError66 = false;
                  var _iteratorError66 = undefined;

                  try {
                    for (var _iterator66 = container.children[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
                      var tree = _step66.value;

                      if (tree.classList.contains("menu-nav")) {
                        tree.classList.add("is-active");
                      } else {
                        var _iteratorNormalCompletion67 = true;
                        var _didIteratorError67 = false;
                        var _iteratorError67 = undefined;

                        try {
                          for (var _iterator67 = tree.querySelectorAll(".item")[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
                            var item = _step67.value;
                            item.classList.remove("is-active");
                          }
                        } catch (err) {
                          _didIteratorError67 = true;
                          _iteratorError67 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion67 && _iterator67.return != null) {
                              _iterator67.return();
                            }
                          } finally {
                            if (_didIteratorError67) {
                              throw _iteratorError67;
                            }
                          }
                        }

                        tree.classList.remove("is-active");
                      }
                    }
                  } catch (err) {
                    _didIteratorError66 = true;
                    _iteratorError66 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion66 && _iterator66.return != null) {
                        _iterator66.return();
                      }
                    } finally {
                      if (_didIteratorError66) {
                        throw _iteratorError66;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError65 = true;
                _iteratorError65 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion65 && _iterator65.return != null) {
                    _iterator65.return();
                  }
                } finally {
                  if (_didIteratorError65) {
                    throw _iteratorError65;
                  }
                }
              }

              _this4._getParentElementByClass(event.currentTarget, "bookmarks").classList.remove("is-active");
            } else {
              var _iteratorNormalCompletion68 = true;
              var _didIteratorError68 = false;
              var _iteratorError68 = undefined;

              try {
                for (var _iterator68 = _this4.component.querySelectorAll("#system-nav .navigation .container")[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
                  var _container2 = _step68.value;
                  var _iteratorNormalCompletion70 = true;
                  var _didIteratorError70 = false;
                  var _iteratorError70 = undefined;

                  try {
                    for (var _iterator70 = _container2.children[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
                      var _tree10 = _step70.value;

                      if (_tree10.classList.contains("favorite-nav")) {
                        var _iteratorNormalCompletion71 = true;
                        var _didIteratorError71 = false;
                        var _iteratorError71 = undefined;

                        try {
                          for (var _iterator71 = _tree10.querySelectorAll(".item")[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
                            var _item9 = _step71.value;

                            _item9.classList.add("is-active");
                          }
                        } catch (err) {
                          _didIteratorError71 = true;
                          _iteratorError71 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion71 && _iterator71.return != null) {
                              _iterator71.return();
                            }
                          } finally {
                            if (_didIteratorError71) {
                              throw _iteratorError71;
                            }
                          }
                        }

                        _tree10.classList.add("is-active");
                      } else {
                        _tree10.classList.remove("is-active");
                      }
                    }
                  } catch (err) {
                    _didIteratorError70 = true;
                    _iteratorError70 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion70 && _iterator70.return != null) {
                        _iterator70.return();
                      }
                    } finally {
                      if (_didIteratorError70) {
                        throw _iteratorError70;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError68 = true;
                _iteratorError68 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion68 && _iterator68.return != null) {
                    _iterator68.return();
                  }
                } finally {
                  if (_didIteratorError68) {
                    throw _iteratorError68;
                  }
                }
              }

              _this4._getParentElementByClass(event.currentTarget, "bookmarks").classList.add("is-active");

              var _iteratorNormalCompletion69 = true;
              var _didIteratorError69 = false;
              var _iteratorError69 = undefined;

              try {
                for (var _iterator69 = _this4._getParentElementByClass(event.currentTarget, "container").querySelectorAll(".configs.menu")[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
                  var configsMenu = _step69.value;
                  configsMenu.classList.remove("is-active");
                }
              } catch (err) {
                _didIteratorError69 = true;
                _iteratorError69 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion69 && _iterator69.return != null) {
                    _iterator69.return();
                  }
                } finally {
                  if (_didIteratorError69) {
                    throw _iteratorError69;
                  }
                }
              }
            }
          });
        }
      } catch (err) {
        _didIteratorError64 = true;
        _iteratorError64 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion64 && _iterator64.return != null) {
            _iterator64.return();
          }
        } finally {
          if (_didIteratorError64) {
            throw _iteratorError64;
          }
        }
      }
    }
  }]);

  return BRNavigation;
}();

/* harmony default export */ __webpack_exports__["default"] = (BRNavigation);

/***/ }),

/***/ "./src/js/components/scrim.js":
/*!************************************!*\
  !*** ./src/js/components/scrim.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRScrim = /*#__PURE__*/function () {
  function BRScrim(name, component) {
    _classCallCheck(this, BRScrim);

    this.name = name;
    this.component = component;

    this._setType();

    this._setBehavior();
  }

  _createClass(BRScrim, [{
    key: "_setType",
    value: function _setType() {
      if (this.component.classList.contains("is-foco")) {
        this._type = "is-foco";
      }

      if (this.component.classList.contains("is-legibilidade")) {
        this._type = "is-legibilidade";
      }

      if (this.component.classList.contains("is-inibicao")) {
        this._type = "is-inibicao";
      }
    }
  }, {
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      if (this.component.classList.contains("is-foco")) {
        this.component.addEventListener("click", function (event) {
          _this._hideScrim(event);
        });
      }
    }
  }, {
    key: "_hideScrim",
    value: function _hideScrim(event) {
      event.currentTarget.classList.remove("is-active");
    }
  }, {
    key: "showScrim",
    value: function showScrim() {
      if (this._type === "is-foco") {
        this.component.classList.add("is-active");
      }
    }
  }]);

  return BRScrim;
}();

var scrimList = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = window.document.querySelectorAll(".br-scrim")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var brScrim = _step.value;
    scrimList.push(new BRScrim("br-scrim", brScrim));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRScrim);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = window.document.querySelectorAll(".bloco1 button")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var buttonBloco1 = _step2.value;
    buttonBloco1.addEventListener("click", function () {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = scrimList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _brScrim = _step3.value;

          _brScrim.showScrim();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    });
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRSelect = /*#__PURE__*/function () {
  function BRSelect(name, component) {
    _classCallCheck(this, BRSelect);

    this.name = name;
    this.component = component;

    this._setUpBrSelect();
  }

  _createClass(BRSelect, [{
    key: "_setUpBrSelect",
    value: function _setUpBrSelect() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll('select')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var select = _step.value;
          this.component.appendChild(this._buildSelectionField(select));
          this.component.appendChild(this._buildOptionsList(select));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._setBehavior();
    }
  }, {
    key: "_buildSelectionField",
    value: function _buildSelectionField(select) {
      var selectionField = window.document.createElement('button');
      selectionField.setAttribute('class', 'select-selected unselected');

      if (select.disabled) {
        selectionField.setAttribute('disabled', 'disabled');
      }

      selectionField.appendChild(this._buildOptionItem(select.options[select.selectedIndex].innerHTML));
      selectionField.appendChild(this._buildIcon());
      return selectionField;
    }
  }, {
    key: "_buildOptionItem",
    value: function _buildOptionItem(text) {
      var optionItem = window.document.createElement('span');
      optionItem.innerHTML = text;
      return optionItem;
    }
  }, {
    key: "_buildIcon",
    value: function _buildIcon() {
      var icon = window.document.createElement('i');
      icon.setAttribute('class', 'fas fa-chevron-down');
      return icon;
    }
  }, {
    key: "_buildOptionsList",
    value: function _buildOptionsList(select) {
      var optionsList = window.document.createElement('div');
      optionsList.setAttribute('class', 'select-items select-hide');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = select.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var option = _step2.value;
          var optionField = window.document.createElement('button');
          optionField.appendChild(this._buildOptionItem(option.innerHTML));
          optionsList.appendChild(optionField);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return optionsList;
    }
  }, {
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var itemSelected = _step3.value;
          itemSelected.addEventListener('click', function (event) {
            event.stopPropagation();
            itemSelected.nextElementSibling.classList.toggle('select-hide');

            _this._closeSelects(itemSelected);

            window.document.addEventListener('click', function () {
              _this._closeSelects();
            });
          });
        };

        for (var _iterator3 = this.component.querySelectorAll('.select-selected')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop2 = function _loop2() {
          var item = _step4.value;
          item.addEventListener('click', function (event) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _this.component.querySelectorAll('select')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var select = _step5.value;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = Array.from(select.options).entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _step6$value = _slicedToArray(_step6.value, 2),
                        index = _step6$value[0],
                        option = _step6$value[1];

                    if (option.innerHTML === item.firstChild.innerHTML) {
                      select.selectedIndex = index;
                      select.dispatchEvent(new Event('change'));
                      item.parentNode.previousSibling.firstChild.innerHTML = item.firstChild.innerHTML;
                      item.parentNode.previousSibling.setAttribute('class', 'select-selected');
                      item.parentNode.classList.add('select-hide');
                      var _iteratorNormalCompletion7 = true;
                      var _didIteratorError7 = false;
                      var _iteratorError7 = undefined;

                      try {
                        for (var _iterator7 = item.parentNode.querySelectorAll('button')[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                          var optionItem = _step7.value;

                          if (optionItem === item) {
                            optionItem.setAttribute('class', 'same-as-selected');
                          } else {
                            optionItem.removeAttribute('class');
                          }
                        }
                      } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                            _iterator7.return();
                          }
                        } finally {
                          if (_didIteratorError7) {
                            throw _iteratorError7;
                          }
                        }
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          });
        };

        for (var _iterator4 = this.component.querySelectorAll('.select-items button')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "_closeSelects",
    value: function _closeSelects(element) {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = window.document.querySelectorAll('.br-select')[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var brSelect = _step8.value;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = brSelect.querySelectorAll('.select-selected')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var itemSelected = _step9.value;

              if (itemSelected !== element) {
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = brSelect.querySelectorAll('.select-items')[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var optionsList = _step10.value;
                    optionsList.classList.add('select-hide');
                    window.document.removeEventListener('click', this._closeSelects);
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                      _iterator10.return();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  }, {
    key: "_deleteSelect",
    value: function _deleteSelect() {
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = this.component.querySelectorAll('button.select-selected')[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var selectionField = _step11.value;
          selectionField.remove();
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = this.component.querySelectorAll('div.select-items')[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var optionsList = _step12.value;
          optionsList.remove();
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    }
  }, {
    key: "updateSelect",
    value: function updateSelect() {
      this._deleteSelect();

      this._setUpBrSelect();
    }
  }]);

  return BRSelect;
}();
/* Refatorar e incluir na classe */


function getBrSelect(component) {
  for (var _i2 = 0, _selectList = selectList; _i2 < _selectList.length; _i2++) {
    var brSelect = _selectList[_i2];
    var _iteratorNormalCompletion13 = true;
    var _didIteratorError13 = false;
    var _iteratorError13 = undefined;

    try {
      for (var _iterator13 = brSelect.component.querySelectorAll('select')[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
        var select = _step13.value;

        if (component == select) {
          return brSelect;
        }
      }
    } catch (err) {
      _didIteratorError13 = true;
      _iteratorError13 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
          _iterator13.return();
        }
      } finally {
        if (_didIteratorError13) {
          throw _iteratorError13;
        }
      }
    }
  }
}

function updateSelect(component) {
  getBrSelect(component).updateSelect();
}

function createBrSelect() {
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = window.document.querySelectorAll('.br-select')[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var brSelect = _step14.value;
      var equal = false;

      for (var _i3 = 0, _selectList2 = selectList; _i3 < _selectList2.length; _i3++) {
        var existedBrSelect = _selectList2[_i3];

        if (brSelect == existedBrSelect.component) {
          equal = true;
          break;
        }
      }

      if (!equal) {
        selectList.push(new BRSelect('br-select', brSelect));
      }
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
        _iterator14.return();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }
}

var selectList = [];
var _iteratorNormalCompletion15 = true;
var _didIteratorError15 = false;
var _iteratorError15 = undefined;

try {
  for (var _iterator15 = window.document.querySelectorAll('.br-select')[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
    var brSelect = _step15.value;
    selectList.push(new BRSelect('br-select', brSelect));
  }
  /* Refatorar e incluir na classe */

} catch (err) {
  _didIteratorError15 = true;
  _iteratorError15 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
      _iterator15.return();
    }
  } finally {
    if (_didIteratorError15) {
      throw _iteratorError15;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRSelect);

/***/ }),

/***/ "./src/js/components/table.js":
/*!************************************!*\
  !*** ./src/js/components/table.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRTable = /*#__PURE__*/function () {
  function BRTable(name, component, sequence) {
    _classCallCheck(this, BRTable);

    this.name = name;
    this.component = component;
    this._sequence = sequence;

    this._setBehavior();
  }

  _createClass(BRTable, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      this._cloneHeader();

      this._setHeaderWidth();

      this._toogleSearch();

      this._toogleGrid();

      this._setClickActions();
    }
  }, {
    key: "_cloneHeader",
    value: function _cloneHeader() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll(".responsive")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var responsive = _step.value;

          this._setSyncScroll(responsive);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var scrollerTag = document.createElement("div");

      this._setSyncScroll(scrollerTag);

      scrollerTag.classList.add("scroller");
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.component.querySelectorAll("table thead tr th")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var header = _step2.value;
          var clonedHeader = document.createElement("div");
          clonedHeader.classList.add("item");
          clonedHeader.innerHTML = header.innerHTML;

          if (header.offsetWidth) {
            clonedHeader.style.flex = "1 0 ".concat(header.offsetWidth, "px");
          }

          scrollerTag.appendChild(clonedHeader);

          if (clonedHeader.firstElementChild) {
            if (clonedHeader.firstElementChild.classList.contains("br-checkbox")) {
              var clonedCheckboxId = "headers-" + this.component.id + "-check-all";
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = clonedHeader.firstElementChild.querySelectorAll("input")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var checkboxInput = _step4.value;
                  checkboxInput.id = clonedCheckboxId;
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = clonedHeader.firstElementChild.querySelectorAll("label")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var checkboxLabel = _step5.value;
                  checkboxLabel.setAttribute("for", clonedCheckboxId);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var headersTag = document.createElement("div");
      headersTag.classList.add("headers");
      headersTag.appendChild(scrollerTag);
      var isResponsive = false;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.component.querySelectorAll(".br-table > div")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var child = _step3.value;

          if (child.classList.contains("responsive")) {
            child.insertAdjacentElement("beforebegin", headersTag);
            isResponsive = true;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (!isResponsive) {
        this.component.appendChild(headersTag);
      }
    }
  }, {
    key: "_setSyncScroll",
    value: function _setSyncScroll(element) {
      element.classList.add('syncscroll');
      element.setAttribute('name', 'table-' + this._sequence);
    }
  }, {
    key: "_setHeaderWidth",
    value: function _setHeaderWidth() {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.component.querySelectorAll(".headers > div")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var clonedHeader = _step6.value;
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = this.component.querySelectorAll("table thead tr th").entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                  index = _step7$value[0],
                  header = _step7$value[1];

              clonedHeader.children[index].style.flex = "1 0 ".concat(header.offsetWidth, "px");
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: "_toogleSearch",
    value: function _toogleSearch() {
      var _this = this;

      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        var _loop = function _loop() {
          var searchBar = _step8.value;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = _this.component.querySelectorAll(".search-trigger")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var searchTrigger = _step9.value;
              searchTrigger.addEventListener("click", function () {
                searchBar.classList.add("is-active");
              });
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = searchBar.querySelectorAll(".search-close")[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var searchClose = _step10.value;
              searchClose.addEventListener("click", function () {
                searchBar.classList.remove("is-active");
              });
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        };

        for (var _iterator8 = this.component.querySelectorAll(".search-bar")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  }, {
    key: "_toogleGrid",
    value: function _toogleGrid() {
      var _this2 = this;

      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = this.component.querySelectorAll(".grid-large-trigger")[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var gridLTrigger = _step11.value;
          gridLTrigger.addEventListener("click", function () {
            _this2.component.classList.remove("is-grid-small");
          });
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = this.component.querySelectorAll(".grid-small-trigger")[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var gridSTrigger = _step12.value;
          gridSTrigger.addEventListener("click", function () {
            _this2.component.classList.add("is-grid-small");
          });
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    }
  }, {
    key: "_setClickActions",
    value: function _setClickActions() {
      var _this3 = this;

      var headerCheckbox = this.component.querySelector(".headers [name='check'] [type='checkbox']");
      var tableCheckboxes = this.component.querySelectorAll("tbody [name='check'] [type='checkbox']");
      var selectedBar = this.component.querySelector('.selected-bar');
      var info_select_all = this.component.querySelector('.selected-bar .info .select-all');

      if (tableCheckboxes) {
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          var _loop2 = function _loop2() {
            var checkbox = _step13.value;
            checkbox.addEventListener('click', function () {
              _this3._checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox);
            });
          };

          for (var _iterator13 = tableCheckboxes[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }
      }

      if (headerCheckbox) {
        headerCheckbox.addEventListener('click', function () {
          _this3._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
        });
      }

      if (info_select_all) {
        info_select_all.addEventListener('click', function () {
          _this3._checkAllTable(selectedBar, tableCheckboxes, headerCheckbox);
        });
      }
    }
  }, {
    key: "_setRow",
    value: function _setRow(checkbox, check) {
      var tr = checkbox.parentNode.parentNode.parentNode;

      if (check) {
        tr.classList.add('is-selected');
        checkbox.parentNode.classList.add('is-inverted');
        checkbox.checked = true;
      } else {
        tr.classList.remove('is-selected');
        checkbox.parentNode.classList.remove('is-inverted');
        checkbox.checked = false;
      }
    }
  }, {
    key: "_checkRow",
    value: function _checkRow(checkbox, selectedBar, tableCheckboxes, headerCheckbox) {
      var check = checkbox.checked;

      this._setRow(checkbox, check);

      this._setSelectedBar(check ? 1 : -1, selectedBar, tableCheckboxes, headerCheckbox);
    }
  }, {
    key: "_checkAllRows",
    value: function _checkAllRows(tableCheckboxes) {
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = tableCheckboxes[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var checkbox = _step14.value;

          this._setRow(checkbox, true);
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  }, {
    key: "_uncheckAllRows",
    value: function _uncheckAllRows(tableCheckboxes) {
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = tableCheckboxes[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var checkbox = _step15.value;

          this._setRow(checkbox, false);
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
            _iterator15.return();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }
    }
  }, {
    key: "_checkAllTable",
    value: function _checkAllTable(selectedBar, tableCheckboxes, headerCheckbox) {
      var count = tableCheckboxes.length;
      var info_count = selectedBar.querySelector('.info .count');
      var total = parseInt(info_count.innerHTML, 10);

      if (total == count) {
        this._uncheckAllRows(tableCheckboxes);

        count = -1 * count;
      } else {
        this._checkAllRows(tableCheckboxes);
      }

      this._setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox);
    }
  }, {
    key: "_setSelectedBar",
    value: function _setSelectedBar(count, selectedBar, tableCheckboxes, headerCheckbox) {
      var info_count = selectedBar.querySelector('.info .count');
      var info_text = selectedBar.querySelector('.info .text');
      var mobile_ico = selectedBar.querySelector('.info .select-all').children[0];
      var total = count < 2 ? parseInt(info_count.innerHTML, 10) + count : count;

      if (total > 0) {
        selectedBar.classList.add('is-active');
        info_count.innerHTML = total;
        info_text.innerHTML = total > 1 ? 'itens selecionados' : 'item selecionado';
        if (headerCheckbox) headerCheckbox.parentNode.classList.add('is-checking');

        if (mobile_ico) {
          mobile_ico.classList.add('fa-minus-square');
          mobile_ico.classList.remove('fa-check-square');
        }

        if (total == tableCheckboxes.length) {
          if (headerCheckbox) {
            headerCheckbox.checked = true;
            headerCheckbox.parentNode.classList.remove('is-checking');
          }

          if (mobile_ico) {
            mobile_ico.classList.remove('fa-minus-square');
            mobile_ico.classList.add('fa-check-square');
          }
        }
      } else {
        info_count.innerHTML = 0;

        if (headerCheckbox) {
          headerCheckbox.checked = false;
          headerCheckbox.parentNode.classList.remove('is-checking');
        }

        if (mobile_ico) {
          mobile_ico.classList.remove('fa-check-square');
          mobile_ico.classList.add('fa-minus-square');
        }

        selectedBar.classList.remove('is-active');
      }
    }
  }]);

  return BRTable;
}();

var tableList = [];
var _iteratorNormalCompletion16 = true;
var _didIteratorError16 = false;
var _iteratorError16 = undefined;

try {
  for (var _iterator16 = window.document.querySelectorAll(".br-table").entries()[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
    var _step16$value = _slicedToArray(_step16.value, 2),
        index = _step16$value[0],
        brTable = _step16$value[1];

    tableList.push(new BRTable("br-table", brTable, index));
  }
} catch (err) {
  _didIteratorError16 = true;
  _iteratorError16 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
      _iterator16.return();
    }
  } finally {
    if (_didIteratorError16) {
      throw _iteratorError16;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRTable);

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRTabs = /*#__PURE__*/function () {
  function BRTabs(name, component) {
    _classCallCheck(this, BRTabs);

    this.name = name;
    this.component = component;

    this._setBehavior();
  }

  _createClass(BRTabs, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.component.querySelectorAll('.item')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          item.addEventListener("click", function (event) {
            _this._switchTab(event.currentTarget);
          }, false);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_switchTab",
    value: function _switchTab(currentTab) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.component.querySelectorAll('.item')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var tab = _step2.value;

          if (tab === currentTab) {
            tab.classList.add("is-active");
          } else {
            tab.classList.remove("is-active");
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return BRTabs;
}();

var abasList = [];
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = window.document.querySelectorAll('.br-tabs')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var brTabs = _step3.value;
    abasList.push(new BRTabs('br-tabs', brTabs));
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRTabs);

/***/ }),

/***/ "./src/js/components/upload.js":
/*!*************************************!*\
  !*** ./src/js/components/upload.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BRUpload = /*#__PURE__*/function () {
  function BRUpload(name, component) {
    _classCallCheck(this, BRUpload);

    this.name = name;
    this.component = component;
    this._inputElement = this.component.querySelector('.upload-input');
    this._fileList = this.component.querySelector('.upload-file-list');
    this._header = this.component.querySelector('.upload-header');
    this._info = this.component.querySelector('.upload-info');
    this._size = this.component.querySelector('.upload-size');
    this._sizeNum = this.component.querySelector('.upload-size-num');
    this._sizeBytes = this.component.querySelector('.upload-size-bytes');
    this._fileArray = [];

    this._setBehavior();
  }

  _createClass(BRUpload, [{
    key: "_setBehavior",
    value: function _setBehavior() {
      var _this = this;

      this.component.addEventListener('dragenter', function (event) {
        _this._drag(event);
      }, false);
      this.component.addEventListener('dragover', function (event) {
        _this._drag(event);
      }, false);
      this.component.addEventListener('drop', function (event) {
        _this._drop(event);
      }, false);

      if (this._inputElement) {
        this._fileArray = Array.from(this._inputElement.files);

        this._inputElement.addEventListener('change', function (event) {
          _this._handleFiles(event);
        }, false);
      }
    }
  }, {
    key: "_drag",
    value: function _drag(event) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "_drop",
    value: function _drop(event) {
      event.stopPropagation();
      event.preventDefault();
      var dt = event.dataTransfer;
      var files = dt.files;

      this._handleFiles(files);
    }
  }, {
    key: "_handleFiles",
    value: function _handleFiles(files) {
      console.log(this._fileArray);
      var newFiles = !files.length ? Array.from(this._inputElement.files) : Array.from(files);
      this._fileArray = this._fileArray.concat(newFiles);
      console.log(this._fileArray);
      this._info.style.display = 'none';
      this._header.innerHTML = 'Arquivos Selecionados';

      this._updateFileList();
    }
  }, {
    key: "_updateFileList",
    value: function _updateFileList() {
      var _this2 = this;

      if (!this._fileArray.length) {
        this._fileList.innerHTML = '';
        this._info.style.display = '';
        this._header.innerHTML = 'Arraste e solte o(s) arquivo(s) do seu computador';
      } else {
        this._fileList.innerHTML = '';
        var list = document.createElement('ul');

        this._fileList.appendChild(list);

        var _loop = function _loop(i) {
          var li = document.createElement('li');
          list.appendChild(li);
          var info = document.createElement('span');
          info.innerHTML = _this2._fileArray[i].name;
          li.appendChild(info);
          var del = document.createElement('div');
          del.addEventListener('click', function () {
            _this2._removeFile(i, event);
          }, false);
          del.className = 'del';
          var img = document.createElement('i');
          img.className = 'fa fa-times';
          del.appendChild(img);
          li.appendChild(del);
        };

        for (var i = 0; i < this._fileArray.length; i++) {
          _loop(i);
        }
      }

      this._updateSize();
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var nBytes = 0,
          oFiles = this._fileArray,
          nFiles = oFiles.length;

      for (var nFileId = 0; nFileId < nFiles; nFileId++) {
        nBytes += oFiles[nFileId].size;
      }

      var sOutput = nBytes + ' bytes';

      for (var aMultiples = ['KB', 'MB', 'GB', 'TB'], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(3) + ' ' + aMultiples[nMultiple];
      }

      this._size.style.visibility = nFiles > 0 ? 'visible' : 'hidden';
      this._sizeNum.innerHTML = nFiles;
      this._sizeBytes.innerHTML = sOutput;
    }
  }, {
    key: "_removeFile",
    value: function _removeFile(index, event) {
      event.stopPropagation();
      event.preventDefault();

      this._fileArray.splice(index, 1);

      this._updateFileList();
    }
  }]);

  return BRUpload;
}();

var uploadList = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = window.document.querySelectorAll('.br-upload')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var brUpload = _step.value;
    uploadList.push(new BRUpload('br-upload', brUpload));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BRUpload);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_globals_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/components/globals-class */ "./src/js/components/globals-class.js");


/***/ }),

/***/ "./src/scss/dsgov.scss":
/*!*****************************!*\
  !*** ./src/scss/dsgov.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/scss/dsgov.scss ./src/js/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\markh\projetos\dsgov\design-system\src\scss\dsgov.scss */"./src/scss/dsgov.scss");
module.exports = __webpack_require__(/*! C:\Users\markh\projetos\dsgov\design-system\src\js\index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=dsgov.js.map