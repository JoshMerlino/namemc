const fetch = require("node-fetch");
const cheerio = require("cheerio");
const { promises: fs } = require("fs");

module.exports = uuid => new Promise(async function(resolve, reject) {

	// If is valid UUID
	if(!uuid.match(/^[0-9a-f]{8}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{12}/g)) return reject(`"${uuid}" is not a valid uuid.`);

	// Get cache
	let cache;
	try {
		cache = JSON.parse(await fs.readFile(__dirname + "/cache.json", "utf8").catch(async function() {
			await fs.writeFile(__dirname + "/cache.json", "{}", "utf8");
			return "{}";
		}));
	} catch (e) {
		cache = {};
	}

	// If the name is in cache, return result from cache
	if(cache.hasOwnProperty(uuid.toUpperCase())) return resolve(cache[uuid.toUpperCase()]);

	// Begine scraping
	const $ = cheerio.load(await fetch(`https://namemc.com/profile/${uuid}`).then(r => r.text()));
	const data = $("body > main > div");

	// Get profile id
	const profileId = data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").children(".card-body.py-1").children(".row").eq(2).children(".col-12").text().split("/")[1]
	if(profileId === undefined) return reject(`"${uuid}" does not map to a valid player.`);

	// Get response
	const response =  {
		profileId,
		currentName: data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").eq(1).children(".card-body.py-1").children(".row").first().children(".col").children("a").text(),
		uuid: data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").children(".card-body.py-1").children(".row").first().children(".col-12").children("samp").text(),
		imageUrls: {
			cape: `https://crafatar.com/capes/${uuid}`,
			body: `https://crafatar.com/renders/body/${uuid}?overlay`,
			head: `https://crafatar.com/renders/head/${uuid}?overlay`,
			face: `https://crafatar.com/avatars/${uuid}?overlay`,
			skins:
			  Object.values(data.children(".col-lg-4.order-lg-1").children(".card.mb-3").eq(1).children(".card-body").children("a"))
			  .filter(elem => elem.type === "tag")
			  .map(elem => $(elem))
			  .map(elem => elem.attr("href"))
			  .map(link => link.split("/")[2])
			  .map(hash => `https://texture.namemc.com/${hash.substr(0,2)}/${hash.substr(2,2)}/${hash}.png`)
		},
		pastNames:
		  Object.values(data.children("div.col-lg-8.order-lg-2").children(".card.mb-3").eq(1).children(".card-body.py-1").children(".row"))
		  .filter(elem => elem.type === "tag")
		  .map(elem => $(elem))
		  .map(elem => ({
			name: elem.children(".col").children("a").text(),
			changedAt: elem.children(".col-12").children("time").text() ? new Date(elem.children(".col-12").children("time").text()) : null
		}))
	}

	// Save cached response
	cache[uuid.toUpperCase()] = response;
	await fs.writeFile(__dirname + "/cache.json", JSON.stringify(cache), "utf8");
	return resolve(response)

})
