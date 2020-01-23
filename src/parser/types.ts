import { DataType } from '../classes/DataType'

export enum DATA_MODEL_TYPES {
  YANG = 'YANG',
  XML = 'XML'
}

export interface Parser {
  name: string
  accepts: DATA_MODEL_TYPES[]
  parse: (data: string) => DataType
}
