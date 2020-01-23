import { DataType } from '../../classes/DataType'
import { DEFAULT_PERMISSIONS, PERMISSIONS } from '../../types/permissions'
import { YangParser } from './index'
import { leafExample } from '../exampleResult'
import { Leaf } from '../../classes/Leaf'
import { Map } from '../../classes/Map'

describe('Yang Parser', () => {
  const parser = new YangParser()

  it('Returns null if given empty string', () => {
    const expected = null
    expect(parser.parse('{}')).toEqual(null)
  })

  it('Parses yang leaf without erroring', () => {
    try {
      const parsedResult = parser.parse(leafExample)
      expect(true).toEqual(true)
    } catch (error) {
      expect(false).toEqual(true)
    }
  })

  it('Parses yang leaf into Map->Leaf', () => {
    const parsedResult = parser.parse(leafExample)
    const expectedPermissions: PERMISSIONS = {
      create: true,
      read: true,
      update: true,
      delete: true,
      execute: false
    }
    const expected = new Map(
      {
        'retry-interval': new Leaf('TODO', expectedPermissions)
      },
      Infinity,
      expectedPermissions
    )
    expect(parsedResult).toEqual(expected)
  })
})
