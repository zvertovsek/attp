import { IValidation } from "./Interfaces";
import { MinLengthValidator, RegularExpressionValidator } from "../Validators";
import { IPersonState } from "../State";

const postCodeRegex: string = '^[0-9A-Z]{3}[ ]?[0-9A-Z]{3}$';

export default class Validation implements IValidation {
  private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(5);
  private readonly zipCodeValidator: RegularExpressionValidator = new RegularExpressionValidator(postCodeRegex);

  public Validate(state: IPersonState, errors: string[]) {
    if (!this.minLengthValidator.IsValid(state.Address1)) {
      errors.push('Address line 1 must be greater then 5 characters');
    }
    if (!this.minLengthValidator.IsValid(state.Town)) {
      errors.push('Town must be greater then 5 characters');
    }
    if (!this.minLengthValidator.IsValid(state.County)) {
      errors.push('County must be greater then 5 characters');
    }
    if (!this.zipCodeValidator.IsValid(state.PostCode)) {
      errors.push('The postal zip code is invalid')
    }
  }
}