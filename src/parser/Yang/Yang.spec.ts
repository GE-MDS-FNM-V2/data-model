import { YangParser } from './index'
import { servicesResult } from '../servicesResults'

describe('Yang Parser - General', () => {
  const parser = new YangParser()

  it('Throws error when parsing invalid yang', () => {
    try {
      parser.parseData({ asdfasdf: 'asdfasdfasdfasdfasdf' })
      expect(false).toBeTruthy()
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })

  it('Doesnt fail on valid yang', () => {
    const result = parser.parse(servicesResult)
  })
})
