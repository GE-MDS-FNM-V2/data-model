import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { List } from '../List'
import { DataType } from '../DataType'

export class Action extends List {
  readonly action: Function | undefined
  numberRuns: number
  objectType: string
  constructor({
    action,
    children = [],
    maxChildren = Infinity,
    permissions = DEFAULT_PERMISSIONS,
    name
  }: {
    action?: Function
    children?: DataType[]
    maxChildren?: number
    permissions?: PERMISSIONS
    name?: string
  }) {
    super({
      children,
      maxChildren,
      permissions,
      name
    })
    this.objectType = 'Action'
    this.action = action
    this.numberRuns = 0
  }

  run() {
    this.action && this.action()
    this.numberRuns++
  }
}
