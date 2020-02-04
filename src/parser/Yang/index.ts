import { Parser, DATA_MODEL_TYPES } from '../types'
import { DataType } from '../../classes/DataType'
import { Map, KeyDataTypePair } from '../../classes/Map'
import {
  RawYangLeaf,
  RawYangList,
  RawYangContainer,
  RawYangCase,
  RawYangChoice,
  RawYangAction,
  RawYangLeafList,
  RawYangResult,
  RawYangMetaTypes
} from './yangTypes'
import { Leaf } from '../../classes/Leaf'
import { List } from '../../classes/List'
import { MIN_CHILDREN_NOT_MET } from '../../types/errors'
import { Choice } from '../../classes/Choice'
import { Action } from '../../classes/Action'
import { Set } from '../../classes/Set'

const KIND_KEY = 'kind'
export class YangParser implements Parser {
  readonly name = 'YangParser'
  readonly accepts = [DATA_MODEL_TYPES.YANG]

  public parse(data: string): DataType {
    const json = JSON.parse(data) as RawYangResult
    // const customTypes = this.parseMeta(json.meta)
    // return this.parseData(json.data)
    return this.parseData(json)
  }

  // public parseMeta(json: any): RawYangMetaTypes {
  //   // todo - parse meta types
  //   return {}
  // }

  public parseData(json: any): DataType {
    const currentKind = json[KIND_KEY]
    if (currentKind === 'leaf') {
      return this.parseLeaf(json)
    } else if (currentKind === 'list') {
      return this.parseList(json)
    } else if (currentKind === 'container') {
      return this.parseContainer(json)
    } else if (currentKind === 'choice') {
      return this.parseChoice(json)
    } else if (currentKind === 'action') {
      return this.parseAction(json)
    } else if (currentKind === 'leaf-list') {
      return this.parseLeafList(json)
    } else if (currentKind === 'key') {
      return new Leaf({
        name: 'key',
        value: 'TODO - this is a key. Do we need to parse it?'
      })
    } else {
      throw Error(
        `Could not parse: ${JSON.stringify(json)} \nYANG kind "${currentKind}" is not supported`
      )
    }
  }

  private parseLeaf(data: RawYangLeaf): DataType {
    return new Leaf({
      name: data.name,
      value: data.value,
      permissions: data.access
    })
    // return new Map({ [data.name]: new Leaf('TODO', data.access) }, Infinity, data.access)
  }

  private parseList(data: RawYangList): DataType {
    const maxChildren =
      data.max_elements === 'unbounded' ? Infinity : Number.parseInt(data.max_elements, 10)

    const childNameValuePairs = data.children
      .map((child): { name: string; value: any } => {
        return {
          name: child.name,
          value: child
        }
      })
      .map((nameValuePair): { name: string; value: DataType } => {
        return {
          name: nameValuePair.name,
          value: this.parseData(nameValuePair.value)
        }
      })

    const newMap = new Map({
      name: data.name,
      maxChildren: maxChildren,
      permissions: data.access
    })
    childNameValuePairs.forEach(({ name, value }) => {
      newMap.set(name, value)
    })

    return newMap
  }

  private parseContainer(data: RawYangContainer): DataType {
    const maxChildren = Infinity
    if (data.children) {
      const childNameValuePairs = data.children
        .map((child): { name: string; value: any } => {
          return {
            name: child.name,
            value: child
          }
        })
        .map((nameValuePair): { name: string; value: DataType } => {
          return {
            name: nameValuePair.name,
            value: this.parseData(nameValuePair.value)
          }
        })

      const newMap = new Map({
        name: data.name,
        maxChildren: maxChildren,
        permissions: data.access
      })
      childNameValuePairs.forEach(({ name, value }) => {
        newMap.set(name, value)
      })

      return newMap
    }
    return new Map({
      name: data.name,
      maxChildren: maxChildren,
      permissions: data.access
    })
  }

  private parseChoice(data: RawYangChoice): DataType {
    if (data.cases.length === 0) {
      throw MIN_CHILDREN_NOT_MET
    }

    let childrenObj: KeyDataTypePair = {}

    data.cases.forEach(caseObj => {
      if (caseObj.children === '') {
        childrenObj[caseObj.name] = new Leaf({
          name: caseObj.kind,
          value: 'TODO'
        })
      } else {
        childrenObj[caseObj.name] = new List({
          children: caseObj.children.map(child => this.parseData(child))
        })
      }
    })
    return new Choice({
      children: childrenObj,
      name: data.name
    })
  }

  private parseAction(data: RawYangAction): DataType {
    const children = data.children.map(child => {
      return this.parseData(child)
    })
    return new Action({
      name: data.name,
      children,
      maxChildren: Infinity,
      permissions: data.access
    })
  }

  private parseLeafList(data: RawYangLeafList): DataType {
    return new Map({
      name: data.name,
      permissions: data.access
    })
  }
}
