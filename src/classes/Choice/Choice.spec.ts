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
      children: {
        hello: new Leaf({ name: '1234' }),
        asdf: new Leaf({ name: '1234' })
      },
      name: '1234'
    })
  })

  it('Create a Choice with default permissions', () => {
    const type = new Choice({
      name: '12234',
      permissions: {
        create: false,
        read: false,
        update: false,
        delete: false,
        execute: false
      },
      children: { hello: new Leaf({ name: 'world' }) }
    })
    expect(type.getPermissions()).toEqual({
      create: false,
      read: false,
      update: false,
      delete: false,
      execute: false
    })
  })

  it('Create a Choice with correct maxChildren', () => {
    const type = new Choice({
      maxChildren: 100,
      name: '1234',
      children: { hello: new Leaf({ name: 'world' }) }
    })
    expect(type.maxChildren).toEqual(100)
  })

  it('new Choice() has correct children', () => {
    const children = {
      hello: new Leaf({ name: '1234' }),
      asdf: new Leaf({ name: '1234' })
    }
    const type = new Choice({ children, name: '123' })
    expect(type.children).toEqual(children)
  })

  it('Create a Choice with choices', () => {
    const children = {
      hello: new Leaf({ name: '1234' }),
      asdf: new Leaf({ name: '1234' })
    }
    const type = new Choice({ children, name: '123' })
    expect(type.children).toEqual({
      asdf: new Leaf({ name: '1234' }),
      hello: new Leaf({ name: '1234' })
    })
  })

  it('Throws error if initialized without any choices', () => {
    try {
      const type = new Choice({ name: 'asdf', children: {} })
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(MIN_CHILDREN_NOT_MET)
    }
  })

  it('Throws error if initialized with invalid default key', () => {
    try {
      const type = new Choice({
        children: {
          hello: new Leaf({ name: '1234' }),
          asdf: new Leaf({ name: '1234' })
        },
        name: '1234',
        defaultOption: 'qwerty'
      })
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(KEY_DOES_NOT_EXIST)
    }
  })

  it('Returns selected choice', () => {
    const type = new Choice({
      children: {
        hello: new Leaf({ name: '1234567' }),
        asdf: new Leaf({ name: '1234' })
      },
      name: '1234',
      defaultOption: 'hello'
    }).getChoice()
    expect(type).toEqual(new Leaf({ name: '1234567' }))
  })

  it('select() selects new choice', () => {
    const type = new Choice({
      children: {
        hello: new Leaf({ name: '1234567' }),
        asdf: new Leaf({ name: '1234' })
      },
      name: '1234',
      defaultOption: 'hello'
    }).select('asdf')
    expect(type.getChoice()).toEqual(new Leaf({ name: '1234' }))
  })

  it('select() with invalid key throws error', () => {
    try {
      const type = new Choice({
        children: {
          hello: new Leaf({ name: '1234567' }),
          asdf: new Leaf({ name: '1234' })
        },
        name: '1234'
      }).select('asdf1234')
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(KEY_DOES_NOT_EXIST)
    }
  })
})
