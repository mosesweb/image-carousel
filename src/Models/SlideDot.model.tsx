import { Guid } from "./Guid";

export default class SlideDot {
    annontationText: string = "Click to go to next slide"
    active: boolean = false
    key: Guid
    constructor(init?: Partial<SlideDot>) {
        // This will set values for each properties that can be found
        this.key = Guid.newGuid();
        Object.assign(this, init);
    }
}