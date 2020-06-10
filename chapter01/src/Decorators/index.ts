
import User from './User';
import { IDecoratorExample } from './Interfaces';
import NoRoleCheck from './NoRoleCheck';

function TestDecoratorExample(decoratorMethod: IDecoratorExample) {
    console.log(`Current User ${User.name}`);

    decoratorMethod.AnyoneCanRun(`Running as a user`);
    decoratorMethod.AdminOnly(`Running as an admin`);
}

TestDecoratorExample(new NoRoleCheck());
