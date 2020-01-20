import { Action } from './index'

describe('NamedDataModel', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  }
  const name = "test-name"

  const action = jest.fn()
  


  it("Create a DataType with a name", () => {
    const type = new Action(name, testPermissions, action)
    expect(type.name).toEqual(name)
  })

  it("Will run the function", () => {
    const type = new Action(name, testPermissions, action)
    type.run()
    expect(type.action).toHaveBeenCalled()
  })

  it("Will run the function and increase the numberRuns", () => {
    const type = new Action(name, testPermissions, action)
    type.run()
    expect(type.numberRuns).toEqual(1)
  })

})
