import { PERMISSIONS } from '../../types/permissions'

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
