import { List } from '../src/classes/List'
import { Leaf } from '../src/classes/Leaf'

import { DEFAULT_PERMISSIONS } from '../src/types/permissions'

describe('Example tree', () => {
  it('Create List of Leafs', () => {
    const tree = new List({})
    const child1 = new Leaf({
      name: 'child1'
    })
    const child2 = new Leaf({
      name: 'child2'
    })
    const child3 = new Leaf({
      name: 'child3'
    })
    const child4 = new Leaf({
      name: 'child4'
    })
    tree.add(child1)
    tree.add(child2)
    tree.add(child3)
    tree.add(child4)
    expect(tree.children).toEqual([child1, child2, child3, child4])
  })

  it('Create List of List', () => {
    const tree = new List({})
    const child1 = new Leaf({
      name: 'child1'
    })
    const child2 = new Leaf({
      name: 'child2'
    })
    const child3 = new Leaf({
      name: 'child3'
    })
    const child4 = new Leaf({
      name: 'child4'
    })
    tree.add(child1)
    tree.add(child2)
    tree.add(child3)
    tree.add(child4)
    expect(tree.children).toEqual([child1, child2, child3, child4])
  })
})
