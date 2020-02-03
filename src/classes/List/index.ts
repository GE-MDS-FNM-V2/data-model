import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'
import { MapFunction } from '../../types/classFunctions'
import { EnumerableDataType } from '../../types/EnumerableDataType'

export class List extends DataType implements EnumerableDataType {
  children: DataType[]
  maxChildren: number
  length: number
  objectType: string
  constructor({
    children = [],
    maxChildren = Infinity,
    permissions = DEFAULT_PERMISSIONS,
    name
  }: {
    children?: DataType[]
    maxChildren?: number
    permissions?: PERMISSIONS
    name?: string
  }) {
    if (children.length > maxChildren) {
      throw EXCEEDS_MAX_CHILDREN
    }
    super(permissions)
    this.objectType = 'List'
    this.children = children
    this.maxChildren = maxChildren
    this.length = this.children.length
  }

  add(child: DataType) {
    if (this.children.length + 1 > this.maxChildren) {
      throw EXCEEDS_MAX_CHILDREN
    } else {
      this.children.push(child)
      this.length = this.children.length
    }
    return this.children[this.children.length - 1]
  }

  map(mapFunc: MapFunction) {
    const resultArray = []
    for (let index = 0; index < this.children.length; index++) {
      resultArray.push(mapFunc(this.children[index], index, this.children))
    }
    return new List({
      children: resultArray,
      maxChildren: this.maxChildren,
      permissions: this.getPermissions()
    })
  }

  filter(filterFunc: (value: DataType, index: number, array: DataType[]) => boolean) {
    const resultArray = []
    for (let index = 0; index < this.children.length; index++) {
      if (filterFunc(this.children[index], index, this.children)) {
        resultArray.push(this.children[index])
      }
    }
    return new List({
      children: resultArray,
      maxChildren: this.maxChildren,
      permissions: this.getPermissions()
    })
  }

  contains(item: DataType) {
    return this.children.includes(item)
  }
}
