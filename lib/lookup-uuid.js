const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async function(uuid) {

	if(!uuid.match(/^[0-9a-f]{8}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{12}/g)) throw new Error(`"${uuid}" is not a valid uuid.`);

	const $ = cheerio.load(await fetch(`https://namemc.com/profile/${uuid}`).then(r => r.text()));
	const data = $("body > main > div > div.col-lg-8.order-lg-2").children(".card.mb-3");

	const profileId = data.children(".card-body.py-1").children(".row").eq(2).children(".col-12").text().split("/")[1]
	if(profileId === undefined) throw new Error(`"${uuid}" does not map to a valid player.`);

	return {
		profileId,
		currentName: data.eq(1).children(".card-body.py-1").children(".row").first().children(".col").children("a").text(),
		uuid: data.children(".card-body.py-1").children(".row").first().children(".col-12").children("samp").text(),
		imageUrls: {
			skin: `https://crafatar.com/skins/${uuid}`,
			cape: `https://crafatar.com/capes/${uuid}`,
			body: `https://crafatar.com/renders/body/${uuid}?overlay`,
			head: `https://crafatar.com/renders/head/${uuid}?overlay`,
			face: `https://crafatar.com/avatars/${uuid}?overlay`,
		},
		pastNames:
		  Object.values(data.eq(1).children(".card-body.py-1").children(".row"))
		  .filter(elem => elem.type === "tag")
		  .map(elem => $(elem))
		  .map(elem => ({
			name: elem.children(".col").children("a").text(),
			changedAt: elem.children(".col-12").children("time").text() ? new Date(elem.children(".col-12").children("time").text()) : null
		}))
	}

}
