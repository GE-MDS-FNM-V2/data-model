import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'

export class DataType {
  private permissions: PERMISSIONS

  constructor(permissions: PERMISSIONS = DEFAULT_PERMISSIONS) {
    this.permissions = permissions
  }

  getPermissions() {
    return this.permissions
  }

  update() {
    return 'TODO - DataType.update'
  }

  delete() {
    return 'TODO - DataType.delete'
  }
}
