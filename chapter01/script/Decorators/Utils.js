"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
function IsInRole(role) {
    return User_1.default.roles.some(r => r.role === role);
}
exports.IsInRole = IsInRole;
//# sourceMappingURL=Utils.js.map