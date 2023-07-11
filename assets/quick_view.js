let french__crown = {
  ajaxAppliedJS: function(){

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /******/(function (modules) {

    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) {
        /******/return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/var module = installedModules[moduleId] = {
        /******/i: moduleId,
        /******/l: false,
        /******/exports: {}
        /******/ };
      /******/
      /******/ // Execute the module function
      /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
      /******/if (!__webpack_require__.o(exports, name)) {
        /******/Object.defineProperty(exports, name, {
          /******/configurable: false,
          /******/enumerable: true,
          /******/get: getter
          /******/ });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
        return module['default'];
      } :
      /******/function getModuleExports() {
        return module;
      };
      /******/__webpack_require__.d(getter, 'a', getter);
      /******/return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 22);
    /******/
  })(
    /************************************************************************/
    /******/[
      /* 0 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
   * Various DOM helper
   */

        var Dom = function () {
          function Dom() {
            _classCallCheck(this, Dom);
          }

          _createClass(Dom, null, [{
            key: 'getSiblings',

            /**
       * Get all the previous and next siblings, optionally filtered by a selector
       */
            value: function getSiblings(element, filter) {
              var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var siblings = [];
              var currentElement = element;

              // Do the previous first
              while (currentElement = currentElement.previousElementSibling) {
                if (!filter || currentElement.matches(filter)) {
                  siblings.push(currentElement);
                }
              }

              if (includeSelf) {
                siblings.push(element);
              }

              // Then the next side
              currentElement = element;

              while (currentElement = currentElement.nextElementSibling) {
                if (!filter || currentElement.matches(filter)) {
                  siblings.push(currentElement);
                }
              }

              return siblings;
            }

            /**
       * By default, NodeList object are only iterable with forEach on newest browsers. To support it cross-browser,
       * we need to normalize it
       */

          }, {
            key: 'nodeListToArray',
            value: function nodeListToArray(nodeList, filter) {
              var items = [];

              for (var i = 0; i !== nodeList.length; ++i) {
                if (!filter || nodeList[i].matches(filter)) {
                  items.push(nodeList[i]);
                }
              }

              return items;
            }

            /**
       * Calculate an element width with its margin
       */

          }, {
            key: 'outerWidthWithMargin',
            value: function outerWidthWithMargin(element) {
              var width = element.offsetWidth,
                  style = getComputedStyle(element);

              width += parseInt(style.marginLeft) + parseInt(style.marginRight);

              return width;
            }

            /**
       * Calculate an element height with its margin
       */

          }, {
            key: 'outerHeightWithMargin',
            value: function outerHeightWithMargin(element) {
              var height = element.offsetHeight,
                  style = getComputedStyle(element);

              height += parseInt(style.marginTop) + parseInt(style.marginBottom);

              return height;
            }
          }]);

          return Dom;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Dom;

        /***/
      },
      /* 1 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(2);

        var Carousel = function () {
          function Carousel(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Carousel);

            this.element = element;
            this.initialConfig = JSON.parse(element.getAttribute('data-flickity-config'));
            this.options = options;

            this._attachListeners();
            this._build();
          }

          _createClass(Carousel, [{
            key: 'destroy',
            value: function destroy() {
              this.flickityInstance.destroy();

              if (this.initialConfig['breakpoints'] !== undefined) {
                document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
              }
            }
          }, {
            key: 'selectCell',
            value: function selectCell(index) {
              var shouldPause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

              if (shouldPause) {
                this.flickityInstance.pausePlayer();
              }

              this.flickityInstance.select(index, false, !shouldAnimate);
            }
          }, {
            key: 'pausePlayer',
            value: function pausePlayer() {
              this.flickityInstance.pausePlayer();
            }
          }, {
            key: 'unpausePlayer',
            value: function unpausePlayer() {
              this.flickityInstance.unpausePlayer();
            }
          }, {
            key: 'resize',
            value: function resize() {
              this.flickityInstance.resize();
            }
          }, {
            key: 'getSelectedIndex',
            value: function getSelectedIndex() {
              return this.flickityInstance.selectedIndex;
            }
          }, {
            key: 'getSelectedCell',
            value: function getSelectedCell() {
              return this.flickityInstance.selectedCell.element;
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              if (this.initialConfig['breakpoints'] !== undefined) {
                this._onBreakpointChangedListener = this._onBreakpointChanged.bind(this);
                document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);
              }
            }

            /**
       * Create the carousel instance
       */

          }, {
            key: '_build',
            value: function _build() {
              var _this = this;

              var config = this._processConfig();

              this.flickityInstance = new Flickity(this.element, config);
              this._validateDraggable();

              this.selectedIndex = this.flickityInstance.selectedIndex;

              this.flickityInstance.on('resize', this._validateDraggable.bind(this));

              if (this.options['onSelect']) {
                this.flickityInstance.on('select', function () {
                  // Flickity will send the "select" event whenever the window resize (even on mobile...), as a consequence we need to check
                  // first if the slide index have changed or not (cf: https://github.com/metafizzy/flickity/issues/529)

                  if (_this.selectedIndex !== _this.flickityInstance.selectedIndex) {
                    _this.options['onSelect'](_this.flickityInstance.selectedIndex, _this.flickityInstance.selectedCell.element);
                    _this.selectedIndex = _this.flickityInstance.selectedIndex;
                  }
                });
              }

              if (this.options['onClick']) {
                this.flickityInstance.on('staticClick', function (event, pointer, cell, index) {
                  _this.options['onClick'](cell, index);
                });
              }
            }

            /**
       * By default, Flickity does not disable draggable automatically if there is nothing to slide. We therefore manually do the check here by checking
       * if the displayed elements equals to the amount of elements
       */

          }, {
            key: '_validateDraggable',
            value: function _validateDraggable() {
              var isActive = this.flickityInstance.isActive || false;

              if (!isActive || !this.flickityInstance.options['draggable']) {
                return; // Not draggable, so nothing to do
              }

              if (undefined === this.flickityInstance.selectedElements || this.flickityInstance.selectedElements.length === this.flickityInstance.cells.length) {
                this.flickityInstance.unbindDrag();
              } else {
                this.flickityInstance.bindDrag();
              }
            }

            /**
       * Flickity is a CSS driven library and hence it is hard to setup some stuff in pure JS
       */

          }, {
            key: '_processConfig',
            value: function _processConfig() {
              var config = Object.assign({}, this.initialConfig);

              delete config['breakpoints'];

              if (this.initialConfig['breakpoints'] === undefined) {
                return config; // No change, we simply return the config as it is
              }

              var breakpoints = this.initialConfig['breakpoints'];

              breakpoints.forEach(function (breakpoint) {
                if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint(breakpoint['matches'])) {
                  config = Object.assign(config, breakpoint['settings']);
                }
              });

              return config;
            }

            /**
       * Verify if the breakpoint has changed, and optionally update the carousel
       */

          }, {
            key: '_onBreakpointChanged',
            value: function _onBreakpointChanged() {
              // The breakpoint may have changed, so we delete the carousel and rebuild it
              this.flickityInstance.destroy();
              this._build();
            }
          }]);

          return Carousel;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Carousel;

        /***/
      },
      /* 2 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var Responsive = function () {
          function Responsive() {
            var _this2 = this;

            _classCallCheck(this, Responsive);

            this.currentBreakpoint = Responsive.getCurrentBreakpoint();

            window.addEventListener('resize', function () {
              var newBreakpoint = Responsive.getCurrentBreakpoint();

              if (_this2.currentBreakpoint === newBreakpoint) {
                return;
              }

              document.dispatchEvent(new CustomEvent('breakpoint:changed', { detail: {
                previousBreakpoint: _this2.currentBreakpoint,
                currentBreakpoint: newBreakpoint
              } }));

              _this2.currentBreakpoint = newBreakpoint;
            });
          }

          _createClass(Responsive, null, [{
            key: 'matchesBreakpoint',
            value: function matchesBreakpoint(breakpoint) {
              switch (breakpoint) {
                case 'phone':
                  return window.matchMedia('screen and (max-width: 640px)').matches;

                case 'tablet':
                  return window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches;

                case 'tablet-and-up':
                  return window.matchMedia('screen and (min-width: 641px)').matches;

                case 'pocket':
                  return window.matchMedia('screen and (max-width: 1007px)').matches;

                case 'lap':
                  return window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches;

                case 'lap-and-up':
                  return window.matchMedia('screen and (min-width: 1008px)').matches;

                case 'desk':
                  return window.matchMedia('screen and (min-width: 1280px)').matches;

                case 'widescreen':
                  return window.matchMedia('screen and (min-width: 1600px)').matches;
              }
            }
          }, {
            key: 'getCurrentBreakpoint',
            value: function getCurrentBreakpoint() {
              if (window.matchMedia('screen and (max-width: 640px)').matches) {
                return 'phone';
              }

              if (window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches) {
                return 'tablet';
              }

              if (window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches) {
                return 'lap';
              }

              if (window.matchMedia('screen and (min-width: 1280px)').matches) {
                return 'desk';
              }
            }
          }]);

          return Responsive;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Responsive;

        /***/
      },
      /* 3 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var Accessibility = function () {
          function Accessibility() {
            _classCallCheck(this, Accessibility);
          }

          _createClass(Accessibility, null, [{
            key: 'trapFocus',

            /**
       * Traps the focus in a particular container
       */
            value: function trapFocus(container, namespace) {
              this.listeners = this.listeners || {};

              // We check if there is an element with the attribute "autofocus"
              var elementToFocus = container.querySelector('[autofocus]') || container;

              container.setAttribute('tabindex', '-1');
              elementToFocus.focus();

              this.listeners[namespace] = function (event) {
                if (container !== event.target && !container.contains(event.target)) {
                  container.focus();
                }
              };

              document.addEventListener('focusin', this.listeners[namespace]);
            }

            /**
       * Removes the trap of focus in a particular container
       */

          }, {
            key: 'removeTrapFocus',
            value: function removeTrapFocus(container, namespace) {
              if (container) {
                container.removeAttribute('tabindex');
              }

              document.removeEventListener('focusin', this.listeners[namespace]);
            }

            /**
       * Reset any previous trap focus
       */

          }, {
            key: 'clearTrapFocus',
            value: function clearTrapFocus() {
              for (var key in this.listeners) {
                if (this.listeners.hasOwnProperty(key)) {
                  document.removeEventListener('focusin', this.listeners[key]);
                }
              }

              this.listeners = {};
            }
          }]);

          return Accessibility;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Accessibility;

        /***/
      },
      /* 4 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Dom__ = __webpack_require__(0);

        var Currency = function () {
          function Currency() {
            _classCallCheck(this, Currency);
          }

          _createClass(Currency, null, [{
            key: 'formatMoney',

            /**
       * Format money values based on your shop currency settings
       *
       * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
       * @param  {String} format - shop money_format setting
       * @return {String} value - formatted value
       */
            value: function formatMoney(cents, format) {
              if (typeof cents === 'string') {
                cents = cents.replace('.', '');
              }

              var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
                  formatString = format || '${{amount}}';

              function defaultTo(value, defaultValue) {
                return value == null || value !== value ? defaultValue : value;
              }

              function formatWithDelimiters(number, precision, thousands, decimal) {
                precision = defaultTo(precision, 2);
                thousands = defaultTo(thousands, ',');
                decimal = defaultTo(decimal, '.');

                if (isNaN(number) || number == null) {
                  return 0;
                }

                number = (number / 100.0).toFixed(precision);

                var parts = number.split('.'),
                    dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                    centsAmount = parts[1] ? decimal + parts[1] : '';

                return dollarsAmount + centsAmount;
              }

              var value = '';

              switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                  value = formatWithDelimiters(cents, 2);
                  break;
                case 'amount_no_decimals':
                  value = formatWithDelimiters(cents, 0);
                  break;
                case 'amount_with_space_separator':
                  value = formatWithDelimiters(cents, 2, ' ', '.');
                  break;
                case 'amount_no_decimals_with_comma_separator':
                  value = formatWithDelimiters(cents, 0, ',', '.');
                  break;
                case 'amount_no_decimals_with_space_separator':
                  value = formatWithDelimiters(cents, 0, ' ');
                  break;
                case 'amount_with_comma_separator':
                  value = formatWithDelimiters(cents, 2, '.', ',');
                  break;
              }

              if (formatString.indexOf('with_comma_separator') !== -1) {
                return formatString.replace(placeholderRegex, value).replace(',00', '');
              } else {
                return formatString.replace(placeholderRegex, value).replace('.00', '');
              }
            }

            /**
       * Allow to converts all elements from one currency to another. To speed up, you can pass a selector that will
       * act as the root element
       */

          }, {
            key: 'convertAll',
            value: function convertAll(selector) {
              var _this3 = this;

              var moneyFormats = {
                "USD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} USD"
                },
                "EUR": {
                  "money_format": "&euro;{{amount}}",
                  "money_with_currency_format": "&euro;{{amount}} EUR"
                },
                "GBP": {
                  "money_format": "&pound;{{amount}}",
                  "money_with_currency_format": "&pound;{{amount}} GBP"
                },
                "CAD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} CAD"
                },
                "ALL": {
                  "money_format": "Lek {{amount}}",
                  "money_with_currency_format": "Lek {{amount}} ALL"
                },
                "DZD": {
                  "money_format": "DA {{amount}}",
                  "money_with_currency_format": "DA {{amount}} DZD"
                },
                "AOA": {
                  "money_format": "Kz{{amount}}",
                  "money_with_currency_format": "Kz{{amount}} AOA"
                },
                "ARS": {
                  "money_format": "${{amount_with_comma_separator}}",
                  "money_with_currency_format": "${{amount_with_comma_separator}} ARS"
                },
                "AMD": {
                  "money_format": "{{amount}} AMD",
                  "money_with_currency_format": "{{amount}} AMD"
                },
                "AWG": {
                  "money_format": "Afl{{amount}}",
                  "money_with_currency_format": "Afl{{amount}} AWG"
                },
                "AUD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} AUD"
                },
                "BBD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} Bds"
                },
                "AZN": {
                  "money_format": "m.{{amount}}",
                  "money_with_currency_format": "m.{{amount}} AZN"
                },
                "BDT": {
                  "money_format": "Tk {{amount}}",
                  "money_with_currency_format": "Tk {{amount}} BDT"
                },
                "BSD": {
                  "money_format": "BS${{amount}}",
                  "money_with_currency_format": "BS${{amount}} BSD"
                },
                "BHD": {
                  "money_format": "{{amount}} BD",
                  "money_with_currency_format": "{{amount}} BHD"
                },
                "BYR": {
                  "money_format": "Br {{amount}}",
                  "money_with_currency_format": "Br {{amount}} BYR"
                },
                "BZD": {
                  "money_format": "BZ${{amount}}",
                  "money_with_currency_format": "BZ${{amount}} BZD"
                },
                "BTN": {
                  "money_format": "Nu {{amount}}",
                  "money_with_currency_format": "Nu {{amount}} BTN"
                },
                "BAM": {
                  "money_format": "KM {{amount_with_comma_separator}}",
                  "money_with_currency_format": "KM {{amount_with_comma_separator}} BAM"
                },
                "BRL": {
                  "money_format": "R$ {{amount_with_comma_separator}}",
                  "money_with_currency_format": "R$ {{amount_with_comma_separator}} BRL"
                },
                "BOB": {
                  "money_format": "Bs{{amount_with_comma_separator}}",
                  "money_with_currency_format": "Bs{{amount_with_comma_separator}} BOB"
                },
                "BWP": {
                  "money_format": "P{{amount}}",
                  "money_with_currency_format": "P{{amount}} BWP"
                },
                "BND": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} BND"
                },
                "BGN": {
                  "money_format": "{{amount}} Ð»Ð²",
                  "money_with_currency_format": "{{amount}} Ð»Ð² BGN"
                },
                "MMK": {
                  "money_format": "K{{amount}}",
                  "money_with_currency_format": "K{{amount}} MMK"
                },
                "KHR": {
                  "money_format": "KHR{{amount}}",
                  "money_with_currency_format": "KHR{{amount}}"
                },
                "KYD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} KYD"
                },
                "XAF": {
                  "money_format": "FCFA{{amount}}",
                  "money_with_currency_format": "FCFA{{amount}} XAF"
                },
                "CLP": {
                  "money_format": "${{amount_no_decimals}}",
                  "money_with_currency_format": "${{amount_no_decimals}} CLP"
                },
                "CNY": {
                  "money_format": "&#165;{{amount}}",
                  "money_with_currency_format": "&#165;{{amount}} CNY"
                },
                "COP": {
                  "money_format": "${{amount_with_comma_separator}}",
                  "money_with_currency_format": "${{amount_with_comma_separator}} COP"
                },
                "CRC": {
                  "money_format": "&#8353; {{amount_with_comma_separator}}",
                  "money_with_currency_format": "&#8353; {{amount_with_comma_separator}} CRC"
                },
                "HRK": {
                  "money_format": "{{amount_with_comma_separator}} kn",
                  "money_with_currency_format": "{{amount_with_comma_separator}} kn HRK"
                },
                "CZK": {
                  "money_format": "{{amount_with_comma_separator}} K&#269;",
                  "money_with_currency_format": "{{amount_with_comma_separator}} K&#269;"
                },
                "DKK": {
                  "money_format": "{{amount_with_comma_separator}}",
                  "money_with_currency_format": "kr.{{amount_with_comma_separator}}"
                },
                "DOP": {
                  "money_format": "RD$ {{amount}}",
                  "money_with_currency_format": "RD$ {{amount}}"
                },
                "XCD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "EC${{amount}}"
                },
                "EGP": {
                  "money_format": "LE {{amount}}",
                  "money_with_currency_format": "LE {{amount}} EGP"
                },
                "ETB": {
                  "money_format": "Br{{amount}}",
                  "money_with_currency_format": "Br{{amount}} ETB"
                },
                "XPF": {
                  "money_format": "{{amount_no_decimals_with_comma_separator}} XPF",
                  "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} XPF"
                },
                "FJD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "FJ${{amount}}"
                },
                "GMD": {
                  "money_format": "D {{amount}}",
                  "money_with_currency_format": "D {{amount}} GMD"
                },
                "GHS": {
                  "money_format": "GH&#8373;{{amount}}",
                  "money_with_currency_format": "GH&#8373;{{amount}}"
                },
                "GTQ": {
                  "money_format": "Q{{amount}}",
                  "money_with_currency_format": "{{amount}} GTQ"
                },
                "GYD": {
                  "money_format": "G${{amount}}",
                  "money_with_currency_format": "${{amount}} GYD"
                },
                "GEL": {
                  "money_format": "{{amount}} GEL",
                  "money_with_currency_format": "{{amount}} GEL"
                },
                "HNL": {
                  "money_format": "L {{amount}}",
                  "money_with_currency_format": "L {{amount}} HNL"
                },
                "HKD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "HK${{amount}}"
                },
                "HUF": {
                  "money_format": "{{amount_no_decimals_with_comma_separator}}",
                  "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} Ft"
                },
                "ISK": {
                  "money_format": "{{amount_no_decimals}} kr",
                  "money_with_currency_format": "{{amount_no_decimals}} kr ISK"
                },
                "INR": {
                  "money_format": "Rs. {{amount}}",
                  "money_with_currency_format": "Rs. {{amount}}"
                },
                "IDR": {
                  "money_format": "{{amount_with_comma_separator}}",
                  "money_with_currency_format": "Rp {{amount_with_comma_separator}}"
                },
                "ILS": {
                  "money_format": "{{amount}} NIS",
                  "money_with_currency_format": "{{amount}} NIS"
                },
                "JMD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} JMD"
                },
                "JPY": {
                  "money_format": "&#165;{{amount_no_decimals}}",
                  "money_with_currency_format": "&#165;{{amount_no_decimals}} JPY"
                },
                "JEP": {
                  "money_format": "&pound;{{amount}}",
                  "money_with_currency_format": "&pound;{{amount}} JEP"
                },
                "JOD": {
                  "money_format": "{{amount}} JD",
                  "money_with_currency_format": "{{amount}} JOD"
                },
                "KZT": {
                  "money_format": "{{amount}} KZT",
                  "money_with_currency_format": "{{amount}} KZT"
                },
                "KES": {
                  "money_format": "KSh{{amount}}",
                  "money_with_currency_format": "KSh{{amount}}"
                },
                "KWD": {
                  "money_format": "{{amount}} KD",
                  "money_with_currency_format": "{{amount}} KWD"
                },
                "KGS": {
                  "money_format": "Ð»Ð²{{amount}}",
                  "money_with_currency_format": "Ð»Ð²{{amount}}"
                },
                "LVL": {
                  "money_format": "Ls {{amount}}",
                  "money_with_currency_format": "Ls {{amount}} LVL"
                },
                "LBP": {
                  "money_format": "L&pound;{{amount}}",
                  "money_with_currency_format": "L&pound;{{amount}} LBP"
                },
                "LTL": {
                  "money_format": "{{amount}} Lt",
                  "money_with_currency_format": "{{amount}} Lt"
                },
                "MGA": {
                  "money_format": "Ar {{amount}}",
                  "money_with_currency_format": "Ar {{amount}} MGA"
                },
                "MKD": {
                  "money_format": "Ð´ÐµÐ½ {{amount}}",
                  "money_with_currency_format": "Ð´ÐµÐ½ {{amount}} MKD"
                },
                "MOP": {
                  "money_format": "MOP${{amount}}",
                  "money_with_currency_format": "MOP${{amount}}"
                },
                "MVR": {
                  "money_format": "Rf{{amount}}",
                  "money_with_currency_format": "Rf{{amount}} MRf"
                },
                "MXN": {
                  "money_format": "$ {{amount}}",
                  "money_with_currency_format": "$ {{amount}} MXN"
                },
                "MYR": {
                  "money_format": "RM{{amount}} MYR",
                  "money_with_currency_format": "RM{{amount}} MYR"
                },
                "MUR": {
                  "money_format": "Rs {{amount}}",
                  "money_with_currency_format": "Rs {{amount}} MUR"
                },
                "MDL": {
                  "money_format": "{{amount}} MDL",
                  "money_with_currency_format": "{{amount}} MDL"
                },
                "MAD": {
                  "money_format": "{{amount}} dh",
                  "money_with_currency_format": "Dh {{amount}} MAD"
                },
                "MNT": {
                  "money_format": "{{amount_no_decimals}} &#8366",
                  "money_with_currency_format": "{{amount_no_decimals}} MNT"
                },
                "MZN": {
                  "money_format": "{{amount}} Mt",
                  "money_with_currency_format": "Mt {{amount}} MZN"
                },
                "NAD": {
                  "money_format": "N${{amount}}",
                  "money_with_currency_format": "N${{amount}} NAD"
                },
                "NPR": {
                  "money_format": "Rs{{amount}}",
                  "money_with_currency_format": "Rs{{amount}} NPR"
                },
                "ANG": {
                  "money_format": "&fnof;{{amount}}",
                  "money_with_currency_format": "{{amount}} NA&fnof;"
                },
                "NZD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} NZD"
                },
                "NIO": {
                  "money_format": "C${{amount}}",
                  "money_with_currency_format": "C${{amount}} NIO"
                },
                "NGN": {
                  "money_format": "&#8358;{{amount}}",
                  "money_with_currency_format": "&#8358;{{amount}} NGN"
                },
                "NOK": {
                  "money_format": "kr {{amount_with_comma_separator}}",
                  "money_with_currency_format": "kr {{amount_with_comma_separator}} NOK"
                },
                "OMR": {
                  "money_format": "{{amount_with_comma_separator}} OMR",
                  "money_with_currency_format": "{{amount_with_comma_separator}} OMR"
                },
                "PKR": {
                  "money_format": "Rs.{{amount}}",
                  "money_with_currency_format": "Rs.{{amount}} PKR"
                },
                "PGK": {
                  "money_format": "K {{amount}}",
                  "money_with_currency_format": "K {{amount}} PGK"
                },
                "PYG": {
                  "money_format": "Gs. {{amount_no_decimals_with_comma_separator}}",
                  "money_with_currency_format": "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
                },
                "PEN": {
                  "money_format": "S/. {{amount}}",
                  "money_with_currency_format": "S/. {{amount}} PEN"
                },
                "PHP": {
                  "money_format": "&#8369;{{amount}}",
                  "money_with_currency_format": "&#8369;{{amount}} PHP"
                },
                "PLN": {
                  "money_format": "{{amount_with_comma_separator}} zl",
                  "money_with_currency_format": "{{amount_with_comma_separator}} zl PLN"
                },
                "QAR": {
                  "money_format": "QAR {{amount_with_comma_separator}}",
                  "money_with_currency_format": "QAR {{amount_with_comma_separator}}"
                },
                "RON": {
                  "money_format": "{{amount_with_comma_separator}} lei",
                  "money_with_currency_format": "{{amount_with_comma_separator}} lei RON"
                },
                "RUB": {
                  "money_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
                  "money_with_currency_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
                },
                "RWF": {
                  "money_format": "{{amount_no_decimals}} RF",
                  "money_with_currency_format": "{{amount_no_decimals}} RWF"
                },
                "WST": {
                  "money_format": "WS$ {{amount}}",
                  "money_with_currency_format": "WS$ {{amount}} WST"
                },
                "SAR": {
                  "money_format": "{{amount}} SR",
                  "money_with_currency_format": "{{amount}} SAR"
                },
                "STD": {
                  "money_format": "Db {{amount}}",
                  "money_with_currency_format": "Db {{amount}} STD"
                },
                "RSD": {
                  "money_format": "{{amount}} RSD",
                  "money_with_currency_format": "{{amount}} RSD"
                },
                "SCR": {
                  "money_format": "Rs {{amount}}",
                  "money_with_currency_format": "Rs {{amount}} SCR"
                },
                "SGD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} SGD"
                },
                "SYP": {
                  "money_format": "S&pound;{{amount}}",
                  "money_with_currency_format": "S&pound;{{amount}} SYP"
                },
                "ZAR": {
                  "money_format": "R {{amount}}",
                  "money_with_currency_format": "R {{amount}} ZAR"
                },
                "KRW": {
                  "money_format": "&#8361;{{amount_no_decimals}}",
                  "money_with_currency_format": "&#8361;{{amount_no_decimals}} KRW"
                },
                "LKR": {
                  "money_format": "Rs {{amount}}",
                  "money_with_currency_format": "Rs {{amount}} LKR"
                },
                "SEK": {
                  "money_format": "{{amount_no_decimals}} kr",
                  "money_with_currency_format": "{{amount_no_decimals}} kr SEK"
                },
                "CHF": {
                  "money_format": "{{amount}} CHF",
                  "money_with_currency_format": "{{amount}} CHF"
                },
                "TWD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} TWD"
                },
                "THB": {
                  "money_format": "{{amount}} &#xe3f;",
                  "money_with_currency_format": "{{amount}} &#xe3f; THB"
                },
                "TZS": {
                  "money_format": "{{amount}} TZS",
                  "money_with_currency_format": "{{amount}} TZS"
                },
                "TTD": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}} TTD"
                },
                "TND": {
                  "money_format": "{{amount}}",
                  "money_with_currency_format": "{{amount}} DT"
                },
                "TRY": {
                  "money_format": "{{amount}}TL",
                  "money_with_currency_format": "{{amount}}TL"
                },
                "UGX": {
                  "money_format": "Ush {{amount_no_decimals}}",
                  "money_with_currency_format": "Ush {{amount_no_decimals}} UGX"
                },
                "UAH": {
                  "money_format": "₴{{amount}}",
                  "money_with_currency_format": "{{amount}} UAH"
                },
                "AED": {
                  "money_format": "Dhs. {{amount}}",
                  "money_with_currency_format": "Dhs. {{amount}} AED"
                },
                "UYU": {
                  "money_format": "${{amount_with_comma_separator}}",
                  "money_with_currency_format": "${{amount_with_comma_separator}} UYU"
                },
                "VUV": {
                  "money_format": "${{amount}}",
                  "money_with_currency_format": "${{amount}}VT"
                },
                "VEF": {
                  "money_format": "Bs. {{amount_with_comma_separator}}",
                  "money_with_currency_format": "Bs. {{amount_with_comma_separator}} VEF"
                },
                "VND": {
                  "money_format": "{{amount_no_decimals_with_comma_separator}}&#8363;",
                  "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} VND"
                },
                "XBT": {
                  "money_format": "{{amount_no_decimals}} BTC",
                  "money_with_currency_format": "{{amount_no_decimals}} BTC"
                },
                "XOF": {
                  "money_format": "CFA{{amount}}",
                  "money_with_currency_format": "CFA{{amount}} XOF"
                },
                "ZMW": {
                  "money_format": "K{{amount_no_decimals_with_comma_separator}}",
                  "money_with_currency_format": "ZMW{{amount_no_decimals_with_comma_separator}}"
                }
              };

              var baseCurrency = window.theme.shopCurrency,
                  newCurrency = document.querySelector('.CurrencySelector__Select').value;

              __WEBPACK_IMPORTED_MODULE_0__Dom__["default"].nodeListToArray((selector || document).querySelectorAll('[data-money-convertible]')).forEach(function (item) {
                if (!item.hasAttribute('data-currency-' + baseCurrency)) {
                  item.setAttribute('data-currency-' + baseCurrency, item.innerHTML);
                }

                // If the amount has already been converted, we leave it alone.
                if (item.getAttribute('data-currency') === newCurrency) {
                  return;
                }

                var baseAmount = item.getAttribute('data-currency-' + baseCurrency);

                // If we are converting to a currency that we have saved, we will use the saved amount.
                if (item.hasAttribute('data-currency-' + newCurrency)) {
                  item.innerHTML = item.getAttribute('data-currency-' + newCurrency);
                } else {
                  var newFormat = moneyFormats[newCurrency][window.theme.currencyConversionMoneyFormat] || '{{amount}}';

                  // We have to normalize by replacing dot by comma and comma by dot
                  if (window.theme.moneyFormat.indexOf('with_comma_separator') !== -1) {
                    baseAmount = baseAmount.replace(/[,.]/g, function (match) {
                      // If `,` is matched return `.`, if `.` matched return `,`
                      return match === ',' ? '.' : ',';
                    });
                  }

                  // Converting to Y for the first time? Let's get to it!
                  var cents = window.Currency.convert(parseFloat(baseAmount.replace(/^[^0-9]+|[^0-9.]/g, '', ''), 10) * 100, baseCurrency, newCurrency);

                  if (window.theme.currencyConversionRoundAmounts) {
                    cents = Math.round(cents / 100) * 100;
                  }

                  var newFormattedAmount = _this3.formatMoney(cents, newFormat);

                  item.innerHTML = newFormattedAmount;
                  item.setAttribute('data-currency-' + newCurrency, newFormattedAmount);
                }

                // We record the new currency locally.
                item.setAttribute('data-currency', newCurrency);
              });

              localStorage.setItem('currency', newCurrency);
            }
          }]);

          return Currency;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Currency;

        /***/
      },
      /* 5 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
   * Note: this was a feature that was added at the very end and couldn't do something much cleaner without rewriting large parts of the theme...
   */

        var ProductItemColorSwatch = function () {
          function ProductItemColorSwatch(element) {
            _classCallCheck(this, ProductItemColorSwatch);

            this.element = element;
            this.delegateElement = new domDelegate.Delegate(this.element);

            this.delegateElement.on('change', '.ColorSwatch__Radio', this._colorChanged.bind(this));
          }

          _createClass(ProductItemColorSwatch, [{
            key: '_colorChanged',
            value: function _colorChanged(event, target) {
              // We need to change the URL of the various links
              var productItem = target.closest('.ProductItem'),
                  variantUrl = target.getAttribute('data-variant-url');

              productItem.querySelector('.ProductItem__ImageWrapper').setAttribute('href', variantUrl);
              productItem.querySelector('.ProductItem__Title > a').setAttribute('href', variantUrl);

              // If we have a custom image for the variant, we change it
              var originalImageElement = productItem.querySelector('.ProductItem__Image:not(.ProductItem__Image--alternate)');

              if (target.hasAttribute('data-image-url') && target.getAttribute('data-image-id') !== originalImageElement.getAttribute('data-image-id')) {
                var newImageElement = document.createElement('img');
                newImageElement.className = 'ProductItem__Image Image--fadeIn Image--lazyLoad';
                newImageElement.setAttribute('data-image-id', target.getAttribute('data-image-id'));
                newImageElement.setAttribute('data-src', target.getAttribute('data-image-url'));
                newImageElement.setAttribute('data-widths', target.getAttribute('data-image-widths'));
                newImageElement.setAttribute('data-sizes', 'auto');

                // Replace the original node
                if (window.theme.productImageSize === 'natural') {
                  originalImageElement.parentNode.style.paddingBottom = 100.0 / target.getAttribute('data-image-aspect-ratio') + '%';
                }

                originalImageElement.parentNode.style.setProperty('--aspect-ratio', target.getAttribute('data-image-aspect-ratio'));
                originalImageElement.parentNode.replaceChild(newImageElement, originalImageElement);
              }
            }
          }]);

          return ProductItemColorSwatch;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ProductItemColorSwatch;

        /***/
      },
      /* 6 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Accessibility__ = __webpack_require__(3);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AccessibilityHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_0__Accessibility__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Animation__ = __webpack_require__(7);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AnimationHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_1__Animation__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Currency__ = __webpack_require__(4);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CurrencyHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_2__Currency__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__Dom__ = __webpack_require__(0);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "DomHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_3__Dom__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__Image__ = __webpack_require__(10);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ImageHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_4__Image__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__Responsive__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ResponsiveHelper", function () {
          return __WEBPACK_IMPORTED_MODULE_5__Responsive__["default"];
        });

        /***/
      },
      /* 7 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var Animation = function () {
          function Animation() {
            _classCallCheck(this, Animation);
          }

          _createClass(Animation, null, [{
            key: 'slideUp',

            /**
       * Slide up aims to close an element. To do that, we take the height of the element, and set it to 0 to
       * force an animation
       */
            value: function slideUp(element) {
              element.style.height = element.scrollHeight + 'px'; // Force previous height to allow CSS transition
              element.offsetHeight; // Force redraw
              element.style.height = 0;
            }

            /**
       * Slide down aims to open an element. To do that, you must make sure that the element you are trying to open
       * is set with height: 0; overflow: hidden in the CSS, and does not contain any padding nor margin.
       */

          }, {
            key: 'slideDown',
            value: function slideDown(element) {
              if (element.style.height === 'auto') {
                return;
              }

              // To do the animation we temporarily hide it, check the height, and transition to it
              element.style.height = element.firstElementChild.scrollHeight + 'px';

              var transitionEnded = function transitionEnded(event) {
                if (event.propertyName === 'height') {
                  element.style.height = 'auto'; // Allows the content to grow normally
                  element.removeEventListener('transitionend', transitionEnded);
                }
              };

              element.addEventListener('transitionend', transitionEnded);
            }
          }]);

          return Animation;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Animation;

        /***/
      },
      /* 8 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(6);

        var Drawer = function () {
          function Drawer(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Drawer);

            this.element = element;
            this.delegateElement = new domDelegate.Delegate(this.element);
            this.delegateBody = new domDelegate.Delegate(document.body);

            this.onOpen = options['onOpen'] || function () {};
            this.onClose = options['onClose'] || function () {};

            this.isOpen = false;
            this.direction = this.element.classList.contains('Drawer--fromLeft') ? 'fromLeft' : 'fromRight';

            this.pageOverlayElement = document.querySelector('.PageOverlay');

            this._attachListeners();
          }

          _createClass(Drawer, [{
            key: 'destroy',
            value: function destroy() {
              this.delegateBody.off('click', '[data-action="open-drawer"][data-drawer-id="' + this.element.id + '"]');
              this.delegateBody.off('click', '[data-action="close-drawer"][data-drawer-id="' + this.element.id + '"]');
              window.removeEventListener('resize', this._calculateMaxHeightListener);
            }
          }, {
            key: 'toggle',
            value: function toggle() {
              this.isOpen ? this.close() : this.open();
            }
          }, {
            key: 'open',
            value: function open(event) {
              if (this.isOpen) {
                return;
              }

              if (event) {
                event.preventDefault();
              }

              this.element.setAttribute('aria-hidden', 'false');
              this._calculateMaxHeight();

              document.documentElement.classList.add('no-scroll');

              // This prevent the body to scroll on iOS. This is honestly a bit hacky, but until the platform supports "touch-action: none" like
              // other browsers, this is the only way to achieve that
              disableBodyScroll(true, '[data-scrollable]');
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(this.element, 'drawer');

              // We attach an event to the page overlay to close it
              //         this.pageOverlayElement.classList.add('is-visible');
              //         this.pageOverlayElement.addEventListener('click', this._closeListener);

              this.isOpen = true;

              this.onOpen(); // Call the callback to allow other code to hook their logic

              return false;
            }
          }, {
            key: 'close',
            value: function close(event) {
              if (!this.isOpen) {
                return;
              }

              if (event) {
                event.preventDefault();
              }

              this.element.setAttribute('aria-hidden', 'true');

              document.documentElement.classList.remove('no-scroll');

              disableBodyScroll(false, '[data-scrollable]');
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(this.element, 'drawer');

              this.pageOverlayElement.classList.remove('is-visible');
              this.pageOverlayElement.removeEventListener('click', this._closeListener);

              this.isOpen = false;

              this.onClose(); // Call the callback to allow other code to hook their logic
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._openListener = this.open.bind(this);
              this._closeListener = this.close.bind(this);
              this._calculateMaxHeightListener = this._calculateMaxHeight.bind(this);

              this.delegateBody.on('click', '[data-action="open-drawer"][data-drawer-id="' + this.element.id + '"]', this._openListener);
              this.delegateBody.on('click', '[data-action="close-drawer"][data-drawer-id="' + this.element.id + '"]', this._closeListener);
              this.element.addEventListener('keyup', this._handleKeyboard.bind(this));
              window.addEventListener('resize', this._calculateMaxHeightListener);
            }

            /**
       * Make sure that we force a max-height so that the drawer always stays on screen
       */

          }, {
            key: '_calculateMaxHeight',
            value: function _calculateMaxHeight() {
              this.element.style.maxHeight = window.innerHeight + 'px';
            }
          }, {
            key: '_handleKeyboard',


            /**
       * Handle a11y events
       */
            value: function _handleKeyboard(event) {
              if (this.isOpen && event.keyCode === 27) {
                this.close();
              }
            }
          }]);

          return Drawer;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Drawer;

        /***/
      },
      /* 9 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Dom__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Responsive__ = __webpack_require__(2);

        var Popover = function () {
          function Popover(element, options) {
            _classCallCheck(this, Popover);

            this.element = element;
            this.delegateElement = new domDelegate.Delegate(this.element);

            this.activator = options['activator'] || document.querySelector('[aria-controls="' + element.getAttribute('id') + '"]');
            this.preferredPosition = options['preferredPosition'] || 'bottom';
            this.isOpen = false;

            this.onValueChanged = options['onValueChanged'] || function () {};
            this.onOpen = options['onOpen'] || function () {};
            this.onClose = options['onClose'] || function () {};

            this.showOverlay = options['showOverlay'] === undefined ? true : options['showOverlay'];
            this.pageOverlayElement = document.querySelector('.PageOverlay');

            this._attachListeners();
          }

          _createClass(Popover, [{
            key: 'destroy',
            value: function destroy() {
              this.element.removeEventListener('keyup', this._handleKeyboardListener);
              this.delegateElement.off('click');
              this.activator.removeEventListener('click', this._toggleListener);
            }
          }, {
            key: 'toggle',
            value: function toggle() {
              this.isOpen ? this.close() : this.open();
            }
          }, {
            key: 'open',
            value: function open() {
              // Note: the additional check on the aria-controls is used here so that a given activator can be used on different
              //       popovers and be modified dynamically in JavaScript
              if (this.isOpen || this.activator.getAttribute('aria-controls') !== this.element.id) {
                return;
              }
              this.element.setAttribute('aria-hidden', 'false');
              this.activator.setAttribute('aria-expanded', 'true');

              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(this.element, 'popover');
              disableBodyScroll(true, '[data-scrollable]');

              //         document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open
              $('.size-swatch-group .close-swatch').click();
              if (__WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('lap-and-up')) {
                document.body.addEventListener('click', this._clickOutsideListener);
                this._position();
              } else {
                this.element.removeAttribute('style');
                this.element.setAttribute('style', 'bottom: ' + parseInt(-$('.quick_product_view').scrollTop()) + 'px');
                
                if (this.showOverlay) {
                  this.pageOverlayElement.classList.add('is-visible');
                  this.pageOverlayElement.addEventListener('click', this._closeListener);
                  console.log(this.pageOverlayElement);
                }
              }

              this.onOpen(this); // Call the callback to allow other code to hook their logic
              this.isOpen = true;
            }
          }, {
            key: 'close',
            value: function close() {
              if (!this.isOpen) {
                return;
              }

              this.element.setAttribute('aria-hidden', 'true');
              this.activator.setAttribute('aria-expanded', 'false');

              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(this.element, 'popover');
              disableBodyScroll(false, '[data-scrollable]');

              //         document.documentElement.classList.remove('no-scroll');

              if (__WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('lap-and-up')) {
                document.body.removeEventListener('click', this._clickOutsideListener);
              } else if (this.showOverlay) {
                this.pageOverlayElement.classList.remove('is-visible');
                this.pageOverlayElement.removeEventListener('click', this._closeListener);
              }

              this.onClose(this); // Call the callback to allow other code to hook their logic
              this.isOpen = false;
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._handleKeyboardListener = this._handleKeyboard.bind(this);
              this._clickOutsideListener = this._clickOutside.bind(this);
              this._closeListener = this.close.bind(this);
              this._toggleListener = this.toggle.bind(this);

              this.element.addEventListener('keyup', this._handleKeyboardListener);
              this.activator.addEventListener('click', this._toggleListener);

              this.delegateElement.on('click', '[data-action="close-popover"]', this.close.bind(this));
              this.delegateElement.on('click', '[data-action="select-value"]', this._valueChanged.bind(this));
            }

            /**
       * Whenever a value is selected, it can notify a callback so that the calling code can do its own logic in response
       * of the value change
       */

          }, {
            key: '_valueChanged',
            value: function _valueChanged(event) {
              __WEBPACK_IMPORTED_MODULE_1__helper_Dom__["default"].getSiblings(event.target, '.is-selected').forEach(function (item) {
                return item.classList.remove('is-selected');
              });

              let selectedVariant = event.target.getAttribute('data-value');

              let variantObj1 = $("[data-product-pants-addons-json]").html();
              let variantObj2 = $("[data-product-waistcoat-addons-json]").html();

              if($(".extra_pair").length > 0 && variantObj1 != undefined){
                let extraPairOFPantProductObjParse = JSON.parse(variantObj1);

                let flag = false;
                extraPairOFPantProductObjParse.product.variants.forEach(variant => {
                  if(selectedVariant == variant.title && variant.available == false){
                    flag = true;
                  }
                });

                if(flag){
                  $(".extra_pair").closest("label").css("display","none");
                  $(".extra_pair").prop('checked', false);
                }else{
                  $(".extra_pair").closest("label").css("display","block");
                }
              }

              if($(".button_vest").length > 0 && variantObj2 != undefined){
                let extraPairOFWaistcoatProductObjParse = JSON.parse(variantObj2);

                let flag = false;
                extraPairOFWaistcoatProductObjParse.product.variants.forEach(variant => {
                  if(selectedVariant == variant.title && variant.available == false){
                    flag = true;
                  }
                });
                if(flag){
                  $(".button_vest").closest("label").css("display","none");
                  $(".button_vest").prop('checked', false);
                }else{
                  $(".button_vest").closest("label").css("display","block");
                }
              }

              event.target.classList.add('is-selected');

              // If there is a callback in option we call it with the value
              this.onValueChanged(event.target.getAttribute('data-value'), event.target, this.activator);
              this.close();
            }

            /**
       * Callback that is called to decide if we should close the popover when a click is captured outside
       */

          }, {
            key: '_clickOutside',
            value: function _clickOutside(event) {
              if (!event.target.closest('.Popover') && !event.target.closest('.Modal') && event.target !== this.activator && !this.activator.contains(event.target)) {
                this.close();
              }
            }

            /**
       * On desktop, we reposition the popover in JavaScript by doing some smart logic to detect the most appropriate area
       */

          }, {
            key: '_position',
            value: function _position() {
              var _this4 = this;

              var topPosition = 0,
                  rightPosition = 0,
                  position = '',
                  alignment = '',
                  threshold = 20;

              fastdom.measure(function () {
                var windowHeight = window.innerHeight,
                    activatorBoundingRect = _this4.activator.getBoundingClientRect(),
                    halfHeight = windowHeight / 2;
                if (_this4.preferredPosition === 'bottom') {
                  alignment = 'right';

                  if (_this4.element.clientHeight <= windowHeight - (activatorBoundingRect.bottom + threshold) || windowHeight - activatorBoundingRect.bottom >= halfHeight) {
                    position = 'bottom';
                  } else {
                    position = 'top';
                  }
                } else if (_this4.preferredPosition === 'top') {
                  alignment = 'right';

                  if (_this4.element.clientHeight <= activatorBoundingRect.top - threshold || activatorBoundingRect.top >= halfHeight) {
                    position = 'top';
                  } else {
                    position = 'bottom';
                  }
                } else {
                  position = 'left';

                  // Is there enough space to use the center alignment (which is preferred)?
                  var halfElementHeight = _this4.element.clientHeight / 2;

                  if (activatorBoundingRect.top >= halfElementHeight && windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
                    alignment = 'center';
                  } else if (windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
                    alignment = 'bottom';
                  } else {
                    alignment = 'top';
                  }
                }
                if (position === 'top') {
                  topPosition = activatorBoundingRect.top - _this4.element.clientHeight - threshold;
                  rightPosition = window.innerWidth - activatorBoundingRect.right;
                } else if (position === 'bottom') {
                  topPosition = activatorBoundingRect.bottom + threshold;
                  rightPosition = window.innerWidth - activatorBoundingRect.right;
                } else {
//                   rightPosition = window.innerWidth - activatorBoundingRect.left + threshold;
                  rightPosition = _this4.activator.left;
                  rightPosition = $('.Product__InfoWrapper').width() - 20;
                  if (alignment === 'center') {
                    topPosition = $('.quick_product_view').scrollTop() + (activatorBoundingRect.top - _this4.element.clientHeight / 2);
                  } else if (alignment === 'top') {
                    topPosition = activatorBoundingRect.bottom - _this4.element.clientHeight;
                  } else {
                    topPosition = activatorBoundingRect.top;
                  }
                }
              });
	
              
              fastdom.mutate(function () {
                ['Popover--positionBottom', 'Popover--positionTop', 'Popover--positionCenter', 'Popover--alignTop', 'Popover--alignCenter', 'Popover--alignBottom'].map(function (item) {
                  return _this4.element.classList.remove(item);
                });
                _this4.element.classList.add('Popover--position' + (position.charAt(0).toUpperCase() + position.slice(1)));
                _this4.element.classList.add('Popover--align' + (alignment.charAt(0).toUpperCase() + alignment.slice(1)));

                _this4.element.setAttribute('style', 'top: ' + parseInt(topPosition) + 'px; right: ' + parseInt(rightPosition) + 'px;');
              });
            }

            /**
       * Handle a11y events
       */

          }, {
            key: '_handleKeyboard',
            value: function _handleKeyboard(event) {
              if (this.isOpen && event.keyCode === 27) {
                this.close();
              }
            }
          }]);

          return Popover;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Popover;

        /***/
      },
      /* 10 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var Image = function () {
          function Image() {
            _classCallCheck(this, Image);
          }

          _createClass(Image, null, [{
            key: 'getSizedImageUrl',

            /**
       * Create a CDN URL (similar to the img_url filter in Liquid)
       */
            value: function getSizedImageUrl(src, size) {
              if (size === null) {
                return src;
              }

              if (size === 'master') {
                return src.replace(/http(s)?:/, '');
              }

              var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

              if (match) {
                var prefix = src.split(match[0]);
                var suffix = match[0];

                return (prefix[0] + '_' + size + suffix).replace(/http(s)?:/, '');
              } else {
                return null;
              }
            }

            /**
       * From a given set of desired sizes and a given image, filter out any unwanted sizes
       */

          }, {
            key: 'getSupportedSizes',
            value: function getSupportedSizes(image, desiredSizes) {
              var supportedSizes = [],
                  imageWidth = image['width'];

              desiredSizes.forEach(function (width) {
                if (imageWidth >= width) {
                  supportedSizes.push(width);
                }
              });

              return supportedSizes;
            }
          }]);

          return Image;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Image;

        /***/
      },
      /* 11 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_Popover__ = __webpack_require__(9);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Dom__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Form__ = __webpack_require__(18);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_VariantSelector__ = __webpack_require__(15);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__helper_Currency__ = __webpack_require__(4);
        /**
   * This component handles all the logic of switching variant, updating product meta...
   */

        var ProductVariants = function () {
          function ProductVariants(container, options) {
            var _this5 = this;

            _classCallCheck(this, ProductVariants);

            this.element = container;
            this.delegateElement = new domDelegate.Delegate(this.element);
            this.options = options;

            var jsonData = JSON.parse(this.element.querySelector('[data-product-json]').innerHTML);

            this.productData = jsonData['product'];
            this.variantsInventories = jsonData['inventories'] || {};
            this.masterSelector = this.element.querySelector('#product-select-' + this.productData['id']);

            // We init value with the first selected variant
            this.productData['variants'].forEach(function (variant) {
              if (variant['id'] === jsonData['selected_variant_id']) {
                _this5.currentVariant = variant;
                _this5.option1 = variant['option1'];
                _this5.option2 = variant['option2'];
                _this5.option3 = variant['option3'];


                if($('#hf-sleeve').length && _this5.option2 != null){
                  var sleeves = _this5.option2;
                  if(sleeves.indexOf('Sleeve') > -1 || sleeves.indexOf('sleeve') > -1){
                    var res = sleeves.replace(' Sleeves','').replace(' sleeves','').replace('full','Full').replace('half','Half');
                    $('#hf-sleeve').val(res);
                  }
                }
              }
            });

            this._attachListeners();
            this._createSelectors();
          }

          _createClass(ProductVariants, [{
            key: 'destroy',
            value: function destroy() {
              this.delegateElement.off('click');
              this.formPopovers.forEach(function (popover) {
                return popover.destroy();
              });
              this.formVariantSelectors.forEach(function (selector) {
                return selector.destroy();
              });
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
              this.delegateElement.on('click', '[data-action="decrease-quantity"]', this._decreaseQuantity.bind(this));
              this.delegateElement.on('click', '[data-action="increase-quantity"]', this._increaseQuantity.bind(this));
              this.delegateElement.on('change', '[name="quantity"]', this._validateQuantity.bind(this));

              // Hook when a radio button change
              this.delegateElement.on('change', '.ProductForm__Option [type="radio"]', this._onOptionChanged.bind(this));
            }

            /**
       * Selectors can either be popovers or dedicated variant selectors. We therefore pre-create them all here
       */

          }, {
            key: '_createSelectors',
            value: function _createSelectors() {
              var _this6 = this;

              // Create the instances for each selector
              this.formPopovers = [];
              this.formVariantSelectors = [];

              __WEBPACK_IMPORTED_MODULE_1__helper_Dom__["default"].nodeListToArray(this.element.querySelectorAll('.OptionSelector')).forEach(function (item) {
                var popover = new __WEBPACK_IMPORTED_MODULE_0__components_Popover__["default"](item, { preferredPosition: 'left', onValueChanged: _this6._onOptionChanged.bind(_this6) });
                _this6.formPopovers.push(popover);
                let selecter = _this6.masterSelector['id'];
                //           writeCookie("vairant-id",'');
                //                       $('.buy-now-1').hide();
              });

              __WEBPACK_IMPORTED_MODULE_1__helper_Dom__["default"].nodeListToArray(this.element.querySelectorAll('.VariantSelector')).forEach(function (item) {
                var variantSelector = new __WEBPACK_IMPORTED_MODULE_3__components_VariantSelector__["default"](item, { onValueChanged: _this6._onOptionChanged.bind(_this6) });
                _this6.formVariantSelectors.push(variantSelector);
              });
            }

            /**
       * ---------------------------------------------------------------------------------------------------
       * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
       *
       * Please note that this code is highly dependant on the markup and classes, so make sure to NOT
       * edit this code
       * ---------------------------------------------------------------------------------------------------
       */

            /**
       * This callback is called whenever the variant changes and allows to update data about the active variant
       */

          }, {
            key: '_onVariantChanged',
            value: function _onVariantChanged(previousVariant, newVariant) {
              // 1st: the prices
              this._updateProductPrices(newVariant, previousVariant);

              // 2nd: update inventory
              this._updateInventory(newVariant, previousVariant);

              // 3rd: update SKU
              this._updateSku(newVariant, previousVariant);
              if(newVariant){
                var variant_id = newVariant.id;
                var qty;
                $('.variant_list option').each(function(){
                  var option_id = $(this).val();
                  if(option_id == variant_id){
                    qty = parseInt($(this).data('quantity'));
                  }
                });

                if(qty == 1){
                  $('.few-left').text('Only 1 item left, hurry up!')
                }
                else if(qty < 6 && qty != 0){
                  $('.few-left').text('Only '+qty+' items left, hurry up!')
                }
                else{
                  $('.few-left').text('')
                }
              }

              // 4th: the add to cart button
              this._updateAddToCartButton(newVariant, previousVariant);

              if (window.theme.currencyConversionEnabled) {
                __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].convertAll(this.element);
              }

              // Finally, we send an event so that other system could hook and do their own logic
              this.element.dispatchEvent(new CustomEvent('variant:changed', {
                bubbles: true,
                detail: { variant: newVariant, previousVariant: previousVariant }
              }));

            }

            /**
       * Update the prices (optionally showing compare at price)
       */

          }, {
            key: '_updateProductPrices',
            value: function _updateProductPrices(newVariant, previousVariant) {
              var productMetaPrices = this.element.querySelector('.ProductMeta__PriceList');

              if (!newVariant) {
                productMetaPrices.style.display = 'none';
              } else {
                if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
                  return; // The price do not have changed so let's return to avoid changing the DOM for nothing
                }

                productMetaPrices.innerHTML = '';

                if (newVariant['compare_at_price'] > newVariant['price']) {
                  productMetaPrices.innerHTML += '<span class="ProductMeta__Price Price Price--highlight Text--subdued u-h4" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>';
                  productMetaPrices.innerHTML += '<span class="ProductMeta__Price Price Price--compareAt Text--subdued u-h4" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].formatMoney(newVariant['compare_at_price'], window.theme.moneyFormat) + '</span>';
                } else {
                  productMetaPrices.innerHTML += '<span class="ProductMeta__Price Price Text--subdued u-h4" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>';
                }

                productMetaPrices.style.display = '';
              }
            }

            /**
       * Update the inventory (if needed)
       */

          }, {
            key: '_updateInventory',
            value: function _updateInventory(newVariant) {
              if (!this.options['showInventoryQuantity']) {
                return;
              }

              var productFormInventory = this.element.querySelector('.ProductForm__Inventory'),
                  variantInventory = newVariant ? this.variantsInventories[newVariant['id']] : null;

              if (!newVariant || null === variantInventory['inventory_management'] || variantInventory['inventory_quantity'] <= 0 || this.options['inventoryQuantityThreshold'] > 0 && variantInventory['inventory_quantity'] > this.options['inventoryQuantityThreshold']) {
                productFormInventory.style.display = 'none';
              } else {
                productFormInventory.textContent = variantInventory['inventory_message'];
                productFormInventory.style.display = '';
              }
            }

            /**
       * Update the SKU
       */

          }, {
            key: '_updateSku',
            value: function _updateSku(newVariant) {
              if (!this.options['showSku'] || !newVariant) {
                return;
              }

              var productSkuNumber = this.element.querySelector('.ProductMeta__SkuNumber');

              if (productSkuNumber && newVariant['sku']) {
                productSkuNumber.innerText = newVariant['sku'];
              }
            }

            /**
       * Update the add to cart
       */

          }, {
            key: '_updateAddToCartButton',
            value: function _updateAddToCartButton(newVariant) {
              var addToCartButton = this.element.querySelector('.ProductForm__AddToCart'),
                  shopifyPaymentButton = this.element.querySelector('.shopify-payment-button'),
                  newButton = document.createElement('button');

              newButton.setAttribute('type', 'submit');
              newButton.className = 'ProductForm__AddToCart Button Button--full';
              var is_replace_atc = true
              if (!newVariant) {
                
                const variantObj = $("[data-quickview-variant-json]").html();               
                const meta = JSON.parse(variantObj);
                
                if(meta.product.product_type != 'Suit'){
                  newButton.setAttribute('disabled', 'disabled');
                  newButton.removeAttribute('data-action');
                  newButton.classList.add('Button--secondary');
                  newButton.innerHTML = window.languages.productFormUnavailable;
                  if(newButton.innerHTML == 'Unavailable'){
                    $('.buy-now-1').hide();
                  }else{
                    $('.buy-now-1').show();
                  }
                }else{
                  is_replace_atc = false
                }
              } else {
                if (newVariant['available']) {
                  newButton.removeAttribute('disabled');
                  newButton.classList.add(this.options['showPaymentButton'] ? 'Button--secondary' : 'Button--primary');
                  newButton.setAttribute('data-action', 'add-to-cart');

                  if (undefined === this.options['showPriceInButton'] || this.options['showPriceInButton']) {
                    newButton.innerHTML = '\n            <span>' + window.languages.productFormAddToCart + '</span>\n            <span class="Button__SeparatorDot"></span>\n            <span data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>\n          ';
                  } else {
                    newButton.innerHTML = '<span>' + window.languages.productFormAddToCart + '</span>';
                  }
                  $('.buy-now-1').show();
                } else {
                  newButton.setAttribute('disabled', 'disabled');
                  newButton.classList.add('Button--secondary');
                  newButton.removeAttribute('data-action');
                  newButton.innerHTML = window.languages.productFormSoldOut;
                  $('.buy-now-1').hide();
                }
                //         }

                if (this.options['showPaymentButton'] && shopifyPaymentButton) {
                  if (!newVariant || !newVariant['available']) {
                    shopifyPaymentButton.style.display = 'none';
                  } else {
                    shopifyPaymentButton.style.display = 'block';
                  }
                }

                // We replace the HTML instead of editing as it prevents for the CSS transition to show up
                if(is_replace_atc){
                  addToCartButton.parentNode.replaceChild(newButton, addToCartButton);  
                }
              }
            }
            /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE VARIANT CHANGES
       * ---------------------------------------------------------------------------------------------------
       */

            /**
       * Whenever an option is changed, this code fetch the corresponding active variant
       */

          }, {
            key: '_onOptionChanged',
            value: function _onOptionChanged(newValue, target, activator) {
              $('.ProductForm__Item[aria-expanded="true"]').addClass('option-selected');
              // We change the value associated with the activator, and check if we have a color swatch
              if (activator) {
                this['option' + target.getAttribute('data-option-position')] = newValue;
                activator.querySelector('.ProductForm__SelectedValue').innerHTML = newValue;
              } else {
                this['option' + target.getAttribute('data-option-position')] = target.value;
                var selectedValue = target.closest('.ProductForm__Option').querySelector('.ProductForm__SelectedValue');
                if (selectedValue) {
                  selectedValue.innerHTML = target.value;
                }
              }

              // Finally, we get the new variant
              var previousVariant = this.currentVariant;
              this.currentVariant = this._getCurrentVariantFromOptions();
              this._onVariantChanged(previousVariant, this.currentVariant);

              if (this.currentVariant) {
                if (this.options['enableHistoryState']) {
                  this._updateHistoryState(this.currentVariant);
                }

                // We need to modify the hidden select that contain the id attribute as well
                this.masterSelector.querySelector('[selected]').removeAttribute('selected');
                this.masterSelector.querySelector('[value="' + this.currentVariant['id'] + '"]').setAttribute('selected', 'selected');
              }

              if($('#hf-sleeve').length){
                var sleeves = newValue;
                if(sleeves.indexOf('Sleeve') > -1){
                  var res = sleeves.replace(' Sleeve','');
                  $('#hf-sleeve').val(res);
                }
              }
            }

            /**
       * Get the active variant based on the options
       */

          }, {
            key: '_getCurrentVariantFromOptions',
            value: function _getCurrentVariantFromOptions() {
              var _this7 = this;
              var found = false;

              this.productData['variants'].forEach(function (variant) {
                if (variant['option1'] === _this7.option1 && variant['option2'] === _this7.option2 && variant['option3'] === _this7.option3) {
                  found = variant;
                }
              });

              return found || null;
            }

            /**
       * Update the history state for browsers that support it
       */

          }, {
            key: '_updateHistoryState',
            value: function _updateHistoryState(variant) {
              if (!history.replaceState) {
                return;
              }
              var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
              // Js for shirt product page START
              //         $('.ProductForm__Item[aria-expanded="true"]').addClass('option-selected');
              //         var option_length = $('.ProductForm__Item').length;
              //         if(option_length == 1){

              //         	$('.ProductForm').addClass('option-selected');
              //         }else{
              //         	count++;
              //           	if(count > 1){
              //           		$('.ProductForm').addClass('option-selected');
              //             }
              //         }
              //         if(meta.product.type == 'Suit'){
              //           count++;
              //           if(count > 1){
              //             writeCookie("vairant-id", variant.id);
              //             $('.ProductForm').addClass('option-selected');
              //           }
              //         }
              //         // Js for other products collection page START
              //         else{
              //           $('.ProductForm').addClass('option-selected');
              //           writeCookie("vairant-id", variant.id);
              //         }
//               window.history.replaceState({ path: newUrl }, '', newUrl);
            }

            /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

          }, {
            key: '_addToCart',
            value: function _addToCart(event) {
              var _this8 = this;
              if (!this.options['useAjaxCart']) {
                return; // When using a cart type of page, we just simply redirect to the cart page
              }

              event.preventDefault(); // Prevent form to be submitted

              var addToCartButton = this.element.querySelector('.ProductForm__AddToCart');

              // First, we switch the status of the button
              //         addToCartButton.setAttribute('disabled', 'disabled');
              //         document.dispatchEvent(new CustomEvent('theme:loading:start'));

              // Then we add the product in Ajax
              var formElement = this.element.querySelector('form[action^="/cart/add"]');

              const variantObj = $("[data-quickview-variant-json]").html();               
              const meta = JSON.parse(variantObj);

              if($('.ProductForm__Item').length > 0 && !$('.sticky-bottom').hasClass('show')){
                if($('.sleeve_option').length > 0){
                  $('.ProductForm__Item:last-child').addClass('option-selected');
                }
                var is_size_selected = true;
                var blazer_size = '';

                if(meta.product.product_type == 'Shirt'){
                  $('.ProductForm__Item').each(function(index){
                    if(index == 0 && !$(this).hasClass('option-selected')){
                      is_size_selected = false;
                      if($('.size-error').length < 1){
                        var errorMessageElement = document.createElement('span');
                        errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                        if(index == 0){
                          errorMessageElement.innerHTML = '<p class="size-error">Please select Size</p>';
                        }
                        //                   else{
                        //                   	errorMessageElement.innerHTML = '<p class="size-error">Please select Sleeve</p>';
                        //                   }
                        addToCartButton.setAttribute('disabled', 'disabled');
                        addToCartButton.insertAdjacentElement('afterend', errorMessageElement);

                        setTimeout(function () {
                          addToCartButton.removeAttribute('disabled');
                          errorMessageElement.remove(); 
                        }, 2500);
                      }

                    }
                  });
                }else if(meta.product.product_type == 'Suit'){
                  var pant_size = '';
                  $('.ProductForm__Item').each(function(index){
                    if(!$(this).hasClass('option-selected')){
                      is_size_selected = false;
                      if($('.size-error').length < 1){
                        var errorMessageElement = document.createElement('span');
                        errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                        if(index == 0){
                          errorMessageElement.innerHTML = '<p class="size-error">Please select Blazer Size</p>';
                        }else{
                          errorMessageElement.innerHTML = '<p class="size-error">Please select Pant Size</p>';
                        }

                        addToCartButton.setAttribute('disabled', 'disabled');
                        addToCartButton.insertAdjacentElement('afterend', errorMessageElement);

                        setTimeout(function () {
                          addToCartButton.removeAttribute('disabled');
                          errorMessageElement.remove(); 
                        }, 2500);
                      }

                    }

                    //            check variant is available or not
                    var title_array = []
                    $.each(meta.product.variants, function( index, value ) {
                      title_array.push(value.public_title);
                    });

                    var selected_variant = [];
                    $('.ProductForm__SelectedValue').each(function(){
                      selected_variant.push($(this).text());
                    });
                    pant_size = selected_variant.slice(-1)[0];
                    if(pant_size.includes('US')){
                      pant_size = pant_size.split(' / ')[0].slice(2)
                    }
                    blazer_size = selected_variant[0];
                    selected_variant = selected_variant.join(' / ');
                    if($.inArray( selected_variant, title_array ) == -1){
                      is_size_selected = false;
                      if($('.size-error').length < 1){
                        var errorMessageElement = document.createElement('span');
                        errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                        errorMessageElement.innerHTML = '<p class="size-error">Your pant size is not accurate according to your blazer size. please change your pant size.</p>';
                        addToCartButton.setAttribute('disabled', 'disabled');
                        addToCartButton.insertAdjacentElement('afterend', errorMessageElement);

                        setTimeout(function () {
                          addToCartButton.removeAttribute('disabled');
                          errorMessageElement.remove();
                        }, 5000);
                      }
                    }

                  });
                }else{
                  $('.ProductForm__Item').each(function(){
                    if(!$(this).hasClass('option-selected')){
                      is_size_selected = false;
                      if($('.size-error').length < 1){
                        var errorMessageElement = document.createElement('span');
                        errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                        errorMessageElement.innerHTML = '<p class="size-error">Please select Size</p>';
                        addToCartButton.setAttribute('disabled', 'disabled');
                        addToCartButton.insertAdjacentElement('afterend', errorMessageElement);

                        setTimeout(function () {
                          addToCartButton.removeAttribute('disabled');
                          errorMessageElement.remove(); 
                        }, 2500);
                      }
                      return false;
                    }
                    if($('.matching_pant_size:visible').length > 0 && $('.matching_pant_size').val() == ""){
                      var errorMessageElement = document.createElement('span');
                      errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                      errorMessageElement.innerHTML = '<p class="size-error">Please select Pant Size</p>';
                      addToCartButton.setAttribute('disabled', 'disabled');
                      addToCartButton.insertAdjacentElement('afterend', errorMessageElement);

                      setTimeout(function () {
                        addToCartButton.removeAttribute('disabled');
                        errorMessageElement.remove(); 
                      }, 2500);
                    }
                  });
                }

                if(!is_size_selected){
                  return false;
                }
              }

              if(addToCartButton.getAttribute('disabled') == null){
                addToCartButton.setAttribute('disabled', 'disabled');
                var items = [];
                var associated_sku = $('.variant_list option:selected').attr('data-sku');
                if($('.matching_pant_size:visible').length > 0){
                  items.push({ quantity: 1,  id: $('.matching_pant_size').val(), properties: { associated_sku: associated_sku } });
                }
                if($('.extra_pair:checked').length > 0){

                  let variantObj = $("[data-product-pants-addons-json]").html();

                  var extra_pair_hash = {};
                  if(variantObj != undefined){
                    let extraPairOFPantProductObjParse = JSON.parse(variantObj);
                    extraPairOFPantProductObjParse.product.variants.forEach(variant => {
                      extra_pair_hash[variant.title]= variant.id;
                    });
                  }else{
                    extra_pair_hash = {
                      "US28 / EU44" : 39246298382387,
                      "US30 / EU46" : 39246298415155,
                      "US32 / EU48" : 39246298447923,
                      "US34 / EU50" : 39246298480691,
                      "US36 / EU52" : 39246298513459,
                      "US38 / EU54" : 39246298546227,
                      "US40 / EU56" : 39246298578995,
                      "US42 / EU58" : 39246298611763,
                      "US44 / EU60" : 39246298644531,
                      "US46 / EU62" : 39246298677299,
                    }
                  }

                  items.push({ quantity: 1,  id: extra_pair_hash[pant_size], properties: { associated_sku: associated_sku } });
                }

                if($('.button_vest:checked').length > 0){
                  if(blazer_size == ''){
                    var selected_variant = [];
                    $('.ProductForm__SelectedValue').each(function(){
                      selected_variant.push($(this).text());
                    });
                    blazer_size = selected_variant[0];
                  }

                  let variantObj = $("[data-product-waistcoat-addons-json]").html();               

                  if(variantObj != undefined){
                    let extraPairOFWaistcoatProductObjParse = JSON.parse(variantObj);
                    var button_vest_hash = {};
                    extraPairOFWaistcoatProductObjParse.product.variants.forEach(variant => {
                      button_vest_hash[variant.title]= variant.id;
                    });
                  }else{
                    var button_vest_hash = {
                      "US36 / UK36 / EU46 / XS" : 39319222026291,
                      "US38 / UK38 / EU48 / S" : 39319222059059,
                      "US40 / UK40 / EU50 / M" : 39319222091827,
                      "US42 / UK42 / EU52 / L" : 39319222124595,
                      "US44 / UK44 / EU54 / L" : 39319222157363,
                      "US46 / UK46 / EU56 / XL" : 39319222190131,
                      "US48 / UK48 / EU58 / XXL" : 39319222222899,
                      "US50 / UK50 / EU60 / XXL" : 39319222255667,
                      "US52 / UK52 / EU62 / 3XL" : 39319222288435,
                      "US54 / UK54 / EU64 / 3XL" : 39319222321203,
                      "US56 / UK56 / EU66 / 4XL" : 39319222353971,
                      "US58 / UK58 / EU68 / 4XL" : 39319222386739,
                    }
                    }

                  items.push({ quantity: 1,  id: button_vest_hash[blazer_size], properties: { associated_sku: associated_sku } });
                }
                if($('.button_tie:checked').length > 0){
                  let button_tie = $(".button_tie").data("tie-id");
                  items.push({ quantity: 1,  id: button_tie, properties: { associated_sku: associated_sku } });
                }


                items.push(__WEBPACK_IMPORTED_MODULE_2__helper_Form__["default"].serialize(formElement));
                fetch('/cart/add.js', {
                  body: JSON.stringify({items: items}),
                  credentials: 'same-origin',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
                  }
                }).then(function (response) {
                  document.dispatchEvent(new CustomEvent('theme:loading:end'));
                  if (response.ok) {
                    // We simply trigger an event so the mini-cart can re-render
                    _this8.element.dispatchEvent(new CustomEvent('product:added', {
                      bubbles: true,
                      detail: {
                        variant: _this8.currentVariant,
                        quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
                      }
                    }));

                    $('#popup-view').removeClass('active-popup');
                    $('body').removeClass("overflow-hidden");
                    $(".quick_product_view #quick_view_Modal_id").html("");

                    jQuery.getJSON('/cart.js', function(cart) {
                      //   When cart have only 1 item 
                      setTimeout(function () { 
                        addToCartButton.removeAttribute('disabled');
                        if (cart.item_count == 1){
                          //                   var pr_url = cart.items[0].url.split('?')[0]+'/#shopify-section-product-recommendations';
                          //                   $('.cart-prmotion .modal-btn-bottom a:first-child').attr('href', pr_url);
                          $('.cart-prmotion').addClass('show');
                        }
                      },3000);
                    });

                  } else {
                    response.json().then(function (content) {
                      var errorMessageElement = document.createElement('span');
                      errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
                      errorMessageElement.innerHTML = content['description'];
                      addToCartButton.removeAttribute('disabled');
                      addToCartButton.insertAdjacentElement('afterend', errorMessageElement);
                      setTimeout(function () {
                        errorMessageElement.remove();                
                      }, 2500);
                    });
                  }
                });
              }

              //         event.preventDefault();
            }

            /**
       * ---------------------------------------------------------------------------------------------------
       * OTHER
       * ---------------------------------------------------------------------------------------------------
       */

            /**
       * When using the quantity selector, this can be used to decrease the quantity (be ensuring it won't be lower than 1)
       */

          }, {
            key: '_decreaseQuantity',
            value: function _decreaseQuantity(event, target) {
              target.nextElementSibling.value = Math.max(parseInt(target.nextElementSibling.value) - 1, 1);
            }

            /**
       * When using the quantity selector, this can be used to increase the quantity
       */

          }, {
            key: '_increaseQuantity',
            value: function _increaseQuantity(event, target) {
              target.previousElementSibling.value = parseInt(target.previousElementSibling.value) + 1;
            }

            /**
       * Make sure the quantity does not go below when manually changed
       */

          }, {
            key: '_validateQuantity',
            value: function _validateQuantity(event, target) {
              target.value = Math.max(parseInt(target.value) || 1, 1);
            }
          }]);

          return ProductVariants;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ProductVariants;

        /***/
      },
      /* 13 Instead  => 12 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
   * This class allows to automatically scrolls within a div when this div does not fit into the visible space
   */

        var OverflowScroller = function () {
          function OverflowScroller(element) {
            _classCallCheck(this, OverflowScroller);

            if (!element) {
              return;
            }

            this.element = element;
            this.lastKnownY = window.scrollY;
            this.currentTop = 0;
            this.initialTopOffset = parseInt(window.getComputedStyle(this.element).top);

            this._attachListeners();
          }

          _createClass(OverflowScroller, [{
            key: 'destroy',
            value: function destroy() {
              window.removeEventListener('scroll', this._checkPositionListener);
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._checkPositionListener = this._checkPosition.bind(this);
              window.addEventListener('scroll', this._checkPositionListener);
            }
          }, {
            key: '_checkPosition',
            value: function _checkPosition() {
              var _this10 = this;

              fastdom.measure(function () {
                var bounds = _this10.element.getBoundingClientRect(),
                    maxTop = bounds.top + window.scrollY - _this10.element.offsetTop + _this10.initialTopOffset,
                    minTop = _this10.element.clientHeight - window.innerHeight;

                if (window.scrollY < _this10.lastKnownY) {
                  _this10.currentTop -= window.scrollY - _this10.lastKnownY;
                } else {
                  _this10.currentTop += _this10.lastKnownY - window.scrollY;
                }

                _this10.currentTop = Math.min(Math.max(_this10.currentTop, -minTop), maxTop, _this10.initialTopOffset);
                _this10.lastKnownY = window.scrollY;
              });

              fastdom.mutate(function () {
                _this10.element.style.top = _this10.currentTop + 'px';
              });
            }
          }]);

          return OverflowScroller;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = OverflowScroller;

        /***/
      },
      /* 14 Instead  => 13 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Image__ = __webpack_require__(10);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Responsive__ = __webpack_require__(2);

        var ProductImageZoom = function () {
          function ProductImageZoom(element, slideshow) {
            _classCallCheck(this, ProductImageZoom);

            this.element = element;
            this.delegateElement = new domDelegate.Delegate(this.element);
            this.delegateRoot = new domDelegate.Delegate(document.body);

            this.slideshow = slideshow;

            this._attachListeners();
          }

          _createClass(ProductImageZoom, [{
            key: 'destroy',
            value: function destroy() {
              this.delegateElement.off('click');
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this.delegateElement.on('click', '[data-action="open-product-zoom"]', this._initPhotoSwipe.bind(this));
              this.delegateElement.on('click', '.Product__SlideItem--image', this._initPhotoSwipeFromImageClick.bind(this));
            }

            /**
       * To save performance, we only initialize PhotoSwipe when it's requested. All high resolution images
       * are also loaded only on demand. Also, please note that PhotoSwipe is always completely destroyed
       * whenever it is closed, so it stays super snappy
       */

          }, {
            key: '_initPhotoSwipe',
            value: function _initPhotoSwipe() {
              var images = [];

              this.slideshow.flickityInstance.cells.forEach(function (item) {
                if (item.element.classList.contains('Product__SlideItem--image')) {
                  images.push(item.element.querySelector('img'));
                }
              });

              this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(this.slideshow.flickityInstance.selectedElement.getAttribute('data-image-position-ignoring-video')));
            }

            /**
       * On desktop we do not have the dedicated small icon, instead the zoom is triggered when clicking directly on the image
       */

          }, {
            key: '_initPhotoSwipeFromImageClick',
            value: function _initPhotoSwipeFromImageClick(event, target) {
              // Opening this way is only available on desktop
              if (__WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('pocket')) {
                return;
              }

              var images = [];

              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(target, null, true).forEach(function (item) {
                if (item.classList.contains('Product__SlideItem--image')) {
                  images.push(item.querySelector('img'));
                }
              });

              this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(target.getAttribute('data-image-position-ignoring-video')));
            }

            /**
       * Take a list of images and create a PhotoSwipe array. This is called whenever the gallery is initialized.
       */

          }, {
            key: '_createPhotoSwipeItemsFromImages',
            value: function _createPhotoSwipeItemsFromImages(images) {
              return images.map(function (image) {
                var maxWidth = parseInt(image.getAttribute('data-max-width')),
                    maxHeight = parseInt(image.getAttribute('data-max-height')),
                    maxDimension = __WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('phone') ? 1200 : 1800,
                    // 1200 is max size for mobile and 1800 for larger devices
                    reduceFactor = 1.0;

                if (maxWidth >= maxHeight) {
                  reduceFactor = Math.max(maxWidth / maxDimension, 1.0);
                } else {
                  reduceFactor = Math.max(maxHeight / maxDimension, 1.0);
                }

                var requestedWidth = Math.floor(maxWidth / reduceFactor);
                var requestedHeight = Math.floor(maxHeight / reduceFactor);

                return {
                  msrc: image.currentSrc || image.src, // For browser that supports srcset, currentSrc is the currently used image
                  w: requestedWidth,
                  h: requestedHeight,
                  initialZoomLevel: 0.65,
                  src: __WEBPACK_IMPORTED_MODULE_1__helper_Image__["default"].getSizedImageUrl(image.getAttribute('data-original-src'), requestedWidth + 'x' + requestedHeight)
                };
              });
            }

            /**
       * Take a list of nodes containing all images and create a PhotoSwipe array. This is called
       * whenever the gallery is initialized.
       */

          }, {
            key: '_createPhotoSwipeInstance',
            value: function _createPhotoSwipeInstance(items, selectedImageIndex) {
              var _this11 = this;

              var photoswipeContainer = document.querySelector('.pswp');

              this.photoSwipeInstance = new PhotoSwipe(photoswipeContainer, false, items, {
                index: selectedImageIndex,
                showHideOpacity: true,
                showAnimationDuration: 500,
                loop: false,
                history: false,
                closeOnVerticalDrag: false,
                allowPanToNext: false,
                pinchToClose: false,
                errorMsg: '<p class="pswp__error-msg">' + window.languages.productImageLoadingError + '</p>',
                scaleMode: 'zoom',
                getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
                  if (isMouseClick) {
                    return 1.6;
                  } else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.33;
                  }
                },
                getThumbBoundsFn: function getThumbBoundsFn(index) {
                  var thumbnail = _this11.element.querySelector('.Product__Slideshow .Carousel__Cell:nth-child(' + (parseInt(index) + 1) + ') img'),
                      pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                      rect = thumbnail.getBoundingClientRect();

                  return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                }
              });

              this.photoSwipeInstance.listen('beforeChange', this._onSlideChanged.bind(this));
              this.photoSwipeInstance.listen('destroy', this._destroyPhotoSwipe.bind(this));
              this.photoSwipeInstance.listen('doubleTap', this._onDoubleTap.bind(this));
              this.photoSwipeInstance.listen('initialZoomIn', this._onInitialZoomIn.bind(this));
              this.photoSwipeInstance.listen('initialZoomOut', this._onInitialZoomOut.bind(this));

              this.delegateRoot.on('pswpTap', '.pswp__scroll-wrap', this._onSingleTap.bind(this));
              this.delegateRoot.on('pswpTap', '.pswp__button--close', this.photoSwipeInstance.close);
              this.delegateRoot.on('pswpTap', '.pswp__button--prev', this.photoSwipeInstance.prev);
              this.delegateRoot.on('pswpTap', '.pswp__button--next', this.photoSwipeInstance.next);

              this.photoSwipeInstance.init();
            }

            /**
       * Update the nav
       */

          }, {
            key: '_onSlideChanged',
            value: function _onSlideChanged() {
              if (this.photoSwipeInstance.getCurrentIndex() === 0) {
                this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').setAttribute('disabled', 'disabled');
              } else {
                this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').removeAttribute('disabled');
              }

              if (this.photoSwipeInstance.getCurrentIndex() + 1 === this.photoSwipeInstance.options.getNumItemsFn()) {
                this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').setAttribute('disabled', 'disabled');
              } else {
                this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').removeAttribute('disabled');
              }
            }

            /**
       * This event is a bit different and is triggered when the user click somewhere. We use it do allow to zoom in and
       * zoom out in the image on desktop and use for the UI
       */

          }, {
            key: '_onSingleTap',
            value: function _onSingleTap(event) {
              if (!event.detail || event.detail.pointerType === 'mouse') {
                if (event.target.classList.contains('pswp__img')) {
                  this.photoSwipeInstance.toggleDesktopZoom(event.detail.releasePoint);
                }
              } else {
                if (event.target.classList.contains('pswp__button')) {
                  return;
                }

                event.target.closest('.pswp').querySelector('.pswp__ui').classList.toggle('pswp__ui--hidden');
              }
            }
          }, {
            key: '_onDoubleTap',
            value: function _onDoubleTap(point) {
              var initialZoomLevel = this.photoSwipeInstance.currItem.initialZoomLevel;

              if (this.photoSwipeInstance.getZoomLevel() !== initialZoomLevel) {
                this.photoSwipeInstance.zoomTo(initialZoomLevel, point, 333);
              } else {
                this.photoSwipeInstance.zoomTo(initialZoomLevel < 0.7 ? 1 : 1.33, point, 333);
              }
            }
          }, {
            key: '_onInitialZoomIn',
            value: function _onInitialZoomIn() {
              document.querySelector('.pswp__ui').classList.remove('pswp__ui--hidden');
            }
          }, {
            key: '_onInitialZoomOut',
            value: function _onInitialZoomOut() {
              document.querySelector('.pswp__ui').classList.add('pswp__ui--hidden');
            }

            /**
       * PhotoSwipe instance is automatically destroyed for us when it's closed. What we need to do is simply re-set
       * our in-memory instance to null and our own events
       */

          }, {
            key: '_destroyPhotoSwipe',
            value: function _destroyPhotoSwipe() {
              this.delegateRoot.off('pswpTap');
              this.photoSwipeInstance = null;
            }
          }]);

          return ProductImageZoom;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ProductImageZoom;

        /***/
      },
      /* 15 Instead  => 14 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var ProductReviews = function () {
          function ProductReviews(container) {
            _classCallCheck(this, ProductReviews);

            this.element = container;
            this.delegateElement = new domDelegate.Delegate(this.element);

            this.delegateElement.on('click', '.spr-summary-actions-newreview', this._onNewReviewClicked.bind(this));

            // Extending Shopify Reviews is a bit manual, but let's do it!

            window.SPRCallbacks = {};
            window.SPRCallbacks.onFormSuccess = this._onFormSuccess.bind(this);
            window.SPRCallbacks.onReviewsLoad = this._onReviewsLoad.bind(this);
          }

          _createClass(ProductReviews, [{
            key: 'destroy',
            value: function destroy() {
              this.delegateElement.off();
            }
          }, {
            key: '_updatePagination',
            value: function _updatePagination(event, target) {
              // Unfortunately, we have to use this ugly jQuery style stuff
              SPR.$(target).data('page', parseInt(target.getAttribute('data-page')) + 1);
            }
          }, {
            key: '_onFormSuccess',
            value: function _onFormSuccess() {
              var formSuccess = this.element.querySelector('.spr-form-message-success');
              window.scrollTo(0, formSuccess.offsetTop - 45);
            }
          }, {
            key: '_onReviewsLoad',
            value: function _onReviewsLoad() {
              // We want to move "spr-pagination-next" before the "new review" button in the "spr-summary-actions" div
              if($('.spr-pagination-next').length){
                var sprSummaryActions = this.element.querySelector('.spr-summary-actions'),
                    previousSprPaginationNext = sprSummaryActions.querySelector('.spr-pagination-next'),
                    sprPaginationNext = this.element.querySelector('.spr-pagination .spr-pagination-next');

                if (previousSprPaginationNext) {
                  previousSprPaginationNext.remove();
                }

                if (sprPaginationNext) {
                  sprSummaryActions.insertBefore(sprPaginationNext, sprSummaryActions.firstChild);
                }
              }
            }
          }, {
            key: '_onNewReviewClicked',
            value: function _onNewReviewClicked(event, target) {
              target.style.display = 'none';

              if (target.previousElementSibling) {
                target.previousElementSibling.style.display = 'none';
              }
            }
          }]);

          return ProductReviews;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ProductReviews;

        /***/
      },
      /* 16 Instead  => 15 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Carousel__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Dom__ = __webpack_require__(0);
        /**
   * Variant selector is a bit similar to the popover, but due to some differences, I've created a distinct class
   */

        var VariantSelector = function () {
          function VariantSelector(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, VariantSelector);

            this.element = element;
            this.delegateElement = new domDelegate.Delegate(this.element);

            this.activator = options['activator'] || document.querySelector('[aria-controls="' + element.getAttribute('id') + '"]');
            this.onValueChangedCallback = options['onValueChanged'] || function () {};
            this.isOpen = false;

            this.pageOverlayElement = document.querySelector('.PageOverlay');

            this.variantChoiceList = __WEBPACK_IMPORTED_MODULE_2__helper_Dom__["default"].nodeListToArray(this.element.querySelectorAll('.VariantSelector__Choice'));
            this.variantCarousel = new __WEBPACK_IMPORTED_MODULE_1__Carousel__["default"](this.element.querySelector('.VariantSelector__Carousel'), {
              onSelect: this._variantChanged.bind(this),
              onClick: this._variantSelected.bind(this)
            });

            this._attachListeners();
          }

          _createClass(VariantSelector, [{
            key: 'destroy',
            value: function destroy() {
              this.element.removeEventListener('keyup', this._handleKeyboardListener);
              this.delegateElement.off('click');
              this.activator.removeEventListener('click', this._toggleListener);
              this.variantCarousel.destroy();
            }
          }, {
            key: 'toggle',
            value: function toggle() {
              this.isOpen ? this.close() : this.open();
            }
          }, {
            key: 'open',
            value: function open() {
              if (this.isOpen) {
                return;
              }
              this.element.setAttribute('aria-hidden', 'false');
              this.activator.setAttribute('aria-expanded', 'true');

              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(this.element, 'variant-selector');

              document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open

              this.element.setAttribute('style', '');
              this.pageOverlayElement.classList.add('is-visible');
              this.pageOverlayElement.addEventListener('click', this._closeListener);

              this.isOpen = true;
            }
          }, {
            key: 'close',
            value: function close() {
              if (!this.isOpen) {
                return;
              }

              this.element.setAttribute('aria-hidden', 'true');
              this.activator.setAttribute('aria-expanded', 'false');

              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(this.element, 'variant-selector');

              document.documentElement.classList.remove('no-scroll');

              this.pageOverlayElement.classList.remove('is-visible');
              this.pageOverlayElement.removeEventListener('click', this._closeListener);

              this.isOpen = false;
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._handleKeyboardListener = this._handleKeyboard.bind(this);
              this._closeListener = this.close.bind(this);
              this._toggleListener = this.toggle.bind(this);

              this.element.addEventListener('keyup', this._handleKeyboardListener);
              this.activator.addEventListener('click', this._toggleListener);
              this.delegateElement.on('click', '[data-action="select-variant"]', this._onVariantSelect.bind(this));
            }

            /**
       * Called when the variant is changed (but not yet selected)
       */

          }, {
            key: '_variantChanged',
            value: function _variantChanged(selectedIndex) {
              var activeChoice = this.variantChoiceList[selectedIndex];
              activeChoice.classList.add('is-selected');
              __WEBPACK_IMPORTED_MODULE_2__helper_Dom__["default"].getSiblings(activeChoice, '.is-selected').forEach(function (item) {
                return item.classList.remove('is-selected');
              });
            }

            /**
       * Called when a variant is clicked or selected
       */

          }, {
            key: '_variantSelected',
            value: function _variantSelected(cellElement, cellIndex) {
              if (this.variantCarousel.getSelectedIndex() === cellIndex) {
                this.onValueChangedCallback(cellElement.getAttribute('data-option-value'), cellElement, this.activator);
                this.close();
              } else {
                this.variantCarousel.selectCell(cellIndex);
              }
            }

            /**
       * Called when the button "choose this variant" is explicitly clicked
       */

          }, {
            key: '_onVariantSelect',
            value: function _onVariantSelect() {
              var selectedCell = this.variantCarousel.flickityInstance.selectedCell.element;

              this.onValueChangedCallback(selectedCell.getAttribute('data-option-value'), selectedCell, this.activator);
              this.close();
            }

            /**
       * Handle a11y events
       */

          }, {
            key: '_handleKeyboard',
            value: function _handleKeyboard(event) {
              if (this.isOpen && event.keyCode === 27) {
                this.close();
              }
            }
          }]);

          return VariantSelector;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = VariantSelector;

        /***/
      },
      /* 17 Instead  => 16 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
   * This code has been heavily inspired by this: https://kitaitimakoto.gitlab.io/scrollspy-example/index.en.html#whatsthis
   */

        var ScrollSpy = function () {
          function ScrollSpy(container, elementsToSpy, observerOptions) {
            var _this12 = this;

            _classCallCheck(this, ScrollSpy);

            this.container = container;
            this.targets = [];
            this.targetIndices = {};
            this.indicesInViewPort = [];

            this.observer = new IntersectionObserver(this._onIntersectionChange.bind(this), observerOptions);

            elementsToSpy.forEach(function (elementToSpy, index) {
              _this12.targets.push(elementToSpy);
              _this12.targetIndices[elementToSpy.id] = index;
              _this12.observer.observe(elementToSpy);
            });
          }

          _createClass(ScrollSpy, [{
            key: 'destroy',
            value: function destroy() {
              this.observer.disconnect();
            }

            /**
       * Called whenever there is a change of visibility
       */

          }, {
            key: '_onIntersectionChange',
            value: function _onIntersectionChange(changes) {
              var oldTargetIndex = this.indicesInViewPort[0] || 0;

              for (var i = changes.length - 1; i >= 0; i--) {
                this._updateIndicesInViewPort(changes[i], oldTargetIndex);
              }

              // Firefox generates duplicates so make sure to remove
              this.indicesInViewPort = this.indicesInViewPort.filter(function (value, index, self) {
                return self.indexOf(value) === index;
              });

              if (this.indicesInViewPort.length === 0 || oldTargetIndex === this.indicesInViewPort[0]) {
                return;
              }

              var event = new CustomEvent('scrollspy:target:changed', {
                detail: {
                  newTarget: this.targets[this.indicesInViewPort[0]],
                  oldTarget: this.targets[oldTargetIndex]
                }
              });

              this.container.dispatchEvent(event);
            }

            /**
       * Update indices visible in the view port
       */

          }, {
            key: '_updateIndicesInViewPort',
            value: function _updateIndicesInViewPort(change, oldTargetIndex) {
              var index = this.targetIndices[change.target.id];

              if (change.intersectionRatio === 0) {
                var indexInViewPort = this.indicesInViewPort.indexOf(index);

                if (indexInViewPort !== -1) {
                  this.indicesInViewPort.splice(indexInViewPort, 1);
                }
              } else {
                if (index < oldTargetIndex) {
                  this.indicesInViewPort.unshift(index);
                } else if (index > this.indicesInViewPort[this.indicesInViewPort.length - 1]) {
                  this.indicesInViewPort.push(index);
                } else {
                  this.indicesInViewPort.push(index);
                  this.indicesInViewPort.sort();
                }
              }
            }
          }]);

          return ScrollSpy;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ScrollSpy;

        /***/
      },
      /* 19 Instead  => 17*/
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Carousel__ = __webpack_require__(1);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Carousel", function () {
          return __WEBPACK_IMPORTED_MODULE_0__Carousel__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Drawer__ = __webpack_require__(8);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Drawer", function () {
          return __WEBPACK_IMPORTED_MODULE_2__Drawer__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__Popover__ = __webpack_require__(9);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Popover", function () {
          return __WEBPACK_IMPORTED_MODULE_5__Popover__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__ProductItemColorSwatch__ = __webpack_require__(5);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductItemColorSwatch", function () {
          return __WEBPACK_IMPORTED_MODULE_7__ProductItemColorSwatch__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__ProductImageZoom__ = __webpack_require__(13);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductImageZoom", function () {
          return __WEBPACK_IMPORTED_MODULE_8__ProductImageZoom__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__ProductReviews__ = __webpack_require__(14);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductReviews", function () {
          return __WEBPACK_IMPORTED_MODULE_9__ProductReviews__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__ProductVariants__ = __webpack_require__(11);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductVariants", function () {
          return __WEBPACK_IMPORTED_MODULE_10__ProductVariants__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__ScrollSpy__ = __webpack_require__(16);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ScrollSpy", function () {
          return __WEBPACK_IMPORTED_MODULE_11__ScrollSpy__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__VariantSelector__ = __webpack_require__(15);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "VariantSelector", function () {
          return __WEBPACK_IMPORTED_MODULE_14__VariantSelector__["default"];
        });

        /***/
      },
      /* 20 Instead  => 18 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
   * This implementation allows to serialize a form
   */

        var Form = function () {
          function Form() {
            _classCallCheck(this, Form);
          }

          _createClass(Form, null, [{
            key: 'serialize',
            value: function serialize(form) {
              function stringKey(key, value) {
                var beginBracket = key.lastIndexOf('[');

                if (beginBracket === -1) {
                  var _hash = {};
                  _hash[key] = value;
                  return _hash;
                }

                var newKey = key.substr(0, beginBracket);
                var newValue = {};

                newValue[key.substring(beginBracket + 1, key.length - 1)] = value;

                return stringKey(newKey, newValue);
              }

              var hash = {};

              for (var i = 0, len = form.elements.length; i < len; i++) {
                var formElement = form.elements[i];

                if (formElement.name === '' || formElement.disabled) {
                  continue;
                }

                if (formElement.name && !formElement.disabled && (formElement.checked || /select|textarea/i.test(formElement.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(formElement.type))) {
                  var stringKeys = stringKey(formElement.name, formElement.value);
                  hash = Form.extend(hash, stringKeys);
                }
              }

              return hash;
            }
          }, {
            key: 'extend',
            value: function extend() {
              var extended = {};
              var i = 0;

              // Merge the object into the extended object
              var merge = function merge(obj) {
                for (var prop in obj) {
                  if (obj.hasOwnProperty(prop)) {
                    // If property is an object, merge properties
                    if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                      extended[prop] = Form.extend(extended[prop], obj[prop]);
                    } else {
                      extended[prop] = obj[prop];
                    }
                  }
                }
              };

              // Loop through each object and conduct a merge
              for (; i < arguments.length; i++) {
                merge(arguments[i]);
              }

              return extended;
            }
          }]);

          return Form;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Form;

        /***/
      },
      /* 44 Instead  => 19 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_Carousel__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ProductVariants__ = __webpack_require__(11);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_ProductImageZoom__ = __webpack_require__(13);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_ProductReviews__ = __webpack_require__(14);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_ScrollSpy__ = __webpack_require__(16);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__helper_Dom__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__components_OverflowScroller__ = __webpack_require__(12);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__helper_Responsive__ = __webpack_require__(2);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__helper__ = __webpack_require__(6);

        var ProductSection = function () {
          function ProductSection(container) {
            _classCallCheck(this, ProductSection);

            this.element = container;
            this.delegateElement = new domDelegate.Delegate(this.element);
            this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

            if (this.options['templateSuffix'] !== 'coming-soon') {
              this.productVariants = new __WEBPACK_IMPORTED_MODULE_1__components_ProductVariants__["default"](container, this.options);
            }

            this.productReviews = new __WEBPACK_IMPORTED_MODULE_3__components_ProductReviews__["default"](container);

            var productSlideshowElement = this.element.querySelector('.Product__Slideshow');

            // If there is no image at all, there is nothing to init
            if (productSlideshowElement) {
              this.productSlideshow = new __WEBPACK_IMPORTED_MODULE_0__components_Carousel__["default"](productSlideshowElement, { onSelect: this._onImageChanged.bind(this) });

              if (this.options['stackProductImages']) {
                this.slideshowNavDots = this.element.querySelector('.Product__SlideshowNav--dots');
                this.slideshowNavDotsItems = this.slideshowNavDots ? __WEBPACK_IMPORTED_MODULE_5__helper_Dom__["default"].nodeListToArray(this.slideshowNavDots.querySelectorAll('a')) : [];
              }

              if (this.options['showThumbnails']) {
                this.slideshowNavThumbnails = this.element.querySelector('.Product__SlideshowNav--thumbnails');
                this.slideshowNavThumbnailsItems = this.slideshowNavThumbnails ? __WEBPACK_IMPORTED_MODULE_5__helper_Dom__["default"].nodeListToArray(this.slideshowNavThumbnails.querySelectorAll('.Product__SlideshowNavImage')) : [];
              }

              this.slideshowImages = __WEBPACK_IMPORTED_MODULE_5__helper_Dom__["default"].nodeListToArray(productSlideshowElement.querySelectorAll('.Carousel__Cell'));
            }

            this.productWrapperElement = this.element.querySelector('.Product__Wrapper');
//             $('.ProductForm__Option').append($('.Product__Wrapper'));
//             this.element.querySelector('.ProductForm__Option').appendChild(this.productWrapperElement);
            this.productInfoElement = this.element.querySelector('.Product__Info');
            this.productAsideElement = this.element.querySelector('.Product__Aside');
            this.productGalleryElement = this.element.querySelector('.Product__Gallery');
            this.quickNav = this.element.querySelector('.Product__QuickNav');

            if (this.options['enableImageZoom']) {
              this.imageZoomInstance = new __WEBPACK_IMPORTED_MODULE_2__components_ProductImageZoom__["default"](this.element, this.productSlideshow);
            }

            Stickyfill.addOne(this.productInfoElement);

            this._setupDeviceFeatures();
            this._attachListeners();
          }

          _createClass(ProductSection, [{
            key: 'onUnload',
            value: function onUnload() {
              this.delegateElement.off('click');
              this.productReviews.destroy();

              if (this.productVariants) {
                this.productVariants.destroy();
              }

              if (this.productSlideshow) {
                this.productSlideshow.destroy();
              }

              if (this.options['enableImageZoom']) {
                this.imageZoomInstance.destroy();
              }

              if (this.carouselNavScrollSpy) {
                this.carouselNavScrollSpy.destroy();
              }

              if (this.quickNav) {
                window.removeEventListener('scroll', this._checkQuickNavListener);
              }

              if (this.productInfoScroller) {
                this.productInfoScroller.destroy();
              }

              if (this.productThumbnailsScroller) {
                this.productThumbnailsScroller.destroy();
              }

              if (window.ResizeObserver && this.productInfoResizeObserver) {
                this.productInfoResizeObserver.disconnect();
              }

              Stickyfill.removeOne(this.productInfoElement);

              document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._onBreakpointChangedListener = this._setupDeviceFeatures.bind(this);
              this._checkQuickNavListener = this._checkQuickNav.bind(this);

              this.delegateElement.on('click', '[data-action="toggle-social-share"]', this._toggleSocialShare.bind(this));
              this.delegateElement.on('variant:changed', this._updateSlideshowImage.bind(this));
              this.delegateElement.on('scrollspy:target:changed', this._onScrollTargetChanged.bind(this));
              this.delegateElement.on('click', '.Product__SlideshowNavImage', this.clickOnScroll.bind(this));

              document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);

              if (this.quickNav) {
                window.addEventListener('scroll', this._checkQuickNavListener);
              }

              if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
                this.delegateElement.on('click', '.Product__SlideshowNavImage', this._switchToImage.bind(this));
              }
            }

            /**
       * Update the main carousel image
       */

          }, {
            key: 'clickOnScroll',
            value: function clickOnScroll(event,target) {
              var data_image_id = target.getAttribute('data-image-id');
			  $('.quick_product_view').animate({
                scrollTop: $('#Image'+data_image_id).position().top - 50
              }, 500);
            }

            /**
       * Update the quickview image on click of the thumbnail
       */

          }, {
            key: '_updateSlideshowImage',
            value: function _updateSlideshowImage(event) {
              var variant = event.detail.variant,
                  previousVariant = event.detail.previousVariant;

              if (!variant || !variant['featured_image'] || previousVariant && previousVariant['featured_image'] && previousVariant['featured_image']['id'] === variant['featured_image']['id']) {
                return;
              }

              // Using image['position'] has always been unreliable. Further more in this theme we allow some images to be featured and not be part of
              // the main carousel, so the position can be simply wrong.
              // We have two logic here: if we are on pocket mode, we switch using the carousel, otherwise we simulate a link to the anchor

              if (__WEBPACK_IMPORTED_MODULE_8__helper__["ResponsiveHelper"].matchesBreakpoint('pocket') || !this.options['stackProductImages']) {
                for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
                  var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
                      imageId = parseInt(cellElement.getAttribute('data-image-id'));

                  if (imageId === variant['featured_image']['id']) {
                    this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-image-position')));
                  }
                }
              } else {
//                 document.querySelector('[href="#Image' + variant['featured_image']['id'] + '"]').click();
                //document.getElementById(`Image${variant['featured_image']['id']}`).scrollIntoView(); For now there is a bug in Chrome that prevents to use this
              }
            }

            /**
       * Callback when the target changes
       */

          }, {
            key: '_onScrollTargetChanged',
            value: function _onScrollTargetChanged(event) {
              // The scrollspy emit also an "oldTarget", but when scrolling very fast with Firefox or Safari, it prevents the old to be removed, so we
              // manually iterate through all of them to remove it first
              if (this.options['stackProductImages']) {
                this.slideshowNavDotsItems.forEach(function (item) {
                  return item.classList.remove('is-selected');
                });
                this.slideshowNavDotsItems[parseInt(event.detail.newTarget.getAttribute('data-image-position'))].classList.add('is-selected');

                if (this.options['showThumbnails']) {
                  this.slideshowNavThumbnailsItems.forEach(function (item) {
                    return item.classList.remove('is-selected');
                  });
                  this.slideshowNavThumbnailsItems[parseInt(event.detail.newTarget.getAttribute('data-image-position'))].classList.add('is-selected');
                }
              }
            }
          }, {
            key: '_switchToImage',
            value: function _switchToImage(event, target) {
              for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
                var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
                    imageId = parseInt(cellElement.getAttribute('data-image-id'));

                if (imageId === parseInt(target.getAttribute('data-image-id'))) {
                  this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-image-position')));
                }
              }
            }

            /**
       * Check the quick nav
       */

          }, {
            key: '_checkQuickNav',
            value: function _checkQuickNav() {
              var _this53 = this;

              var showAsideQuickNav = false;

              fastdom.measure(function () {
                showAsideQuickNav = window.scrollY >= _this53.productAsideElement.offsetTop - _this53.productAsideElement.clientHeight;
              });

              fastdom.mutate(function () {
                if (showAsideQuickNav) {
                  _this53.quickNav.classList.add('is-flipped');
                } else {
                  _this53.quickNav.classList.remove('is-flipped');
                }
              });
            }

            /**
       * Toggle the social share icons
       */

          }, {
            key: '_toggleSocialShare',
            value: function _toggleSocialShare(event, target) {
              target.classList.toggle('is-active');
              target.classList.toggle('RoundButton--secondaryState');

              target.setAttribute('aria-expanded', target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
              target.nextElementSibling.setAttribute('aria-hidden', target.nextElementSibling.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
            }
          }, {
            key: '_onImageChanged',
            value: function _onImageChanged(event, cell) {
              // If cell is video, we hide the action list
              if (__WEBPACK_IMPORTED_MODULE_8__helper__["ResponsiveHelper"].matchesBreakpoint('pocket')) {
                var productGalleryActionListElement = this.element.querySelector('.Product__Gallery .Product__ActionList');

                if (productGalleryActionListElement) {
                  if (cell.classList.contains('Product__SlideItem--video')) {
                    productGalleryActionListElement.classList.add('is-hidden');
                  } else {
                    productGalleryActionListElement.classList.remove('is-hidden');
                  }
                }
              }

              // If we have non-stacked with thumbnails, update it
              if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
                var imageId = cell.getAttribute('data-image-id');

                this.slideshowNavThumbnailsItems.forEach(function (thumbnail) {
                  if (thumbnail.getAttribute('data-image-id') === imageId) {
                    thumbnail.classList.add('is-selected');
                  } else {
                    thumbnail.classList.remove('is-selected');
                  }
                });
              }
            }

            /**
       * Verify when the screen size changes to create additional stuff on non pocket mode
       */

          }, {
            key: '_setupDeviceFeatures',
            value: function _setupDeviceFeatures(event) {
              var _this54 = this;

              var currentBreakpoint = event ? event.detail.currentBreakpoint : __WEBPACK_IMPORTED_MODULE_8__helper__["ResponsiveHelper"].getCurrentBreakpoint(),
                  previousBreakpoint = event ? event.detail.previousBreakpoint : null;

              if (currentBreakpoint === previousBreakpoint) {
                return; // Nothing has changed, no specific setup to do
              }

              if (currentBreakpoint === 'phone' || currentBreakpoint === 'tablet') {
                if (this.carouselNavScrollSpy) {
                  this.carouselNavScrollSpy.destroy();
                }

                if (this.productInfoScroller) {
                  this.productInfoScroller.destroy();
                }

                if (this.productThumbnailsScroller) {
                  this.productThumbnailsScroller.destroy();
                }

                if (this.productAsideElement) {
                  this.productAsideElement.style.minHeight = null;
                } else {
                  this.productWrapperElement.style.minHeight = null;
                }

                this.productInfoElement.parentNode.style.maxHeight = null;
              } else {
                // 1st: scrollspy for the dots and image
                if (this.slideshowImages && this.slideshowImages.length > 1) {
                  var offsetTop = 0;

                  if (this.options['stackProductImages'] && this.slideshowNavDots) {
                    offsetTop = this.slideshowNavDots.firstElementChild.offsetTop;
                  }

                  if (this.options['showThumbnails'] && __WEBPACK_IMPORTED_MODULE_8__helper__["ResponsiveHelper"].matchesBreakpoint('desk')) {
                    offsetTop = 250;
                  }

                  this.carouselNavScrollSpy = new __WEBPACK_IMPORTED_MODULE_4__components_ScrollSpy__["default"](this.element, this.slideshowImages, {
                    rootMargin: '-' + offsetTop + 'px 0px 0px 0px'
                  });
                }

                var productInfoStyles = window.getComputedStyle(this.productInfoElement),
                    productInfoPadding = parseInt(productInfoStyles.paddingTop) + parseInt(productInfoStyles.paddingBottom),
                    productGalleryHeight = this.productGalleryElement ? parseInt(this.productGalleryElement.scrollHeight) : 0;

                // 2nd: making sure to set up enough space in aside part
                var calculateMinHeight = function calculateMinHeight() {
                  if (_this54.productAsideElement) {
                    _this54.productAsideElement.style.minHeight = _this54.productInfoElement.scrollHeight - productInfoPadding - productGalleryHeight + 'px';
                    _this54.productInfoElement.closest('.Product__InfoWrapper').style.maxHeight = _this54.productAsideElement.offsetTop + _this54.productInfoElement.scrollHeight - productInfoPadding + 'px';
                  } else {
                    _this54.productWrapperElement.style.minHeight = _this54.productInfoElement.scrollHeight - parseInt(productInfoStyles.paddingTop) + 'px';
                  }
                };

                calculateMinHeight();

                // This code actually works well, but if a merchant is using an app that dynamically adds content (such as ReCharge or any other widget-based app), this
                // will mess the min height. There is a clean solution to this issue, which is by using ResizeObserver. However it's only supported in Chrome for now,
                // but I feel it's already good to have a clean fix
                if (window.ResizeObserver) {
                  this.productInfoResizeObserver = new ResizeObserver(function () {
                    calculateMinHeight(); // We currently do not take advantage of the values returned by the observer as our calculation depends on other values
                  });

                  this.productInfoResizeObserver.observe(this.productInfoElement);
                }

                // 3rd: let's handle the scroll for the product info
                this.productInfoScroller = new __WEBPACK_IMPORTED_MODULE_6__components_OverflowScroller__["default"](this.productInfoElement);

                // 4th: let's handle the scroll for the thumbnails
                if (this.options['showThumbnails'] && this.slideshowNavThumbnails) {
                  this.productThumbnailsScroller = new __WEBPACK_IMPORTED_MODULE_6__components_OverflowScroller__["default"](this.slideshowNavThumbnails);
                }
              }
            }
          }]);

          return ProductSection;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = ProductSection;

        /***/
      },
      /* 47 Instead  => 20 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(0);

        /**
   * This code is extracted from Slate
   */

        var SectionContainer = function () {
          function SectionContainer() {
            _classCallCheck(this, SectionContainer);

            this.constructors = [];
            this.instances = [];

            this._attachListeners();
          }

          _createClass(SectionContainer, [{
            key: '_attachListeners',
            value: function _attachListeners() {
              document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
              document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
              document.addEventListener('shopify:section:select', this._onSelect.bind(this));
              document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
              document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
              document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
              document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
            }
          }, {
            key: 'register',
            value: function register(type, constructor) {
              var _this58 = this;

              this.constructors[type] = constructor;

              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('[data-section-type=' + type + ']')).forEach(function (container) {
                _this58._createInstance(container, constructor);
              });
            }

            /**
       * Return an object from an array of objects that matches the provided key and value
       */

          }, {
            key: '_findInstance',
            value: function _findInstance(array, key, value) {
              for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                  return array[i];
                }
              }
            }

            /**
       * Remove an object from an array of objects by matching the provided key and value
       */

          }, {
            key: '_removeInstance',
            value: function _removeInstance(array, key, value) {
              var i = array.length;

              while (i--) {
                if (array[i][key] === value) {
                  array.splice(i, 1);
                  break;
                }
              }

              return array;
            }
          }, {
            key: '_onSectionLoad',
            value: function _onSectionLoad(event) {
              var container = event.target.querySelector('[data-section-id]');

              if (container) {
                this._createInstance(container);
              }
            }
          }, {
            key: '_onSectionUnload',
            value: function _onSectionUnload(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (!instance) {
                return;
              }

              if (typeof instance.onUnload === 'function') {
                instance.onUnload(event);
              }

              this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
            }
          }, {
            key: '_onSelect',
            value: function _onSelect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onSelect === 'function') {
                instance.onSelect(event);
              }
            }
          }, {
            key: '_onDeselect',
            value: function _onDeselect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onDeselect === 'function') {
                instance.onDeselect(event);
              }
            }
          }, {
            key: '_onReorder',
            value: function _onReorder(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onReorder === 'function') {
                instance.onReorder(event);
              }
            }
          }, {
            key: '_onBlockSelect',
            value: function _onBlockSelect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onBlockSelect === 'function') {
                instance.onBlockSelect(event);
              }
            }
          }, {
            key: '_onBlockDeselect',
            value: function _onBlockDeselect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onBlockDeselect === 'function') {
                instance.onBlockDeselect(event);
              }
            }
          }, {
            key: '_createInstance',
            value: function _createInstance(container, constructor) {
              var id = container.getAttribute('data-section-id'),
                  type = container.getAttribute('data-section-type');

              constructor = constructor || this.constructors[type];

              if (typeof constructor === 'undefined') {
                return;
              }

              var instance = Object.assign(new constructor(container), {
                id: id,
                type: type,
                container: container
              });

              this.instances.push(instance);
            }
          }]);

          return SectionContainer;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = SectionContainer;

        /***/
      },
      /* 54 Instead  => 21 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_18__ProductSection__ = __webpack_require__(19);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductSection", function () {
          return __WEBPACK_IMPORTED_MODULE_18__ProductSection__["default"];
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_20__SectionContainer__ = __webpack_require__(20);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SectionContainer", function () {
          return __WEBPACK_IMPORTED_MODULE_20__SectionContainer__["default"];
        });

        /***/
      },
      /* 55 => 22 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(3);
        __webpack_require__(7);
        __webpack_require__(4);
        __webpack_require__(0);
        __webpack_require__(18);
        __webpack_require__(10);
        __webpack_require__(2);
        __webpack_require__(6);
        __webpack_require__(1);
        __webpack_require__(8);
        __webpack_require__(12);
        __webpack_require__(9);
        __webpack_require__(13);
        __webpack_require__(5);
        __webpack_require__(14);
        __webpack_require__(11);
        __webpack_require__(16);
        __webpack_require__(15);
        __webpack_require__(17);
        __webpack_require__(19);
        __webpack_require__(20);
        __webpack_require__(21);
        module.exports = __webpack_require__(23);

        /***/
      },
      /* 56 => 23 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(17);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__sections__ = __webpack_require__(21);

        (function () {
          // First, we register all plugins that are used for all pages
          new __WEBPACK_IMPORTED_MODULE_1__helper__["ResponsiveHelper"]();

          // Then, we instantiate specific sections that may appear in all pages. In the past I used to scope the sections by the template for
          // (slightly) improving performance, but we had merchants who actually created their own sections based on home page sections to integrate them
          // on content page, for instance.

          var sections = new __WEBPACK_IMPORTED_MODULE_2__sections__["SectionContainer"]();

          // Sections used on index
          
          // Sections used on product page
          sections.register('product', __WEBPACK_IMPORTED_MODULE_2__sections__["ProductSection"]);

          /**
     * ----------------------------------------------------------------------------
     * AUTOMATIC CURRENCY CONVERSION
     * ----------------------------------------------------------------------------
     */

          (function () {
            if (window.theme.currencyConversionEnabled) {
              var shopCurrency = window.theme.shopCurrency,
                  currencySelectors = __WEBPACK_IMPORTED_MODULE_1__helper__["DomHelper"].nodeListToArray(document.querySelectorAll('.CurrencySelector__Select'));

              var currencyHasChanged = function currencyHasChanged(event) {
                var newCurrency = event.target.value;

                // As we have multiple selectors in the page, we need to update them all
                currencySelectors.forEach(function (currencySelectorToUpdate) {
                  currencySelectorToUpdate.value = newCurrency;
                });

                // Then we can convert everything
                __WEBPACK_IMPORTED_MODULE_1__helper__["CurrencyHelper"].convertAll();
              };

              currencySelectors.forEach(function (currencySelector) {
                currencySelector.addEventListener('change', currencyHasChanged);
              });

              var currentCurrency = shopCurrency;

              try {
                currentCurrency = localStorage.getItem('currency') || shopCurrency;
              } catch (exception) {
                currentCurrency = shopCurrency;
              }

              if (currentCurrency !== shopCurrency) {
                currencySelectors.forEach(function (currencySelector) {
                  currencySelector.value = currentCurrency;
                });

                __WEBPACK_IMPORTED_MODULE_1__helper__["CurrencyHelper"].convertAll();
              }
            }

            // If we use native multi-currency the logic is a bit different
            if (window.theme.useNativeMultiCurrency) {
              var documentDelegate = new domDelegate.Delegate(document.body);

              documentDelegate.on('change', '.CurrencySelector__Select', function (element, item) {
                var currentUrl = new URL(window.location.href);
                currentUrl.searchParams.set('currency', item.value);

                // Redirect to change the currency
                window.location.href = currentUrl.href;
              });
            }
          })();


        })();

        /***/
      }]
    /******/);

}

}
