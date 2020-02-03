import { DataType } from './index'

describe('DataModel', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  }
  const type = new DataType(testPermissions)

  it('Create a new object with permissions', () => {
    expect(type.getPermissions()).toEqual(testPermissions)
  })
})
