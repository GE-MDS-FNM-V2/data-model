import { Action } from './index'
import { Leaf } from '../Leaf'

describe('Action', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  }
  const name = 'test-name'

  const action = jest.fn()

  it('Create a DataType with permissions', () => {
    const type = new Action({
      action,
      permissions: testPermissions
    })
    expect(type.getPermissions()).toEqual(testPermissions)
  })

  it('Create a DataType with children', () => {
    const children = [
      new Leaf({ value: '1234', name: 'asdf' }),
      new Leaf({ value: '1234', name: 'asdf' })
    ]
    const type = new Action({
      children
    })
    expect(type.children).toEqual(children)
  })

  it('Will run the function', () => {
    const type = new Action({ action })
    type.run()
    expect(type.action).toHaveBeenCalled()
  })

  it('Will run the function and increase the numberRuns', () => {
    const type = new Action(action)
    type.run()
    expect(type.numberRuns).toEqual(1)
  })
})
