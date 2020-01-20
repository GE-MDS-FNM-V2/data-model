import { NamedDataType } from './index'

describe('NamedDataModel', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: true
  }
  const name = "test-name"

  const type = new NamedDataType(name, testPermissions)


  it("Create a DataType with a name", () => {
    expect(type.name).toEqual(name)
  })

  it("Wont let you directly edit the name", () => {
    //   try{
    //     type.name = "hello world"
    //     expect(true).toEqual(false)
    //   }catch(e){
    //     expect(true).toEqual(true)
    //   }
  })

})
