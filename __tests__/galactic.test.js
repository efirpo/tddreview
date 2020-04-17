import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    expect(solarAges.ageInDays).toEqual(12876);
  })
  test('should calculate age in Mercury years', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    solarAges.mercuryAge();
    expect(solarAges.mercury).toEqual(146);
  })
})