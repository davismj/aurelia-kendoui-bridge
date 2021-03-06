'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, ResponsivePanel;

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
      _export('ResponsivePanel', ResponsivePanel = (_dec = customAttribute(constants.attributePrefix + 'responsivepanel'), _dec2 = generateBindables('kendoResponsivePanel'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function ResponsivePanel(element, widgetBase) {
          _classCallCheck(this, ResponsivePanel);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoResponsivePanel').useElement(this.element).linkViewModel(this);
        }

        ResponsivePanel.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        ResponsivePanel.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        ResponsivePanel.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        ResponsivePanel.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        ResponsivePanel.prototype.detached = function detached() {
          this.destroy();
        };

        return ResponsivePanel;
      }()) || _class) || _class) || _class));

      _export('ResponsivePanel', ResponsivePanel);
    }
  };
});
//# sourceMappingURL=../dist/dev/responsivepanel/responsivepanel.js.map
