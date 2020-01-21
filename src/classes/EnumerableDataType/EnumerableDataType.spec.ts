import { EnumerableDataType } from './index'
import { Leaf } from '../Leaf'

describe('EnumerableDataType', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  }
  const name = 'test-name'

  it('Create an EnumerableDataType without any children', () => {
    const type = new EnumerableDataType(name, testPermissions, [])
    expect(type.children).toEqual([])
  })

  it('Create an EnumerableDataType with one child', () => {
    const child = new Leaf('child1', testPermissions, 'child1value')
    const type = new EnumerableDataType(name, testPermissions, [child])
    expect(type.children).toEqual([child])
  })

  it('Create an EnumerableDataType with two children', () => {
    const child1 = new Leaf('child1', testPermissions, 'child1value')
    const child2 = new Leaf('child2', testPermissions, 'child2value')
    const type = new EnumerableDataType(name, testPermissions, [child1, child2])
    expect(type.children).toEqual([child1, child2])
  })

  it('Adds a child', () => {
    const child1 = new Leaf('child1', testPermissions, 'child1value')
    const type = new EnumerableDataType(name, testPermissions, [])
    type.add(child1)
    expect(type.children).toEqual([child1])
  })

  it('Throws error if it exceeds max', () => {
    const child1 = new Leaf('child1', testPermissions, 'child1value')
    const type = new EnumerableDataType(name, testPermissions, [], 0)
    try {
      type.add(child1)
      expect(false).toEqual(true)
    } catch (error) {
      expect(type.children).toEqual([])
    }
  })

  it('Maps children a child', () => {
    const child1 = new Leaf('child1', testPermissions, 'child1value')
    const child2 = new Leaf('child2', testPermissions, 'child2value')
    const type = new EnumerableDataType(name, testPermissions, [child1, child2])

    const mapped = type.map((value, index) => index)
    expect(mapped.children).toEqual([0, 1])
  })

  it('Filters children', () => {
    const child1 = new Leaf('child1', testPermissions, '1')
    const child2 = new Leaf('child2', testPermissions, '2')
    const child3 = new Leaf('child3', testPermissions, '3')

    const type = new EnumerableDataType(name, testPermissions, [child1, child2, child3])

    const mapped = type.filter((child, index) => index > 0)
    expect(mapped.children).toEqual([child2, child3])
  })

  it('Contains returns true if search item is in children', () => {
    const child1 = new Leaf('child1', testPermissions, '1')
    const child2 = new Leaf('child2', testPermissions, '2')
    const child3 = new Leaf('child3', testPermissions, '3')

    const type = new EnumerableDataType(name, testPermissions, [child1, child2, child3])

    expect(type.contains(child2)).toEqual(true)
  })
})
