import { PERMISSIONS } from '../../types/permissions'

export class DataType {
  permissions: PERMISSIONS

  constructor(permissions: PERMISSIONS) {
    this.permissions = permissions
  }

  update() {
    return 'TODO - DataType.update'
  }

  delete() {
    return 'TODO - DataType.delete'
  }
}
