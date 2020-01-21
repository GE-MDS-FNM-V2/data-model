import { NamedDataType } from '../NamedDataType'
import { PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'
import { EXCEEDS_MAX_CHILDREN } from '../../types/errors'
import { MapFunction } from '../../types/classFunctions'

export class EnumerableDataType extends NamedDataType {
  children: DataType[]
  maxChildren: number
  length: number

  constructor(
    name: string,
    permissions: PERMISSIONS,
    children: DataType[],
    maxChildren: number = Infinity
  ) {
    super(name, permissions)
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
  }

  map(mapFunc: MapFunction) {
    const resultArray = []
    for (let index = 0; index < this.children.length; index++) {
      resultArray.push(mapFunc(this.children[index], index, this.children))
    }
    return new EnumerableDataType(this.name, this.permissions, resultArray)
  }

  filter(filterFunc: (value: DataType, index: number, array: DataType[]) => boolean) {
    const resultArray = []
    for (let index = 0; index < this.children.length; index++) {
      if (filterFunc(this.children[index], index, this.children)) {
        resultArray.push(this.children[index])
      }
    }
    return new EnumerableDataType(this.name, this.permissions, resultArray)
  }

  contains(item: DataType) {
    return this.children.includes(item)
  }
}
