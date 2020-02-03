import { DataType } from '../../classes/DataType'
import { DEFAULT_PERMISSIONS, PERMISSIONS } from '../../types/permissions'
import { YangParser } from './index'
import {
  emptyListExample,
  listExample,
  unboundedListExample,
  boundedListExample
} from '../exampleResult'
import { Leaf } from '../../classes/Leaf'
import { Map } from '../../classes/Map'
import { List } from '../../classes/List'

describe('Yang Parser - List', () => {
  const parser = new YangParser()

  it('Parses yang empty list without erroring', () => {
    parser.parse(emptyListExample)
  })

  it('Parses yang list with children without erroring', () => {
    parser.parse(listExample)
  })

  it('Parses yang list with max_children set to "unbounded"', () => {
    const result = parser.parse(unboundedListExample) as List
    expect(result.maxChildren).toEqual(Infinity)
  })

  it('Parses yang list with max_children set to 10', () => {
    const result = parser.parse(boundedListExample) as List
    expect(result.maxChildren).toEqual(10)
  })

  it('Parses yang list with children with to Map correct children', () => {
    const parsedResult = parser.parse(listExample)
    const children = {
      'sub-prefix': new Leaf({
        name: 'sub-prefix',
        permissions: {
          create: true,
          read: true,
          update: true,
          delete: true,
          execute: false
        }
      }),
      'sub-prefix-len': new Leaf({
        name: 'sub-prefix-len',
        permissions: {
          create: true,
          read: true,
          update: true,
          delete: true,
          execute: false
        }
      })
    }
    const expected = new Map({
      children,
      name: '1234',
      permissions: {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      }
    })
    expect(parsedResult).toEqual(expected)
  })
})
