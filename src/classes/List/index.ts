import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType, IDataType } from '../DataType'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'
import { MapFunction, FilterFunction } from '../../types/classFunctions'
import { EnumerableDataType } from '../../types/EnumerableDataType'
import { IDataTypeKind } from '..'

export interface IList extends IDataType, EnumerableDataType {
  add(child: DataType): DataType
  map(mapFunc: MapFunction): List
  filter(filterFunc: FilterFunction): List
  contains(item: DataType): boolean
}

export class List extends DataType implements IList {
  children: DataType[]
  maxChildren: number
  length: number

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
    this.objectType = IDataTypeKind.List
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

  filter(filterFunc: FilterFunction) {
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
