// Typescript && ESModule exports
export { lookupUUID } from "./lookupUUID";
export { lookupName } from "./lookupName";
export { NameMCUser, PastName, PastSkin, SkinModel } from "./interface";

// CommonJS exports
import { lookupUUID } from "./lookupUUID";
import { lookupName } from "./lookupName";
export default { lookupUUID, lookupName };
