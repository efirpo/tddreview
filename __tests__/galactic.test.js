import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    expect(solarAges.ageInDays).toEqual(12907);
  });
  test('should calculate age in Mercurial years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.mercuryAge();
    expect(solarAges.mercury).toEqual(147);
  });
  test('should calculate age in Venusian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.venusAge();
    expect(solarAges.venus).toEqual(57)
  });
  test('should calculate age in Martian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.marsAge();
    expect(solarAges.mars).toEqual(19)
  });
  test('should calculate age in Jovian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.jupiterAge();
    expect(solarAges.jupiter).toEqual(3)
  });
  test('should calculate remaing life expected in Earth years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.calculateLifeExpectancy();
    expect(solarAges.lifeExpect).toEqual(36)
  })
  test('should calculate remaining life expectancy in Mercurial years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.calculateLifeExpectancy();
    expect(solarAges.mercExpect).toEqual(147)
  })
  test('should calculate remaining life expectancy in Venusian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.calculateLifeExpectancy();
    expect(solarAges.venExpect).toEqual(58)
  })
  test('should calculate remaining life expectancy in Martian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.calculateLifeExpectancy();
    expect(solarAges.marsExpect).toEqual(19)
  })
});