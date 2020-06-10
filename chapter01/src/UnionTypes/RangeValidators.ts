class RangeValidatorBase {
    constructor(private start: number, private end: number) {}
    
    protected RangeCheck(value: number): boolean {
        return value >= this.start && value <= this.end;
    }
    
    protected GetNumber(value: string): number {
        return new Number(value).valueOf();
    }
}

class SeparateTypeRangeValidator extends RangeValidatorBase {
    IsInRangeString(value: string): boolean {
        return this.RangeCheck(this.GetNumber(value));
    }

    IsInRangeNumber(value: number): boolean {
        return this.RangeCheck(value);
    }
}

class AnyTypeRangeValidator extends RangeValidatorBase {
    IsInRange(value: any): boolean {
        if (typeof value === 'string') {
            return this.RangeCheck(this.GetNumber(value));
        } else 
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return false;
    }
}

class UnionTypeRangeValidator extends RangeValidatorBase {
    IsInRange(value: string | number): boolean {
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }

        return this.RangeCheck(this.GetNumber(value));
    }
}