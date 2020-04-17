import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator();
    solarAges.splitDate("1984-12-15");
    solarAges.calculateAgeInDays();
    expect(solarAges.ageInDays).toEqual(12908);
  });
  // test('should calculate age in Mercurial years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.mercuryAge();
  //   expect(solarAges.mercury).toEqual(147);
  // });
  // test('should calculate age in Venusian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.venusAge();
  //   expect(solarAges.venus).toEqual(57)
  // });
  // test('should calculate age in Martian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.marsAge();
  //   expect(solarAges.mars).toEqual(19)
  // });
  // test('should calculate age in Jovian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.jupiterAge();
  //   expect(solarAges.jupiter).toEqual(3)
  // });
  // test('should calculate remaing life expected in Earth years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.calculateLifeExpectancy(71);
  //   expect(solarAges.lifeExpect).toEqual(36)
  // })
  // test('should calculate remaining life expectancy in Mercurial years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.calculateLifeExpectancy(71);
  //   expect(solarAges.mercExpect).toEqual(147)
  // })
  // test('should calculate remaining life expectancy in Venusian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.calculateLifeExpectancy(71);
  //   expect(solarAges.venExpect).toEqual(58)
  // })
  // test('should calculate remaining life expectancy in Martian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.calculateLifeExpectancy(71);
  //   expect(solarAges.marsExpect).toEqual(19)
  // })
  // test('should calculate remaining life expectany in Jovian years', () => {
  //   let solarAges = new solarAgeCalculator(1984, 12, 15);
  //   solarAges.calculateLifeExpectancy(71);
  //   expect(solarAges.jupExpect).toEqual(3)
  // })
});