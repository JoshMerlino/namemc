const fetch = require("node-fetch");
const cheerio = require("cheerio");
const lookupUUID = require("./lookup-uuid")

module.exports = name => new Promise(async function(resolve) {

	if(!name.match(/\w{3,16}/g)) throw new Error(`"${name}" is not a valid username.`);

	const $ = cheerio.load(await fetch(`https://namemc.com/search?q=${name}`).then(r => r.text()));
	const results = $("body > main > div.row > div.col-lg-7").children(".card.mb-3")

	let final = [];

	results.each(async function() {
		const data = $(this);
		const uuid = data.children(".card-header.py-0").children("a").children(".row").children(".col").children("samp").text();
		final.push(await lookupUUID(uuid));
		if(results.length === final.length) resolve(final)
	});
	
})
