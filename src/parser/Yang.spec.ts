import { DataType } from '../classes/DataType'
import { DEFAULT_PERMISSIONS } from '../types/permissions'
import { YangParser } from './Yang'

describe('Yang Parser', () => {
  const parser = new YangParser()

  it('Creates an empty datatype if given empty string', () => {
    const type = new DataType(DEFAULT_PERMISSIONS)
    expect(parser.parse('')).toEqual(type)
  })
})
