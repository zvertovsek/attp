import { IValidation } from "./Interfaces";
import { MinLengthValidator } from "../Validators";
import { IPersonState } from "../State";

export default class Validation implements IValidation {
  private readonly firstNameValidator: MinLengthValidator = new MinLengthValidator(1);
  private readonly lastNameValidator: MinLengthValidator = new MinLengthValidator(2);

  public Validate(state: IPersonState, errors: string[]): void {
    if (!this.firstNameValidator.IsValid(state.FirstName)) {
      errors.push('First Name is a minimum of 1 character');
    }
    if (!this.lastNameValidator.IsValid(state.LastName)) {
      errors.push('Last name is a minimum of 2 characters');
    }
  }
}
