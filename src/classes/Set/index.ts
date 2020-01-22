import { List } from '../List'
import { PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'
import { CHILD_ALREADY_EXISTS } from '../../types/errors'

export class Set extends List {
  constructor(
    name: string,
    permissions: PERMISSIONS,
    children: DataType[],
    maxChildren: number = Infinity
  ) {
    super(name, permissions, children, maxChildren)
  }

  add(child: DataType){
    if(this.contains(child)){
        throw CHILD_ALREADY_EXISTS
    }else{
        super.add(child)
    }
    return child
  }
}
