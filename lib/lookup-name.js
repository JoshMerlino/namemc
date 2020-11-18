const fetch = require("node-fetch");
const cheerio = require("cheerio");
const lookupUUID = require("./lookup-uuid");
const { promises: fs } = require("fs");

module.exports = name => new Promise(async function(resolve, reject) {

	// Make sure the username is a valid MC username
	if(!name.match(/\w{3,16}/g)) return reject(`"${name}" is not a valid username.`);

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
	if(cache.hasOwnProperty(name.toUpperCase())) return resolve(cache[name.toUpperCase()]);

	// Begin to scrape content;
	const $ = cheerio.load(await fetch(`https://namemc.com/search?q=${name}`).then(r => r.text()));
	const results = $("body > main > div.row > div.col-lg-7").children(".card.mb-3")

	// Get final listing
	let final = [];

	// Iterate through each result
	results.each(async function() {
		const data = $(this);
		const uuid = data.children(".card-header.py-0").children("a").children(".row").children(".col").children("samp").text();
		final.push(await lookupUUID(uuid));
		if(results.length === final.length) {
			cache[name.toUpperCase()] = final;
			await fs.writeFile(__dirname + "/cache.json", JSON.stringify(cache), "utf8");
			return resolve(final)
		}
	});

})
