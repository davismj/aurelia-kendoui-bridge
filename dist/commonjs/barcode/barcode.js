'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Barcode = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = exports.Barcode = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'barcode'), _dec2 = (0, _decorators.generateBindables)('kendoBarcode'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Barcode(element, widgetBase) {
    _classCallCheck(this, Barcode);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoBarcode').useElement(this.element).linkViewModel(this);
  }

  Barcode.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Barcode.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Barcode.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Barcode.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Barcode.prototype.detached = function detached() {
    this.destroy();
  };

  return Barcode;
}()) || _class) || _class) || _class);