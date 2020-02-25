import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType, IDataType } from '../DataType'
import { IDataTypeKind } from '../DataType'

type LeafType = number | string | boolean | null | any[]

export interface ILeaf extends IDataType {
  name: string
  getValue(): LeafType | undefined
}

export class Leaf extends DataType implements ILeaf {
  private value: LeafType | undefined
  name: string

  constructor({
    name,
    value,
    permissions
  }: {
    name: string
    value?: LeafType
    permissions?: PERMISSIONS
  }) {
    super(permissions)
    this.objectType = IDataTypeKind.Leaf
    this.name = name
    this.value = value
  }

  getValue() {
    return this.value
  }
}
