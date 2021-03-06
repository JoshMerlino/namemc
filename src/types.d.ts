export interface PastName {
	name: string,
	changedAt: null | number
}

export interface NameMCUser {
    profileId: string,
    currentName: string,
    uuid: string,
    imageUrls: {
        cape: string,
        body: string,
        head: string,
        face: string,
        skins: Array<string>
    },
    pastNames: Array<PastName>
}
