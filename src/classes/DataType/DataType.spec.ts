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

  it('Runs update', () => {
    const type = new DataType(testPermissions)
    expect(type.update()).toEqual('TODO - DataType.update')
  })

  it('Runs delete', () => {
    const type = new DataType(testPermissions)
    expect(type.delete()).toEqual('TODO - DataType.delete')
  })
})
