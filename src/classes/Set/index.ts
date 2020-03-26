import debug from 'debug'
import { List, IList } from '../List'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType, IDataTypeKind } from '../DataType'
import { CHILD_ALREADY_EXISTS } from '../../types/errors'

const log = debug('ge-fnm:data-model:classes:Set')

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
    log('Created Set', this)
  }

  add(child: DataType) {
    log('Adding child', child, ' to Set', this)
    if (this.contains(child)) {
      throw CHILD_ALREADY_EXISTS
    } else {
      super.add(child)
    }

    return child
  }
}
