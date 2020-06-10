import { IValidator } from "./Interfaces";
import { StringOrNull } from "../Types";

export default class Validator implements IValidator<StringOrNull> {
  private regex: RegExp;
  constructor(expression: string) {
    this.regex = new RegExp(expression);
  }

  public IsValid (input: StringOrNull) {
    if (!input) {
      return false;
    }

    return this.regex.test(input);
  }
}