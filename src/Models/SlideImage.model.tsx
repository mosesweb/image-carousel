import { Guid } from "./Guid";

export default class SlideImage {
    url: string = ""
    visible: boolean = false
    key: Guid
    text: string = "";
    constructor(init?: Partial<SlideImage>) {
        // This will set values for each properties that can be found
        this.key = Guid.newGuid();
        Object.assign(this, init);
    }
}