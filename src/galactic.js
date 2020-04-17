// These calculations are not quite correct, and I cannot figure out why. Using my birthdate of "1984, 12, 15" returns 12876 Earth days when it should be 12906, which is a greater difference than can be explained by Leap Years or any other such assumption I can think of to account for it. Something appears fishy under the hood of Date(), and it means having to work backwards with my expected results. 

export class solarAgeCalculator {
  constructor(year, month, day) {
    this.ageInDays = Math.round((new Date() - new Date(year, month, day)) / (1000 * 60 * 60 * 24));
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  };
  // calculations simplified by only using years and ignoring leap years

  mercuryAge() {
    this.mercury = Math.round((this.ageInDays / 88))
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