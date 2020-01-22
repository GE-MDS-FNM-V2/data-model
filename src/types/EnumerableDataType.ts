import { DataType } from '../classes/DataType'
import { MapFunction } from './classFunctions'

export interface EnumerableDataType {
  children: DataType[]
  maxChildren: number
  length: number


// For List / Set
  add(child: DataType): DataType
  map(mapFunc: MapFunction): EnumerableDataType
  filter(
    filterFunc: (value: DataType, index: number, array: DataType[]) => boolean
  ): EnumerableDataType
  contains(item: DataType): boolean


// For Map
  add(key: String, value: DataType): DataType
  filter(
    filterFunc: (keyValuePair: {key: String, value: DataType}, array: DataType[]) => boolean
  ): EnumerableDataType

  contains(key: String): boolean
}
