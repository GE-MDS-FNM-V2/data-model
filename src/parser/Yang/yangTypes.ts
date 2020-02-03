import { PERMISSIONS } from '../../types/permissions'

export type RawYangResult = {
  meta: {
    namespace: string
    keypath: string
    prefix: string
    types: RawYangMetaTypes
  }
  data: RawYangDataType
}

export type RawYangMetaTypes = {
  [key: string]: RawYangMetaType
}

export type RawYangDataType =
  | RawYangLeaf
  | RawYangList
  | RawYangContainer
  | RawYangChoice
  | RawYangCase
  | RawYangAction
  | RawYangLeafList

export type RawYangMetaType = RawYangINT8 | RawYangUINT8 | RawYangUINT16 | RawYangUINT32

/*********************************
 * Meta Types
 ********************************/
// TODO - the range properties arent valid
// for example         "com:gemds:wideband:t19": [
// {
//   "name": "com:gemds:wideband:t19",
//   "range": { "value": ["0", ["400", "500"]] }

export type RawYangINT8 = [
  {
    name: string
    range: { value: [[number, number]] }
  },
  { name: 'int8' }
]

export type RawYangUINT8 = [
  {
    name: string
    range: { value: [[number, number]] }
  },
  { name: 'uint8' }
]

export type RawYangUINT16 = [
  {
    name: string
    range: { value: [[number, number]] }
  },
  { name: 'uint16' }
]

export type RawYangUINT32 = [
  {
    name: string
    range: { value: [[number, number]] }
  },
  { name: 'uint32' }
]

/*********************************
 * Data Types
 ********************************/

export type RawYangLeaf = {
  kind: 'leaf'
  name: string
  qname: string
  info: any
  access: PERMISSIONS
  type: {
    namespace: string
    name: string
  }
  default: any
  value?: any
}

export type RawYangList = {
  kind: 'leaf'
  name: string
  qname: string
  info: any
  access: PERMISSIONS
  mandatory: boolean
  min_elements: number
  max_elements: string
  key: [string]
  type: {
    namespace: string
    name: string
  }
  children: any[]
}

export type RawYangContainer = {
  kind: 'container'
  name: string
  qname: string
  info: { string: string }
  namespace: string
  presence: boolean
  access: PERMISSIONS
  when_targets: string[]
  leafrefGroups: [string][]
  leafref_groups: [string][]
  children: any[]
  deps: string[]
}

export type RawYangChoice = {
  kind: 'choice'
  name: string
  qname: string
  is_action_input: boolean
  madatory: boolean
  cases: RawYangCase[]
}

export type RawYangCase = {
  kind: 'case'
  name: string
  qname: string
  is_action_input: boolean
  children: any[] | ''
}

export type RawYangAction = {
  kind: 'action'
  name: string
  qname: string
  info: {
    string: string
  }
  mandatory: boolean
  access: PERMISSIONS
  children: any[]
}

export type RawYangLeafList = {
  kind: 'leaf-list'
  name: string
  qname: string
  info: {
    string: string
  }
  access: PERMISSIONS
  type: {
    namespace: string
    name: string
  }
}
