/* eslint @typescript-eslint/no-var-requires: 0 */
const { lookupUUID } = require("..");

/* eslint no-undef: 0 */
test("Test the ability to get name history.", async function() {
	const UUID = "1eb084b8-588e-43e6-bdd3-e05e53682987";
	const user = await lookupUUID(UUID);
	const FIRSTNAME = user.pastNames.filter(name => name.changedAt === null)[0];
	expect(FIRSTNAME).toStrictEqual({
		name: "picaxjosh",
		changedAt: null
	});
});
