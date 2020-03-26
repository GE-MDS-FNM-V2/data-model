import debug from 'debug'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { List, IList } from '../List'
import { DataType, IDataTypeKind } from '../DataType'

const log = debug('ge-fnm:data-model:classes:Action')

export interface IAction extends IList {
  readonly action: Function | undefined
  numberRuns: number
  run(): void
}
export class Action extends List implements IAction {
  readonly action: Function | undefined
  numberRuns: number

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
    this.objectType = IDataTypeKind.Action
    this.action = action
    this.numberRuns = 0
    log('Created action', this)
  }

  run() {
    this.action && this.action()
    this.numberRuns++
    log('Running action', this)
  }
}
