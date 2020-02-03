import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'

type LeafType = number | string | boolean | null | any[]

export class Leaf extends DataType {
  value: LeafType | undefined
  name: string
  objectType: string
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
    this.objectType = 'Leaf'
    this.name = name
    this.value = value
  }

  getValue() {
    return this.value
  }
}
