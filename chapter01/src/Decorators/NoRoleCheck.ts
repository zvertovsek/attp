import { IDecoratorExample } from './Interfaces';
import { Role } from './Decorators';

export default class NoRoleCheck implements IDecoratorExample {
    @Role("user")
    AnyoneCanRun(args: string): void {
        console.log(args);
    }

    @Role("admin")
    AdminOnly(args: string): void {
        console.log(args);
    }
}
