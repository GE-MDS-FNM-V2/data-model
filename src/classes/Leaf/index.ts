import debug from 'debug'
import { PERMISSIONS } from '../../types/permissions'
import { DataType, IDataType, IDataTypeKind } from '../DataType'

const log = debug('ge-fnm:data-model:classes:Leaf')

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

    log('Creating Leaf with the name of', name, ' and the value of ', value)
  }

  getValue() {
    return this.value
  }
}
