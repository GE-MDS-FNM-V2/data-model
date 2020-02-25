import { DataType } from '../classes/DataType'

export type MapFunction = (value: any, index: number, array: DataType[]) => any
export type FilterFunction = (value: DataType, index: number, array: DataType[]) => boolean
