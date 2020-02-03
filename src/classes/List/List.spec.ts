import { List } from './index'
import { Leaf } from '../Leaf'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'

describe('List', () => {
  it('Create an List without any children', () => {
    const type = new List({})
    expect(type.children).toEqual([])
  })

  it('Create an List with one child', () => {
    const child = new Leaf({ value: 'asdf', name: 'asdf' })
    const type = new List({ children: [child] })
    expect(type.children).toEqual([child])
  })

  it('Create an List with two children', () => {
    const child1 = new Leaf({ value: 'asdf', name: 'asdf' })
    const child2 = new Leaf({ value: 'asdf', name: 'asdf' })
    const type = new List({ children: [child1, child2] })
    expect(type.children).toEqual([child1, child2])
  })

  it('Adds a child', () => {
    const child1 = new Leaf({ value: 'asdf', name: 'asdf' })
    const type = new List({})
    type.add(child1)
    expect(type.children).toEqual([child1])
  })

  it('Throws error if it exceeds max when adding item', () => {
    const child1 = new Leaf({ value: 'asdf', name: 'asdf' })
    const type = new List({ maxChildren: 0 })
    try {
      type.add(child1)
      expect(false).toEqual(true)
    } catch (error) {
      expect(type.children).toEqual([])
    }
  })

  it('Throws error if it exceeds max when initializing', () => {
    const child1 = new Leaf({ value: 'asdf', name: 'asdf' })
    const child2 = new Leaf({ value: 'asdf2', name: 'asdf2' })
    const child3 = new Leaf({ value: 'asdf3', name: 'asdf3' })
    try {
      const type = new List({
        children: [child1, child2, child3],
        maxChildren: 0
      })
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(EXCEEDS_MAX_CHILDREN)
    }
  })

  it('Maps children a child', () => {
    const child1 = new Leaf({ value: 'asdf', name: 'asdf' })
    const child2 = new Leaf({ value: 'asdf', name: 'asdf' })
    const type = new List({ children: [child1, child2] })

    const mapped = type.map((value, index) => index)
    expect(mapped.children).toEqual([0, 1])
  })

  it('Filters children', () => {
    const child1 = new Leaf({ value: 'asdf1', name: 'asdf' })
    const child2 = new Leaf({ value: 'asdf2', name: 'asdf' })
    const child3 = new Leaf({ value: 'asdf3', name: 'asdf' })

    const type = new List({ children: [child1, child2, child3] })

    const mapped = type.filter((child, index) => index > 0)
    expect(mapped.children).toEqual([child2, child3])
  })

  it('Contains returns true if search item is in children', () => {
    const child1 = new Leaf({ value: 'asdf1', name: 'asdf' })
    const child2 = new Leaf({ value: 'asdf2', name: 'asdf' })
    const child3 = new Leaf({ value: 'asdf3', name: 'asdf' })

    const type = new List({ children: [child1, child2, child3] })

    expect(type.contains(child2)).toEqual(true)
  })
})
