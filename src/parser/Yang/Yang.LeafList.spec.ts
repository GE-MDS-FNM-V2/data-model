import { YangParser } from './index'
import { leafListExample } from '../exampleResult'
import { Map } from '../../classes/Map'
import { Set } from '../../classes/Set'

describe('Yang Parser - Leaf List', () => {
  const parser = new YangParser()

  it('Parses yang leaflist without erroring', () => {
    parser.parse(leafListExample)
  })

  it('Parses yang leaflist with correct permissions', () => {
    const type = parser.parse(leafListExample)

    expect(type.getPermissions()).toEqual({
      create: true,
      read: true,
      update: true,
      delete: true,
      execute: false
    })
  })

  it('Parses yang leaflist into map with set', () => {
    const type = parser.parse(leafListExample)
    const expPermissions = {
      create: true,
      read: true,
      update: true,
      delete: true,
      execute: false
    }
    expect(type).toEqual(
      new Map({
        name: 'operation',
        permissions: expPermissions
      })
    )
  })
})
