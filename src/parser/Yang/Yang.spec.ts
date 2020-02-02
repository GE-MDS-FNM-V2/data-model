import { YangParser } from './index'
import { fullExample } from '../exampleResult'

describe('Yang Parser - General', () => {
  const parser = new YangParser()

  it('Throws error when parsing invalid yang', () => {
    try {
      parser.parseJSON({ asdfasdf: 'asdfasdfasdfasdfasdf' })
      expect(false).toBeTruthy()
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })

  it('Doesnt fail on valid yang', () => {
    parser.parse(fullExample)
  })
})
