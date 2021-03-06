import DummyClass, * as m from '../src/t2'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })

  it('has name', () => {
    expect(m.name).toBe('t2')
  })
})
