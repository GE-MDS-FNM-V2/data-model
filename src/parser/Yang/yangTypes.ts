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
  children: []
}
