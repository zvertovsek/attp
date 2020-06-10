"use strict";
class RangeValidatorBase {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    RangeCheck(value) {
        return value >= this.start && value <= this.end;
    }
    GetNumber(value) {
        return new Number(value).valueOf();
    }
}
class SeparateTypeRangeValidator extends RangeValidatorBase {
    IsInRangeString(value) {
        return this.RangeCheck(this.GetNumber(value));
    }
    IsInRangeNumber(value) {
        return this.RangeCheck(value);
    }
}
class AnyTypeRangeValidator extends RangeValidatorBase {
    IsInRange(value) {
        if (typeof value === 'string') {
            return this.RangeCheck(this.GetNumber(value));
        }
        else if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return false;
    }
}
class UnionTypeRangeValidator extends RangeValidatorBase {
    IsInRange(value) {
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}
//# sourceMappingURL=RangeValidators.js.map