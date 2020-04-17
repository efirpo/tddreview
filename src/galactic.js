export class solarAgeCalculator {
  constructor(year, month, day) {
    this.ageInDays = Math.round((new Date() - new Date(year, (month - 1), day)) / (1000 * 60 * 60 * 24));
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
  }

  mercuryAge() {
    this.mercury = Math.round((this.ageInDays / 88));
  }

  venusAge() {
    this.venus = Math.round((this.ageInDays / 225));
  }

  marsAge() {
    this.mars = Math.round((this.ageInDays / 687));
  }

  jupiterAge() {
    this.jupiter = Math.round((this.ageInDays / 365) / 12);
  }

  calculateLifeExpectancy() {

  }
}