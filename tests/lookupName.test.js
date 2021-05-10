/* eslint @typescript-eslint/no-var-requires: 0 */
const { lookupName } = require("..");

/* eslint no-undef: 0 */
test("Test the 'lookupName' function.", async function() {
	const NAME = "TehPicix";
	const users = await lookupName(NAME);
	const user = users.filter(user => user.currentName === NAME)[0];
	console.log(user);
	expect(user.currentName).toBe(NAME);
});
