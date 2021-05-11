declare module "namemc" {

	export interface PastName {
		name: string;
		changedAt: null | number;
	}

	export type SkinModel = "classic" | "slim";

	export interface PastSkin {
		url: string;
		model: SkinModel;
		changedAt: number;
	}

	export interface NameMCUser {
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

	export async function lookupUUID(uuid: string): Promise<NameMCUser>

	export async function lookupName(uuid: string): Promise<NameMCUser[]>

}
