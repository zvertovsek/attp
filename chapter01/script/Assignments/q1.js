"use strict";
class FahrenheitToCelsius {
    Convert(temparature) {
        return (temparature - 32) * 5 / 9;
    }
}
class CelsiusToFahrenheit {
    Convert(temparature) {
        return (temparature * 9 / 5) + 32;
    }
}
class Converter {
    Convert(temparature, converter) {
        return converter.Convert(temparature);
    }
}
const toCelsiusConverter = new FahrenheitToCelsius();
const toFahrenheitConverter = new CelsiusToFahrenheit();
console.log(`30C == ${toFahrenheitConverter.Convert(30)}F`);
console.log(`86F == ${toCelsiusConverter.Convert(86)}C`);
const converter = new Converter();
console.log(`30C == ${converter.Convert(30, new CelsiusToFahrenheit())}F`);
console.log(`86F == ${converter.Convert(86, new FahrenheitToCelsius())}C`);
//# sourceMappingURL=q1.js.map