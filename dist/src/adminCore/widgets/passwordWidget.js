"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widget_interface_1 = require("./widget.interface");
class PasswordWidget extends widget_interface_1.BaseWidget {
    constructor() {
        super(...arguments);
        this.template = 'widgets/password.njk';
    }
}
exports.default = PasswordWidget;
//# sourceMappingURL=passwordWidget.js.map