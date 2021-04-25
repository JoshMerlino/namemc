import fetch, { Response } from "node-fetch";
import cheerio from "cheerio";

export async function fetchDOM(path: string) : Promise<cheerio.Root> {

	// Fetch page
	const response: Response = await fetch(`https://namemc.com/${path}`);
	const body: string = await response.text();

	// Get DOM
	const $ = cheerio.load(body);

	// Get if user is being rate limited
	if (/Error:\s429\s\((\w|\s)*\)Retry-After:\s((\w|\s)+)*/g.test($(".my-2").text())) throw new Error("You are being rate limited. Retry after: 5 seconds.");

	// Get if cloudflare blocked the request
	if ($("body").text().includes("Cloudflare")) {
		const ray = $("body").text().split("\n").filter(line => line.replace(/\s|\s/g, "") !== "").slice(12)[0];
		const rayID = parseInt(ray.split(": ")[1], 16);
		throw new Error(`Cloudflare has rejected the request. Ray ID: ${rayID}`);
	}

	// Return DOM
	return $;

}
