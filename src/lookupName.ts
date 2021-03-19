import { NameMCUser } from "./types";
import { lookupUUID as fetch } from "./lookupUUID";
import { fetchDom } from "./fetchDom";

/**
 *  @param {string} player
 */
export async function lookupName(name: string): Promise<Array<NameMCUser>> {

    // Make sure the username is a valid MC username
    if (!name.match(/\w{3,16}/g)) throw new Error(`'${name}' is not a valid username.`);

    // Fetch the DOM
    const $ = await fetchDom(`search?q=${name}`);

    // Get results
    const results = $("body > main > div.row > div.col-lg-7").children(".card.mb-3");

    // Get final listing
    let final: NameMCUser[] = [];

    return new Promise(resolve => {

        // Iterate through each result
        results.each(async function(this: any) {

            // Get uuid of result
            const data = $(this);
            const uuid = data.children(".card-header.py-0").children("a").children(".row").children(".col").children("samp").text();

            // Push full lookup to results
            final.push(await fetch(uuid));

            // Resolve when al have been finished
            if (results.length === final.length) return resolve(final);

        });

    }) as Promise<Array<NameMCUser>>;

}
