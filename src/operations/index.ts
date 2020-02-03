import { DataType } from '../classes/DataType'
import { Map } from '../classes/Map'
import { Choice } from '../classes/Choice'
import { List } from '../classes/List'
import { Set } from '../classes/Set'

type treeType = Map | Choice | List | Set
export const getPath = (node: DataType, path: string[], currentlyAtPath?: string[]): DataType => {
  if (path.length === 0) {
    return node
  }
  const tree = node as treeType
  if (!tree.children) {
    throw new Error(`Node is not enumerable. Cannot get path ${path}`)
  } else {
    console.log('1111111111111111111111111111111111111searching for path', path)
    const [searchName, ...restOfPath] = path
    const nodeType = tree.getName()
    if (nodeType === 'Map') {
      const map = node as Map
      if (!map.contains(searchName)) {
        const availablePaths = Object.keys(map.children).join(', ')
        const errorMessage = `The path ${currentlyAtPath} does not contain ${searchName}. However the following paths are available "${availablePaths}"`
        throw new Error(errorMessage)
      } else {
        const newPath = currentlyAtPath ? [...currentlyAtPath, searchName] : [searchName]
        return getPath(map.get(searchName), restOfPath, newPath)
      }
    } else if (nodeType === 'List') {
      const list = node as List
      list.children.forEach(child => {
        console.log(child)
      })
      return list
    } else {
      throw new Error(`GetPath does not support the type ${nodeType} located at ${currentlyAtPath}`)
    }
  }
}
