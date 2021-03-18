export interface PastName {
	name: string,
	changedAt: null | number
}

export enum SkinModel { "classic", "slim" }

export interface PastSkin {
	url: string,
	model: SkinModel
	changedAt: null | number
}

export interface NameMCUser {
    profileId: string,
    currentName: string,
    uuid: string,
    skins: {
		currentSkin: string,
		renders: {
			cape: string,
			body: string,
			head: string,
			face: string
		}
        pastSkins: Array<PastSkin>
    },
    pastNames: Array<PastName>
}
