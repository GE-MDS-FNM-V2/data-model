import { Action } from './index'

describe('Action', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  }
  const name = "test-name"

  const action = jest.fn()
  

  it("Create a DataType with permissions", () => {
    const type = new Action(action, testPermissions)
    expect(type.permissions).toEqual(testPermissions)
  })

  it("Will run the function", () => {
    const type = new Action(action)
    type.run()
    expect(type.action).toHaveBeenCalled()
  })

  it("Will run the function and increase the numberRuns", () => {
    const type = new Action(action)
    type.run()
    expect(type.numberRuns).toEqual(1)
  })

})
