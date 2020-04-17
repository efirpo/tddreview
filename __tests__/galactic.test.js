import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator(35);
    expect(solarAges.age).toEqual(35);
  })
  test('should calculate age in Mercury years', () => {
    let solarAges = new solarAgeCalculator(35);
    solarAges.mercuryAge();
    expect(solarAges.mercury).toEqual(145)
  })
})