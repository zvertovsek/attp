function Log(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
        console.log(arguments);
        originalMethod.apply(this, arguments);
    }
    return descriptor;
}

class Command {
    public constructor(
        public Name: string = "", 
        public Action: Function = new Function()
    ) {}
}

class CommandCollection {
    private readonly commands: Map<string, Command>;
    constructor() {
        this.commands = new Map<string, Command>();
    }

    @Log
    public AddCommand(command: Command): void {
        this.commands.set(command.Name, command);
    }
}


let commands = new CommandCollection();
commands.AddCommand(new Command('Add', ()=> console.log('Add Command Action')));

