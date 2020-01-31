import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { List } from '../List'
import { DataType } from '../DataType'

export class Action extends List {
  readonly action: Function | undefined
  numberRuns: number
  constructor(
    action?: Function,
    children: DataType[] = [],
    maxChildren: number = Infinity,
    permissions: PERMISSIONS = DEFAULT_PERMISSIONS
  ) {
    super(children, maxChildren, permissions)

    this.action = action
    this.numberRuns = 0
  }

  run() {
    this.action && this.action()
    this.numberRuns++
  }
}
