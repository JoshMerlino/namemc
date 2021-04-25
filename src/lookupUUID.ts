import scraper from "./scraper";
import { fetchDOM } from "./fetchDOM";
import { NameMCUser } from "./interface";

/**
 *  @param {string} uuid Get a Name MC Player by their Mojang UUID
 */
export async function lookupUUID(uuid: string): Promise<NameMCUser> {

	// If is valid UUID
	if (!uuid.match(/^[0-9a-f]{8}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{4}(-)?[0-9a-f]{12}/g)) throw new Error(`'${uuid}' is not a valid uuid.`);

	// Fetch the DOM
	const $ = await fetchDOM(`profile/${uuid}`);

	// Start scraping
	const profileId = $("body > main > div").children(".order-md-2").children(".card.mb-3").children(".card-body.py-1").children(".row").eq(2).children(".col-12").text().split("/")[1];

	// If player isnt found
	if (profileId === undefined) throw new Error(`'${uuid}' does not belong to any player.`);

	// Return player
	return scraper($);

}
