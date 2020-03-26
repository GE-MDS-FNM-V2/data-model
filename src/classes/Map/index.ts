import debug from 'debug'
import { DataType, IDataType, IDataTypeKind } from '../DataType'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'

const log = debug('ge-fnm:data-model:classes:Map')

export interface IMap extends IDataType {
  set(key: string, value: DataType): void
  get(key: string): DataType
  contains(key: string): boolean
  keys(): string[]
  values(): DataType[]
  entries(): [string, DataType][]
}

export interface KeyDataTypePair {
  [key: string]: DataType
}

export class Map extends DataType implements IMap {
  children: KeyDataTypePair
  maxChildren: number
  length: number

  constructor({
    children = {},
    maxChildren = Infinity,
    permissions = DEFAULT_PERMISSIONS,
    name
  }: {
    children?: KeyDataTypePair
    maxChildren?: number
    permissions?: PERMISSIONS
    name: string
  }) {
    super(permissions)
    this.objectType = IDataTypeKind.Map
    this.children = children
    this.maxChildren = maxChildren
    this.length = 0
    Object.keys(children).forEach(key => {
      this.set(key, children[key])
    })
    log('Created map', this)
  }

  set(key: string, value: DataType) {
    log('Setting key', key, ' to the value', value, ' on the map', this)
    if (this.keys().length + 1 > this.maxChildren) {
      throw EXCEEDS_MAX_CHILDREN
    } else {
      this.children[key] = value
      this.length = Object.keys(this.children).length
    }
  }
  get(key: string) {
    return this.children[key]
  }
  contains(key: string): boolean {
    return Object.keys(this.children).includes(key)
  }
  keys() {
    return Object.keys(this.children)
  }
  values() {
    return Object.values(this.children)
  }
  entries() {
    return Object.entries(this.children)
  }
}
