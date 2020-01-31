import { YangParser } from './index'
import {
  choiceWithOneChild,
  choiceWithNoChild,
  choiceWithCaseThatHasNoChildren
} from '../exampleResult'
import { MIN_CHILDREN_NOT_MET } from '../../types/errors'

describe('Yang Parser - Choice', () => {
  const parser = new YangParser()

  it('Parses yang choice type without erroring', () => {
    parser.parse(choiceWithOneChild)
  })

  it('Throws error if no cases provided', () => {
    try {
      parser.parse(choiceWithNoChild)
      expect(false).toEqual(true)
    } catch (error) {
      expect(error).toEqual(MIN_CHILDREN_NOT_MET)
    }
  })

  it('Parses if case children is ""', () => {
    parser.parse(choiceWithCaseThatHasNoChildren)
  })
})
