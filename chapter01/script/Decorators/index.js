"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const NoRoleCheck_1 = __importDefault(require("./NoRoleCheck"));
function TestDecoratorExample(decoratorMethod) {
    console.log(`Current User ${User_1.default.name}`);
    decoratorMethod.AnyoneCanRun(`Running as a user`);
    decoratorMethod.AdminOnly(`Running as an admin`);
}
TestDecoratorExample(new NoRoleCheck_1.default());
//# sourceMappingURL=index.js.map