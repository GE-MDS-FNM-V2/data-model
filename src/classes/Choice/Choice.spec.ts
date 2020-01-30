import { Choice } from './index'
import { Leaf } from '../Leaf'
import { MIN_CHILDREN_NOT_MET, KEY_DOES_NOT_EXIST } from '../../types/errors'
import { Map } from '../Map'

describe('Choice', () => {
  const testPermissions = {
    create: true,
    read: true,
    update: true,
    delete: true,
    execute: false
  }

  it('Create a Choice without erroring', () => {
    const type = new Choice({
      hello: new Leaf('world'),
      asdf: new Leaf('1234')
    })
  })

  it('Create a Choice with default permissions', () => {
    const type = new Choice(
      {
        hello: new Leaf('world'),
        asdf: new Leaf('1234')
      },
      'hello',
      100,
      {
        create: false,
        read: false,
        update: false,
        delete: false,
        execute: false
      }
    )
    expect(type.getPermissions()).toEqual({
      create: false,
      read: false,
      update: false,
      delete: false,
      execute: false
    })
  })

  it('Create a Choice with correct maxChildren', () => {
    const type = new Choice(
      {
        hello: new Leaf('world'),
        asdf: new Leaf('1234')
      },
      'hello',
      100
    )
    expect(type.maxChildren).toEqual(100)
  })

  it('new Choice() has correct children', () => {
    const children = {
      hello: new Leaf('world'),
      asdf: new Leaf('1234')
    }
    const type = new Choice(children)
    expect(type.children).toEqual(children)
  })

  it('Create a Choice with choices', () => {
    const type = new Choice({
      hello: new Leaf('world'),
      asdf: new Leaf('1234')
    })
    expect(type.children).toEqual({
      asdf: new Leaf('1234'),
      hello: new Leaf('world')
    })
  })

  it('Throws error if initialized without any choices', () => {
    try {
      const type = new Choice({})
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(MIN_CHILDREN_NOT_MET)
    }
  })

  it('Throws error if initialized with invalid default key', () => {
    try {
      const type = new Choice(
        {
          hello: new Leaf('world'),
          asdf: new Leaf('1234')
        },
        'qwerty'
      )
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(KEY_DOES_NOT_EXIST)
    }
  })

  it('Returns selected choice', () => {
    const type = new Choice({
      hello: new Leaf('world'),
      asdf: new Leaf('1234')
    }).getChoice()
    expect(type).toEqual(new Leaf('world'))
  })

  it('select() selects new choice', () => {
    const type = new Choice({
      hello: new Leaf('world'),
      asdf: new Leaf('1234')
    }).select('asdf')
    expect(type.getChoice()).toEqual(new Leaf('1234'))
  })

  it('select() with invalid key throws error', () => {
    try {
      const type = new Choice({
        hello: new Leaf('world'),
        asdf: new Leaf('1234')
      }).select('1234')
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(KEY_DOES_NOT_EXIST)
    }
  })
})
