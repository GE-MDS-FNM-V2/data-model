import { DataType } from '../../classes/DataType'
import { DEFAULT_PERMISSIONS, PERMISSIONS } from '../../types/permissions'
import { YangParser } from './index'
import { leafExample, leafExample1 } from '../exampleResult'
import { Leaf } from '../../classes/Leaf'
import { Map } from '../../classes/Map'

describe('Yang Parser', () => {
  const parser = new YangParser()

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
      execute: true
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

  it('Parses example yang leaf1 into Map->Leaf', () => {
    const parsedResult = parser.parse(leafExample1)
    const expected = new Map(
      {
        'retry-interval': new Leaf('TODO', {
          create: true,
          read: true,
          update: false,
          delete: false,
          execute: false
        })
      },
      Infinity,
      {
        create: true,
        read: true,
        update: false,
        delete: false,
        execute: false
      }
    )
    expect(parsedResult).toEqual(expected)
  })
})
