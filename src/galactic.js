export class solarAgeCalculator {
  constructor(year, month, day) {
    this.ageinDays = Math.round((new Date() - new Date(year, month, day)) / (1000 * 60 * 60 * 24));
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  };
  // calculations simplified by only using years and ignoring leap years

  mercuryAge() {
    // this.mercury = Math.round((this.ageinDays / 88))
  };

  // venusAge() {
  //   this.venus = Math.round((this.age * 365) / 225)
  // };

  // marsAge() {
  //   this.mars = Math.round((this.age) * 365 / 687)
  // };

  // jupiterAge() {
  //   this.jupiter = Math.round((this.age) / 12)
  // };

}