import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { MIN_CHILDREN_NOT_MET, KEY_DOES_NOT_EXIST } from '../../types/errors'

import { Map, KeyDataTypePair, IMap } from '../Map'
import { IDataTypeKind } from '..'
import { DataType } from '../DataType'

export interface IChoice extends IMap {
  getChoice(): DataType
  select(key: string): IChoice
}
export class Choice extends Map implements IChoice {
  private selectedkey: string
  constructor({
    name,
    children,
    maxChildren = Infinity,
    permissions = DEFAULT_PERMISSIONS,
    defaultOption
  }: {
    name: string
    children: KeyDataTypePair
    defaultOption?: string
    maxChildren?: number
    permissions?: PERMISSIONS
  }) {
    super({
      children,
      maxChildren,
      permissions,
      name
    })
    this.objectType = IDataTypeKind.Choice

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
