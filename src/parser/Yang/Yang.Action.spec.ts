import { YangParser } from './index'
import { actionNoChildren, actionWithChildren } from '../exampleResult'
import { MIN_CHILDREN_NOT_MET } from '../../types/errors'
import { Action } from '../../classes/Action'
import { Map } from '../../classes/Map'
import { Leaf } from '../../classes/Leaf'
import { PERMISSIONS } from '../../types/permissions'

describe('Yang Parser - Action', () => {
  const parser = new YangParser()

  it('Parses yang action type without erroring', () => {
    parser.parse(actionNoChildren)
  })

  it('Parses yang action type with children', () => {
    const expectedPermissions: PERMISSIONS = {
      create: true,
      read: true,
      update: false,
      delete: false,
      execute: false
    }

    // I dont have any clue why .toEqual was saying these things were different, but if you stringify them they are identical
    expect(parser.parse(actionWithChildren)).toEqual(
      new Action({
        name: 'delete-image',
        permissions: {
          create: false,
          read: false,
          update: false,
          delete: false,
          execute: true
        },
        children: [
          new Leaf({
            name: 'retry-interval',
            permissions: {
              create: true,
              read: true,
              update: false,
              delete: false,
              execute: false
            }
          })
        ]
      })
    )
  })
})
