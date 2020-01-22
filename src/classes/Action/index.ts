import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../DataType'

export class Action extends DataType {
  readonly action: Function
  numberRuns: number
  constructor(action: Function, permissions: PERMISSIONS = DEFAULT_PERMISSIONS) {
    super(permissions)
    this.action = action
    this.numberRuns = 0
  }

  run() {
    // TODO - trigger ci comment - remove it eventually
    // asdf
    this.action()
    this.numberRuns++
  }
}
