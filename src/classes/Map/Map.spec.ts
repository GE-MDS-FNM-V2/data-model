import { Map } from './index'
import { Leaf } from '../Leaf'

const testPermissions = {
  create: true,
  read: true,
  update: true,
  delete: true,
  execute: false
}
describe('Map', () => {
  it('Sets the right permissions', () => {
    const type = new Map({}, Infinity, testPermissions)
    expect(type.permissions).toEqual(testPermissions)
  })

  it('Can create empty map', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    expect(true).toEqual(true)
  })

  it('Can create with key value pair', () => {
    const child = new Leaf('child1value')
    const type = new Map({
      test: child
    })
    expect(true).toEqual(true)
  })

  it('Can set key value pair', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)
    expect(true).toEqual(true)
  })

  it('Can get key', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)

    expect(type.get('test')).toEqual(child)
  })

  it('Contains return true if it contains a key', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)

    expect(type.contains('test')).toEqual(true)
  })

  it('Contains return false if it contains a key', () => {
    const child = new Leaf('child1value')
    const type = new Map()

    expect(type.contains('test')).toEqual(false)
  })

  it('.keys() Returns correct keys', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)
    type.set('test1', child)
    type.set('test2', child)

    expect(type.keys()).toEqual(['test', 'test1', 'test2'])
  })
  it('.values() Returns correct keys', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)
    type.set('test1', child)
    type.set('test2', child)

    expect(type.values()).toEqual([child, child, child])
  })
  it('.entries() Returns correct keys', () => {
    const child = new Leaf('child1value')
    const type = new Map()
    type.set('test', child)
    type.set('test1', child)
    type.set('test2', child)

    expect(type.entries()).toEqual([
      ['test', child],
      ['test1', child],
      ['test2', child]
    ])
  })

  it('Throws error if exceeds max children', () => {
    const child = new Leaf('child1value')
    const type = new Map({}, 3)
    type.set('test', child)
    type.set('test1', child)
    type.set('test2', child)
    expect(type.entries()).toEqual([
      ['test', child],
      ['test1', child],
      ['test2', child]
    ])
    try {
      type.set('test3', child)
      expect(true).toEqual(false)
    } catch (error) {
      expect(type.values()).toEqual([child, child, child])
    }
  })
})
