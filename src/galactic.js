export class solarAgeCalculator {
  constructor(year, month, day) {
    this.ageInDays = Math.round((new Date() - new Date(year, (month - 1), day)) / (1000 * 60 * 60 * 24));
    this.mercury;
    this.venus;
    this.mars;
    this.jupiter;
    this.lifeExpect;
    this.mercExpect;
    this.venExpect;
    this.marsExpect;
    this.jupExpect;

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
    this.lifeExpect = Math.round(71 - (this.ageInDays / 365))
    // this.mercExpect = Math.round(((71 * 365) / 88) - Math.round((this.ageInDays / 88)))
  }

}