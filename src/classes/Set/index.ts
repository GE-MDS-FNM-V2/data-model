import { List } from '../List'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'
import { CHILD_ALREADY_EXISTS } from '../../types/errors'

export class Set extends List {
  constructor(
    children: DataType[],
    maxChildren: number = Infinity,
    permissions: PERMISSIONS = DEFAULT_PERMISSIONS
  ) {
    /* istanbul ignore next */
    super(children, maxChildren, permissions)
  }

  add(child: DataType) {
    if (this.contains(child)) {
      throw CHILD_ALREADY_EXISTS
    } else {
      super.add(child)
    }

    return child
  }
}
