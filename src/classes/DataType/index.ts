import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'

export enum IDataTypeKind {
  Action = 'Action',
  Choice = 'Choice',
  DataType = 'DataType',
  Leaf = 'Leaf',
  List = 'List',
  Map = 'Map',
  Set = 'Set'
}

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
