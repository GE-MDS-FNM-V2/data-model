import { List } from '../src/classes/List'
import { Leaf } from '../src/classes/Leaf'

import { DEFAULT_PERMISSIONS } from '../src/types/permissions'


describe('Example tree', () => {
  it('Create List of Leafs', () => {
    const tree = new List([])
    const child1 = new Leaf('value1')
    const child2 = new Leaf('value2')
    const child3 = new Leaf(true)
    const child4 = new Leaf(null)
    tree.add(child1)
    tree.add(child2)
    tree.add(child3)
    tree.add(child4)
    expect(tree.children).toEqual([child1, child2, child3, child4])
  })

  it('Create List of List', () => {
    const tree = new List([])
    const child1 = new List()
    const child2 = new List()
    const child3 = new List()
    const child4 = new List()
    tree.add(child1)
    tree.add(child2)
    tree.add(child3)
    tree.add(child4)
    expect(tree.children).toEqual([child1, child2, child3, child4])
  })
})
