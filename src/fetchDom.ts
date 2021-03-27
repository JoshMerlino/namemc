import fetch, { Response } from "node-fetch";
import cheerio from "cheerio";

export async function fetchDom(path: string) : Promise<cheerio.Root> {

	// Fetch page
	const response: Response = await fetch(`https://namemc.com/${path}`);
	const body: string = await response.text();

	// Get DOM
	const $ = cheerio.load(body);

	// Get if user is being rate limited
	if (/Error:\s429\s\((\w|\s)*\)Retry-After:\s((\w|\s)+)*/g.test($(".my-2").text())) throw new Error("You are being rate limited. Retry after: 5 seconds.");

	// Return DOM
	return $;

}
