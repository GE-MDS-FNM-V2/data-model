import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'

type LeafType = number | string | boolean | null | any[]

export class Leaf extends DataType {
  value: LeafType
  constructor(value: LeafType, permissions: PERMISSIONS = DEFAULT_PERMISSIONS) {
    super(permissions)
    this.value = value
  }

  getValue() {
    return this.value
  }
}
