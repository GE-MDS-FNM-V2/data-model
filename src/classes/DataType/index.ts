import { PERMISSIONS } from '../../types/permissions'

export class DataType {
  permissions: PERMISSIONS

  constructor(permissions: PERMISSIONS) {
    this.permissions = permissions
    console.log('this is the next version of @ge-fnm/data-model')
  }

  update() {
    return 'TODO - DataType.update'
  }

  delete() {
    return 'TODO - DataType.delete'
  }
}
