const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports = async function(name) {

	if(!name.match(/\w{3,16}/g)) throw new Error(`"${name}" is not a valid username.`);

	const $ = cheerio.load(await fetch(`https://namemc.com/search?q=${name}`).then(r => r.text()));
	const results = $("body > main > div.row > div.col-lg-7").children(".card.mb-3")

	let final = [];

	results.each(function() {
		const data = $(this);
		const uuid = data.children(".card-header.py-0").children("a").children(".row").children(".col").children("samp").text();
		final.push({
			profileId: data.children(".card-header.py-0").children("a").attr("href").split("/profile/")[1],
			currentName: data.children(".card-header.py-0").children("a").children(".row").children(".col").children("h3").text(),
			uuid,
			imageUrls: {
				skin: `https://crafatar.com/skins/${uuid}`,
				cape: `https://crafatar.com/capes/${uuid}`,
				body: `https://crafatar.com/renders/body/${uuid}?overlay`,
				head: `https://crafatar.com/renders/head/${uuid}?overlay`,
				face: `https://crafatar.com/avatars/${uuid}?overlay`,
			},
			pastNames:
			  Object.values(data.children(".card-body").children(".py-0"))
			  .filter(elem => elem.type === "tag")
			  .map(elem => $(elem))
			  .map(elem => elem.children(".row"))
			  .map(elem => ({
				name: elem.children(".col.col-sm").children("a").text(),
				changedAt: elem.children(".col-12").children("time").text() ? new Date(elem.children(".col-12").children("time").text()) : null
			}))
		});
	});

	return final;

}
