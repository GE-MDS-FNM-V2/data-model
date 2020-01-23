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
