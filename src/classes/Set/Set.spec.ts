import { Set } from './index'
import { Leaf } from '../Leaf'

describe('Set', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  }
  const name = 'test-name'

  it('Throws error if child already exists', () => {
    const child = new Leaf('child1', testPermissions, 'child1value')
    const type = new Set(name, testPermissions, [child])
    try {
        type.add(child)
        expect(false).toEqual(true)
    } catch (error) {
        expect(type.length).toEqual(1)
        expect(type.children).toEqual([child])
    }
  })

  it('Returns new item if successful', () => {
    const child = new Leaf('child1', testPermissions, 'child1value')
    const child2 = new Leaf('child2', testPermissions, 'child1value')

    const type = new Set(name, testPermissions, [child])
        type.add(child2)
        expect(type.length).toEqual(2)
        expect(type.children).toEqual([child, child2])
  })

})
