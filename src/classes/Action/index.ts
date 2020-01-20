import { PERMISSIONS } from "../../types/permissions";
import { NamedDataType } from "../NamedDataType";

export class Action extends NamedDataType {
    readonly action: Function;
    numberRuns: number;
    constructor(name: string, permissions: PERMISSIONS, action: Function) {
        super(name, permissions)
        this.action = action
        this.numberRuns = 0;
    }

    run(){
        this.action()
        this.numberRuns++
    }
}