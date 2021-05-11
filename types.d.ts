declare interface PastName {
	name: string;
	changedAt: null | number;
}

declare type SkinModel = "classic" | "slim";

declare interface PastSkin {
	url: string;
	model: SkinModel;
	changedAt: number;
}

declare interface NameMCUser {
	profileId: string;
	currentName: string;
	uuid: string;
	skins: {
		currentSkin: string;
		renders: {
			cape: string;
			body: string;
			head: string;
			face: string;
		};
		pastSkins: Array<PastSkin>;
	};
	pastNames: Array<PastName>;
}
