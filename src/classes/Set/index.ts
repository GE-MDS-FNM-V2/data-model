import { List, IList } from '../List'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'
import { CHILD_ALREADY_EXISTS } from '../../types/errors'
import { IDataTypeKind } from '../DataType'

export interface ISet extends IList {
  add(child: DataType): DataType
}

export class Set extends List {
  constructor(
    children: DataType[],
    maxChildren: number = Infinity,
    permissions: PERMISSIONS = DEFAULT_PERMISSIONS
  ) {
    super({
      children,
      maxChildren,
      permissions
    })

    this.objectType = IDataTypeKind.Set
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
