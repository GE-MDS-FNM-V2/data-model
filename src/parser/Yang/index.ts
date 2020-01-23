import { Parser, DATA_MODEL_TYPES } from '../types'
import { DEFAULT_PERMISSIONS } from '../../types/permissions'
import { DataType } from '../../classes/DataType'
import { Map } from '../../classes/Map'
import { RawYangLeaf } from './yangTypes'
import { Leaf } from '../../classes/Leaf'

const KIND_KEY = 'kind'
export class YangParser implements Parser {
  readonly name = 'YangParser'
  readonly accepts = [DATA_MODEL_TYPES.YANG]
  public parse(data: string): DataType | null {
    const json = JSON.parse(data)

    if (data == '{}') {
      return null
    }

    const currentKind = json[KIND_KEY]
    if (currentKind == 'leaf') {
      return this.parseLeaf(json)
    } else {
      throw Error(
        `Could not parse: ${JSON.stringify(json)} \nYANG kind "${currentKind}" is not supported`
      )
    }
  }

  private parseLeaf(data: RawYangLeaf): DataType | null {
    console.log('parsing leaf', data)
    return new Map({ [data.name]: new Leaf('TODO', data.access) })
  }
}
