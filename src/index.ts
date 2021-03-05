import { lookupUUID as __lookupUUID } from "./lookupUUID";
export const lookupUUID = __lookupUUID;

import { lookupName as __lookupName } from "./lookupName";
export const lookupName = __lookupName;

import { NameMCUser as __NameMCUser, PastName as __PastName } from "./types";
export type NameMCUser = __NameMCUser;
export type PastName = __PastName;

export default {
	lookupUUID: __lookupUUID,
	lookupName: __lookupName,
}
