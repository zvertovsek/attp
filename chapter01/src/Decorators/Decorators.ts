import { IsInRole } from "./Utils";
import User from './User';

export function Role(role: string) {
    return function(target: any, 
        propertyKey: string | symbol, 
        descriptor: PropertyDescriptor
    ) {
        let originalMethod = descriptor.value;
        descriptor.value = function() {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
    
            console.log(`${User.name} is not in the ${role} role`);
        }
    
        return descriptor;    
    }
}
