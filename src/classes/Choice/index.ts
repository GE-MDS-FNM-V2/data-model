import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { MIN_CHILDREN_NOT_MET, KEY_DOES_NOT_EXIST } from '../../types/errors'

import { Map, KeyDataTypePair } from '../Map'

export class Choice extends Map {
  private selectedkey: string
  constructor(
    children: KeyDataTypePair,
    defaultOption?: string,
    maxChildren: number = Infinity,
    permissions?: PERMISSIONS
  ) {
    /* istanbul ignore next */
    super(children, maxChildren, permissions)

    if (Object.keys(children).length === 0) {
      throw MIN_CHILDREN_NOT_MET
    }
    let nonNullDefaultKey = defaultOption
    if (!nonNullDefaultKey) {
      nonNullDefaultKey = Object.keys(children)[0]
    }
    if (!Object.keys(children).includes(nonNullDefaultKey)) {
      throw KEY_DOES_NOT_EXIST
    }
    this.selectedkey = nonNullDefaultKey
  }

  select(key: string) {
    if (!Object.keys(this.children).includes(key)) {
      throw KEY_DOES_NOT_EXIST
    }
    this.selectedkey = key
    return this
  }

  getChoice() {
    return this.children[this.selectedkey]
  }
}
