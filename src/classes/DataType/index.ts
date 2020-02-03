import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'

export class DataType {
  private permissions: PERMISSIONS
  objectType: string

  constructor(permissions: PERMISSIONS = DEFAULT_PERMISSIONS) {
    this.permissions = permissions
    this.objectType = 'DataType'
  }

  getPermissions() {
    return this.permissions
  }

  getName() {
    return this.objectType
  }
}
