import { YangParser } from './index'
import { containerExample } from '../exampleResult'

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

  //   it('Doesnt fail on valid yang', () => {
  //     try {
  //       parser.parse(containerExample)
  //       expect(true).toEqual(true)
  //     } catch (error) {
  //       expect(error).toEqual(false)
  //     }
  //   })
})
