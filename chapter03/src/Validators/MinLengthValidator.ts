import { IValidator } from "./Interfaces";
import { StringOrNull } from "../Types";

export default class Validator implements IValidator<StringOrNull> {
  private minLength: number;
  constructor(minLength: number) {
    this.minLength = minLength;
  }

  public IsValid(input: StringOrNull): boolean {
    if (!input) {
      return false;
    }

    return input.length >= this.minLength;
  }
}
