export const EXCEEDS_MAX_CHILDREN = new Error(
  'Cannot add child to DataType. It will exceed the max number of children declared for this DataType'
)
export const MIN_CHILDREN_NOT_MET = new Error(
  'Performing this action will violate the minimum number of children rule for this DataType'
)
export const KEY_DOES_NOT_EXIST = new Error('The key provided does not belong to this DataType')

export const CHILD_ALREADY_EXISTS = new Error('Cannot add child to set as it already exists')
