import { solarAgeCalculator } from './../src/galactic.js'

describe('solar system age calculations', () => {
  test('should create a solar-age object', () => {
    let solarAges = new solarAgeCalculator(1984, 12, 15);
    expect(solarAges.age).toEqual(12877);
  })
})