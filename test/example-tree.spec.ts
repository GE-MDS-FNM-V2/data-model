import { NamedDataType } from '../src/classes/NamedDataType'
import { DEFAULT_PERMISSIONS } from '../src/types/permissions'
const generateTree = () => {
  const named = new NamedDataType('name', DEFAULT_PERMISSIONS)
}
describe('Example tree', () => {
  it('doesnt error on create', () => {
    let tree = generateTree()
    expect(true).toBeTruthy()
  })
})
