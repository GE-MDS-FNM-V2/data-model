export enum PERMISSION_TYPES {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  EXECUTE = 'EXECUTE'
}

export interface PERMISSIONS {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
  execute: boolean
}

export const DEFAULT_PERMISSIONS: PERMISSIONS = {
  create: true,
  read: true,
  update: true,
  delete: true,
  execute: true
}
