import { Parser, DATA_MODEL_TYPES } from './types'
import { DEFAULT_PERMISSIONS } from '../types/permissions'
import { DataType } from '../classes/DataType'

export class YangParser implements Parser {
  readonly name = 'YangParser'
  readonly accepts = [DATA_MODEL_TYPES.YANG]
  parse(data: string) {
    const tree = new DataType(DEFAULT_PERMISSIONS)
    return tree
  }
}
