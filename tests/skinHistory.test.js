/* eslint @typescript-eslint/no-var-requires: 0 */
const { lookupUUID } = require("..");

/* eslint no-undef: 0 */
test("Test the ability to get name history.", async function() {
	const UUID = "1eb084b8-588e-43e6-bdd3-e05e53682987";
	const user = await lookupUUID(UUID);
	const CURRENT_SKIN = user.skins.pastSkins[user.skins.pastSkins.length - 1];
	expect(CURRENT_SKIN.url).toBe("https://texture.namemc.com/57/0f/570f92929465e401.png");
});
