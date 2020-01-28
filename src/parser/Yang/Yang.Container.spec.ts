import { DataType } from '../../classes/DataType'
import { DEFAULT_PERMISSIONS, PERMISSIONS } from '../../types/permissions'
import { YangParser } from './index'
import { emptyContainerExample, containerSimpleExample } from '../exampleResult'
import { Leaf } from '../../classes/Leaf'
import { Map } from '../../classes/Map'
import { List } from '../../classes/List'

describe('Yang Parser - Container', () => {
  const parser = new YangParser()

  it('Parses yang empty container without erroring', () => {
    parser.parse(emptyContainerExample)
  })

  it('Parses yang empty container with correct permissions', () => {
    const result = parser.parse(emptyContainerExample)

    const expected = new Map(
      {
        'prefix-delegation': new List([], Infinity, {
          create: true,
          read: true,
          update: true,
          delete: true,
          execute: false
        })
      },
      Infinity,
      {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      }
    )

    expect(result).toEqual(expected)
  })

  it('Parses yang empty container with one child', () => {
    const result = parser.parse(containerSimpleExample)

    const expected = new Map(
      {
        'prefix-delegation': new List(
          [
            new Map(
              {
                'request-prefix-exclude': new Leaf('TODO', {
                  create: true,
                  read: true,
                  update: true,
                  delete: true,
                  execute: false
                })
              },
              Infinity,
              {
                create: true,
                read: true,
                update: true,
                delete: true,
                execute: false
              }
            )
          ],
          Infinity,
          {
            create: true,
            read: true,
            update: true,
            delete: true,
            execute: false
          }
        )
      },
      Infinity,
      {
        create: true,
        read: true,
        update: true,
        delete: true,
        execute: false
      }
    )

    expect(result).toEqual(expected)
  })
})
