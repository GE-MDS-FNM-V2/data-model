import { PERMISSIONS } from '../../types/permissions'

export class DataType {
  permissions: PERMISSIONS

  constructor(permissions: PERMISSIONS) {
    this.permissions = permissions
    console.log('\n\nNEW DATATYPE OBJECT HAS BEEN CREATED\n\n')
  }

  update() {
    return 'TODO - DataType.update'
  }

  delete() {
    return 'TODO - DataType.delete'
  }
}
