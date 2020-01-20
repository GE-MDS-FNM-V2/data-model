import { DataType } from "../DataType";
import { PERMISSIONS } from "../../types/permissions";

export class NamedDataType extends DataType {
    readonly name: string;
    constructor(name: string, permissions: PERMISSIONS) {
        super(permissions)
        this.name = name
    }

    getName(){
        return this.name
    }
}