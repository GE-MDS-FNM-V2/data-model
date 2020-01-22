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

  it('Throws error if child already exists', () => {
    const child = new Leaf('child1value')
    const type = new Set([child])
    try {
        type.add(child)
        expect(false).toEqual(true)
    } catch (error) {
        expect(type.length).toEqual(1)
        expect(type.children).toEqual([child])
    }
  })

  it('Returns new item if successful', () => {
    const child = new Leaf('child1value')
    const child2 = new Leaf('child2value')

    const type = new Set([child])
        type.add(child2)
        expect(type.length).toEqual(2)
        expect(type.children).toEqual([child, child2])
  })

})
