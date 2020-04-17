export class solarAgeCalculator {
  constructor(age) {
    this.age = age;
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  }
  // calculations simplified by only using years and ignoring leap years

  mercuryAge() {
    this.mercury = Math.floor((this.age * 365) / 88)
  }

  venusAge() {

  }
}