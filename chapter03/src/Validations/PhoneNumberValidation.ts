import { IValidation } from "./Interfaces";
import { IPersonState } from "../State";
import { MinLengthValidator, RegularExpressionValidator } from "../Validators";

const phoneRegex: string = `^(?:\\((?:[0-9]{3})\\)|(?:[0-9]{3}))[-. ]?(?:[0-9]{4})[-. ]?(?:[0-9]{4})$`;

export default class Validation implements IValidation {
  private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(1);
  private readonly regexValidator: RegularExpressionValidator = new RegularExpressionValidator(phoneRegex);
  
  public Validate(state: IPersonState, errors: string[]): void {
    if (!this.minLengthValidator.IsValid(state.PhoneNumber)) {
      errors.push('Phone number is mandatory');
    }
    if (!this.regexValidator.IsValid(state.PhoneNumber)) {
      errors.push('Phone number is invalid');
    }
  }
} 