import { Parser, DATA_MODEL_TYPES } from '../types'
import { DataType } from '../../classes/DataType'
import { Map } from '../../classes/Map'
import { RawYangLeaf, RawYangList } from './yangTypes'
import { Leaf } from '../../classes/Leaf'
import { List } from '../../classes/List'

const KIND_KEY = 'kind'
export class YangParser implements Parser {
  readonly name = 'YangParser'
  readonly accepts = [DATA_MODEL_TYPES.YANG]

  public parseJSON(json: any): DataType {
    const currentKind = json[KIND_KEY]
    if (currentKind === 'leaf') {
      return this.parseLeaf(json)
    } else if (currentKind === 'list') {
      return this.parseList(json)
    } else {
      throw Error(
        `Could not parse: ${JSON.stringify(json)} \nYANG kind "${currentKind}" is not supported`
      )
    }
  }

  public parse(data: string): DataType {
    const json = JSON.parse(data)
    return this.parseJSON(json)
  }

  private parseLeaf(data: RawYangLeaf): DataType {
    return new Map({ [data.name]: new Leaf('TODO', data.access) }, Infinity, data.access)
  }

  private parseList(data: RawYangList): DataType {
    const children = data.children.map(child => {
      console.log(child)
      return this.parseJSON(child)
    })
    const maxChildren =
      data.max_elements == 'unbounded' ? Infinity : Number.parseInt(data.max_elements)
    return new List(children, maxChildren, data.access)
  }
}
