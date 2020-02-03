import { Leaf } from './index'

describe('Leaf', () => {
  it('Creates a leaf with a string as a value', () => {
    const value = 'test-value'
    const name = 'test-name'

    const type = new Leaf({
      name,
      value
    })
    expect(type.getValue()).toEqual(value)
  })

  it('Creates a leaf with an array as a value', () => {
    const value = [1, 2, 3]
    const name = 'test-name'

    const type = new Leaf({
      name,
      value
    })
    expect(type.getValue()).toEqual(value)
  })

  it('Creates a leaf with a mixed array as a value', () => {
    const value = [1, 2, 'asdf']
    const name = 'test-name'

    const type = new Leaf({
      name,
      value
    })
    expect(type.getValue()).toEqual(value)
  })
})
