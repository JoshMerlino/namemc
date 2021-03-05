import { fetchDom } from "./fetchDom";
import { NameMCUser } from "./types";

export async function lookupUUID(uuid: string) : Promise<NameMCUser> {

	// If is valid UUID
	if(!uuid.match(/^[0-9a-f]{8}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{12}/g)) throw new Error(`'${uuid}' is not a valid uuid.`);

	// Fetch the DOM
	const $ = await fetchDom(`profile/${uuid}`);

	// Start scraping
	const data = $("body > main > div");
	const profileId = data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").children(".card-body.py-1").children(".row").eq(2).children(".col-12").text().split("/")[1];

	// If player isnt found
	if(profileId === undefined) throw new Error(`'${uuid}' does not belong to any player.`);

	return {
		profileId,
		currentName: data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").eq(1).children(".card-body.py-1").children(".row").first().children(".col").children("a").text(),
		uuid: data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").children(".card-body.py-1").children(".row").first().children(".col-12").children("samp").text(),
		imageUrls: {
			cape: `https://crafatar.com/capes/${uuid}`,
			body: `https://crafatar.com/renders/body/${uuid}?overlay`,
			head: `https://crafatar.com/renders/head/${uuid}?overlay`,
			face: `https://crafatar.com/avatars/${uuid}?overlay`,
			skins:
			  Object
				.values(data.children(".col-lg-4.order-lg-1").children(".card.mb-3").eq(1).children(".card-body").children("a"))
				.filter(elem => elem.type === "tag")
				.map(elem => $(elem))
				.map(elem => elem.attr("href"))
				.map(link => link.split("/")[2])
				.map(hash => `https://texture.namemc.com/${hash.substr(0,2)}/${hash.substr(2,2)}/${hash}.png`)
		},
		pastNames:
		  Object
		  	.values(data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").eq(1).children(".card-body.py-1").children(".row"))
		  	.filter(elem => elem.type === "tag")
		  	.map(elem => $(elem))
		  	.map(elem => ({
				name: elem.children(".col").children("a").text(),
				changedAt: elem.children(".col-12").children("time").text() ? new Date(elem.children(".col-12").children("time").text()).getTime() : null
			}))
	} as NameMCUser;

}
