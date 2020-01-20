import { NamedDataType } from '../NamedDataType';
import { PERMISSIONS } from '../../types/permissions';

type LeafType = number | string | boolean | null | any[];

export class Leaf extends NamedDataType {
  value: LeafType;
  constructor(name: string, permissions: PERMISSIONS, value: LeafType) {
    super(name, permissions);
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}
