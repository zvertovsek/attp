"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const User_1 = __importDefault(require("./User"));
function Role(role) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            if (Utils_1.IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${User_1.default.name} is not in the ${role} role`);
        };
        return descriptor;
    };
}
exports.Role = Role;
//# sourceMappingURL=Decorators.js.map