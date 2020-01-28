import { YangParser } from './index'

describe('Yang Parser - Fail cases', () => {
  const parser = new YangParser()

  it('Throws error when parsing invalid yang', () => {
    try {
      parser.parseJSON({ asdfasdf: 'asdfasdfasdfasdfasdf' })
      expect(false).toBeTruthy()
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})
