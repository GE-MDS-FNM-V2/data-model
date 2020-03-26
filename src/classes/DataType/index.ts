import debug from 'debug'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'

const log = debug('ge-fnm:data-model:classes:DataType')

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
    log('Creating datatype class with the permissions', permissions)
  }

  getPermissions() {
    return this.permissions
  }

  getObjectType() {
    return this.objectType
  }
}
