import { Action } from './classes/Action'
import { DataType } from './classes/DataType'
import { Leaf } from './classes/Leaf'
import { List } from './classes/List'
import { Map } from './classes/Map'
import { Set } from './classes/Set'
import { Parser, DATA_MODEL_TYPES } from './parsers/types'
import { DEFAULT_PERMISSIONS } from './types/permissions'

export default {
  Action,
  DataType,
  Leaf,
  List,
  Map,
  Set
}

export class YangParser implements Parser {
  name = 'YangParser'
  accepts = [DATA_MODEL_TYPES.YANG]
  parse(data: string) {
    const tree = new DataType(DEFAULT_PERMISSIONS)
    return tree
  }
}
