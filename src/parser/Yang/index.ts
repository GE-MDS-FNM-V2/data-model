import debug from 'debug'
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

const log = debug('ge-fnm:data-model:parser:yang')

const KIND_KEY = 'kind'
export class YangParser implements Parser {
  readonly name = 'YangParser'
  readonly accepts = [DATA_MODEL_TYPES.YANG]

  public parse(data: string): DataType {
    const json = JSON.parse(data) as RawYangResult

    /**
     * eventually when custom type parsing is enabled in the data model,
     * you will need to parse out the 'meta' property first,
     * and then feed in the parsed custom types to the parseData function
     *
     * Until then we will assume the 'data' variable is only the
     * 'data' field of the jsonrpc response
     */

    return this.parseData(json)
  }

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
      log(
        'TODO - this is a key type - we are still not sure if this is needed, but are leaving in this todo just in case it is in the future'
      )
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
    log('Parsing the following data into a Leaf', data)
    return new Leaf({
      name: data.name,
      value: data.value,
      permissions: data.access
    })
  }

  private parseList(data: RawYangList): DataType {
    const maxChildren =
      data.max_elements === 'unbounded' ? Infinity : Number.parseInt(data.max_elements, 10)
    const children = data.children || []
    const childNameValuePairs = children
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
    log('Parsed the yang list:', data, 'into a Map:', newMap)
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
      log('Parsed the yang container: ', data, 'into the Map:', newMap)
      return newMap
    }
    log('Found an empty container', data, ' so returning a default map')
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

    const choice = new Choice({
      children: childrenObj,
      name: data.name
    })
    log('Parsed yang choice:', data, ' into a Choice:', choice)
    return choice
  }

  private parseAction(data: RawYangAction): DataType {
    const rawChildren = data.children || []
    const children = rawChildren.map(child => {
      return this.parseData(child)
    })
    const action = new Action({
      name: data.name,
      children,
      maxChildren: Infinity,
      permissions: data.access
    })
    log('Parsed yang action:', data, ' into Action:', action)
    return action
  }

  private parseLeafList(data: RawYangLeafList): DataType {
    log(
      'TODO - parse leaf list currently does not support children. If the following data has children, youre going to be missing data',
      data
    )
    return new Map({
      name: data.name,
      permissions: data.access
    })
  }
}
