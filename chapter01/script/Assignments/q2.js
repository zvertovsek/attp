"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log(arguments);
        originalMethod.apply(this, arguments);
    };
    return descriptor;
}
class Command {
    constructor(Name = "", Action = new Function()) {
        this.Name = Name;
        this.Action = Action;
    }
}
class CommandCollection {
    constructor() {
        this.commands = new Map();
    }
    AddCommand(command) {
        this.commands.set(command.Name, command);
    }
}
__decorate([
    Log
], CommandCollection.prototype, "AddCommand", null);
let commands = new CommandCollection();
commands.AddCommand(new Command('Add', () => console.log('Add Command Action')));
//# sourceMappingURL=q2.js.map