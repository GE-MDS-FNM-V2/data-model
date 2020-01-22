import { DataType } from '../DataType'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'
import { DEFAULT_PERMISSIONS, PERMISSIONS } from '../../types/permissions'

export interface KeyDataTypePair {
  [key: string]: DataType
}

export class Map extends DataType {
  children: KeyDataTypePair
  maxChildren: number
  length: number

  constructor(
    children: KeyDataTypePair = {},
    maxChildren: number = Infinity,
    permissions: PERMISSIONS = DEFAULT_PERMISSIONS
  ) {
    super(permissions)
    this.children = children
    this.maxChildren = maxChildren
    this.length = 0
    Object.keys(children).forEach(key => {
      this.set(key, children[key])
    })
  }

  set(key: string, value: DataType) {
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
