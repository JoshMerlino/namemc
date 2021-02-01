import fetch from "node-fetch";
import cheerio from "cheerio";
import lookupUUID from "./lookupUUID.js";

export default name => new Promise(async function(resolve, reject) {

	// Make sure the username is a valid MC username
	if(!name.match(/\w{3,16}/g)) return reject(`"${name}" is not a valid username.`);

	// Begin to scrape content;
	const $ = cheerio.load(await fetch(`https://namemc.com/search?q=${name}`).then(r => r.text()));

	// Get if user is being rate limited
	if(/Error\:\s429\s\((\w|\s)*\)Retry-After\:\s((\w|\s)+)*/g.test($(".my-2").text())) return reject("You are being rate limited. Retry after: 5 seconds.");

	// Get results
	const results = $("body > main > div.row > div.col-lg-7").children(".card.mb-3")

	// Get final listing
	let final = [];

	// Iterate through each result
	results.each(async function() {

		// Get uuid of result
		const data = $(this);
		const uuid = data.children(".card-header.py-0").children("a").children(".row").children(".col").children("samp").text();

		// Push full lookup to results
		final.push(await lookupUUID(uuid));

		// Resolve when al have been finished
		if(results.length === final.length) return resolve(final);

	});

})
