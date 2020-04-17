export class solarAgeCalculator {
  constructor() {
    this.year;
    this.month;
    this.day;
    this.ageInDays;
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

  splitDate(value) {
    // let valArray = value.split("-");
    // this.year = valArray[0];
    // this.month = valArray[1];
    // this.day = valArray[2]
  }

  calculateAgeInDays() {
    this.ageInDays = Math.round((new Date() - new Date(this.year, (this.month - 1), this.day)) / (1000 * 60 * 60 * 24));
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

  calculateLifeExpectancy(demographic) {
    this.lifeExpect = Math.round(demographic - (this.ageInDays / 365));
    this.mercExpect = Math.round(((demographic * 365) / 88) - Math.round((this.ageInDays / 88)));
    this.venExpect = Math.round(((demographic * 365) / 225) - Math.round((this.ageInDays / 225)));
    this.marsExpect = Math.round(((demographic * 365) / 687) - Math.round((this.ageInDays / 687)));
    this.jupExpect = Math.round((demographic / 12) - Math.round(((this.ageInDays / 365) / 12)));
  }

}