import User from './User';

export function IsInRole(role: string): boolean {
    return User.roles.some(r => r.role === role);
}
