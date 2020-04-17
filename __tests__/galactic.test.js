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
  test('should calculate age in years on venus', () => {
    let solarAges = new solarAgeCalculator(35);
    solarAges.venusAge();
    expect(solarAges.venus).toEqual(57)
  })
  test('should calculate age in Mars years', () => {
    let solarAges = new solarAgeCalculator(35);
    solarAges.marsAge();
    expect(solarAges.mars).toEqual(19)
  })
  test('should calculate age in Jupiter years', () => {
    let solarAges = new solarAgeCalculator(35);
    solarAges.jupiterAge();
    expect(solarAges.jupiter).toEqual(3)
  })
})