class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
 subtract(fraction) {                                                                                                                                                                                                                                                                     
    let newNumerator = (this.numerator * fraction.denominator) - (fraction.numerator * this.denominator);
    let newDenominator = this.denominator * fraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
}

const fraction1 = new Fraction(3, 4);
const fraction2 = new Fraction(1, 4);

const result = fraction1.subtract(fraction2);

console.log(result);
