import { NameMCUser, PastName, PastSkin, SkinModel } from "./interface";

export default function scraper($: cheerio.Root) : NameMCUser {

	// Start parsing HTML
	const data = $("body > main > div");

	const rightData = data
		.children(".order-md-2")
		.children(".card.mb-3");

	const leftData = data
		.children(".order-md-1")
		.children(".card.mb-3");

	// The ID Name MC assigned to this account.
	const profileId: string = rightData
		.children(".card-body.py-1")
		.children(".row")
		.eq(2)
		.children(".col-12")
		.text()
		.split("/")[1];

	// The accounts current Minecraft username.
	const currentName: string = rightData
		.eq(1)
		.children(".card-body.py-1")
		.children(".row")
		.first()
		.children(".col")
		.children(".row.no-gutters")
		.children(".col")
		.children("a")
		.text();

	// The accounts static UUID.
	const uuid: string = rightData
		.children(".card-body.py-1")
		.children(".row")
		.first()
		.children(".col-12").children("samp").text();

	// An array of of skins the user has previously used.
	const pastSkins = Object.values(
		leftData
			.eq(1)
			.children(".card-body")
			.children("a"))

		.filter(elem => elem.type === "tag")
		.map(elem => $(elem))
		.filter(elem => elem !== undefined)
		.map(skin => {

			// Get has of the skin
			const hash = skin?.attr("href")?.split("/")[2];

			// If the has dosnt exist skip to next iteration
			if(hash === undefined) return null;

			return new class PastSkin {

					url = `https://texture.namemc.com/${hash?.substr(0, 2)}/${hash?.substr(2, 2)}/${hash}.png`;

					model: SkinModel = skin
						.children("canvas")
						.data("model");

					changedAt = new Date(skin?.children("canvas")?.attr("title") + "").getTime();

			} as PastSkin;

		})
		.filter(elem => elem !== null);

	// An object containing info about the skins the user had.
	const skins = {

		// A link to the current skin the user is using.
		currentSkin: `https://crafatar.com/skins/${uuid}`,

		// An object of images of the skin renders provided by Crafatar.
		renders: {

			// A URL to the user's standing render PNG.
			body: `https://crafatar.com/renders/body/${uuid}?overlay`,

			// A URL to the user's cape PNG.
			cape: `https://crafatar.com/capes/${uuid}`,

			// A URL to the user's face PNG.
			face: `https://crafatar.com/avatars/${uuid}?overlay`,

			// A URL to the user's head render PNG.
			head: `https://crafatar.com/renders/head/${uuid}?overlay`

		},

		pastSkins

	};

	// An array of objects containing the user's previous names and when they were changed.
	const pastNames = Object.values(
		rightData
			.eq(1)
			.children(".card-body.py-1")
			.children(".row"))

		.filter(elem => elem.type === "tag")
		.map(elem => $(elem))
		.map(elem => {

			return new class PastName {

				name = elem
					.children(".col")
					.children(".row.no-gutters")
					.children(".col")
					.children("a")
					.text();

				changedAt = elem
					.children(".col-12")
					.children("time")
					.text() ? new Date(
						elem
							.children(".col-12")
							.children("time")
							.text())
						.getTime() : null;

			} as PastName;

		})

		.reverse();

	// Return player as interface
	return new class NameMCUser {

        profileId = profileId;

        currentName = currentName;

        uuid = uuid;

        skins = skins;

        pastNames = pastNames;

	} as NameMCUser;

}
