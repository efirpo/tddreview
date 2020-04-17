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
    this.mercury = Math.round((this.age * 365) / 88)
  }

  venusAge() {
    this.venus = Math.round((this.age * 365) / 225)
  }

  marsAge() {
    this.mars = Math.round((this.age) * 365 / 687)
  }

  jupiterAge() {

  }
}