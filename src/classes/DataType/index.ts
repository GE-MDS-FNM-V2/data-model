import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { IDataTypeKind } from '..'

export interface IDataType {
  getPermissions: () => PERMISSIONS
  getObjectType: () => IDataTypeKind
}

export class DataType implements IDataType {
  private permissions: PERMISSIONS
  objectType: IDataTypeKind

  constructor(permissions: PERMISSIONS = DEFAULT_PERMISSIONS) {
    this.permissions = permissions
    this.objectType = IDataTypeKind.DataType
  }

  getPermissions() {
    return this.permissions
  }

  getObjectType() {
    return this.objectType
  }
}
