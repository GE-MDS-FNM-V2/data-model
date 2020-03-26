import debug from 'debug'
import { PERMISSIONS, DEFAULT_PERMISSIONS } from '../../types/permissions'
import { MIN_CHILDREN_NOT_MET, KEY_DOES_NOT_EXIST } from '../../types/errors'
import { Map, KeyDataTypePair, IMap } from '../Map'
import { DataType, IDataTypeKind } from '../DataType'

const log = debug('ge-fnm:data-model:classes:Choice')

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
      log('Error - a choice object requires children')
      throw MIN_CHILDREN_NOT_MET
    }
    let nonNullDefaultKey = defaultOption
    if (!nonNullDefaultKey) {
      log('There was no default selection provided, using the first one we find')
      nonNullDefaultKey = Object.keys(children)[0]
    }
    if (!Object.keys(children).includes(nonNullDefaultKey)) {
      log('The provided default selected child does not exist')
      throw KEY_DOES_NOT_EXIST
    }
    this.selectedkey = nonNullDefaultKey
  }

  select(key: string) {
    log('"Choosing" the child', key)
    if (!Object.keys(this.children).includes(key)) {
      log('The indicated child does not exist')
      throw KEY_DOES_NOT_EXIST
    }
    this.selectedkey = key
    return this
  }

  getChoice() {
    return this.children[this.selectedkey]
  }
}
