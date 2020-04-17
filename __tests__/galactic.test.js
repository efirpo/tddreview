import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    expect(solarAges.ageInDays).toEqual(12876);
  })
  test('should calculate age in Mercurial years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.mercuryAge();
    expect(solarAges.mercury).toEqual(146);
  })
  test('should calculate age in Venusian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.venusAge();
    expect(solarAges.venus).toEqual(57)
  })
  test('should calculate age in Martian years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.marsAge();
    expect(solarAges.mars).toEqual(19)
  })
})