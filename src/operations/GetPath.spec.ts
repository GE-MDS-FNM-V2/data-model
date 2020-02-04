import { YangParser } from '../parser/Yang'
import { servicesResult } from '../parser/servicesResults'
import { getPath } from './index'

describe('GetPath', () => {
  const parser = new YangParser()
  const tree = parser.parse(servicesResult)

  it('Returns root if path is []', () => {
    expect(getPath(tree, [])).toEqual(tree)
  })

  it('Gets SNMP value', () => {
    expect(getPath(tree, ['snmp', 'agent', 'enabled'])).toMatchObject({ value: false })
  })

  it('Gets DHCP value', () => {
    expect(getPath(tree, ['dhcp', 'enabled'])).toMatchObject({ value: false })
  })
})
