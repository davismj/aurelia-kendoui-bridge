'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Draggable;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Draggable', Draggable = (_dec = customAttribute(constants.attributePrefix + 'draggable'), _dec2 = generateBindables('kendoDraggable'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Draggable(element, widgetBase) {
          var _this = this;

          _classCallCheck(this, Draggable);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDraggable').useElement(this.element).beforeInitialize(function (options) {
            return _this.beforeInitialize(options);
          }).linkViewModel(this);
        }

        Draggable.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Draggable.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Draggable.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Draggable.prototype.beforeInitialize = function beforeInitialize(options) {
          if (options.container) {
            Object.assign(options, { container: kendo.jQuery(options.container) });
          }
        };

        Draggable.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Draggable.prototype.detached = function detached() {
          this.destroy();
        };

        return Draggable;
      }()) || _class) || _class) || _class));

      _export('Draggable', Draggable);
    }
  };
});
//# sourceMappingURL=../dist/dev/draggable/draggable.js.map
