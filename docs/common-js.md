# Common JS Docs

### Response breakdown
| Key | Description | Type |
| - | - | - |
| `profileId` | The ID Name MC assigned to this account. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `currentName` | The accounts current Minecraft username. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `uuid` | The accounts static UUID. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `imageUrls` | An object containing many images of the skin or its renders. | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `imageUrls.cape` | A URL to the user's cape PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `imageUrls.body` | A URL to the user's standing render PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `imageUrls.head` | A URL to the user's head render PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `imageUrls.face` | A URL to the user's face PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `imageUrls.skins` | An array of image URL's to skins the user has previously used. | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> |
| `pastNames` | An array of objects containing the user's previous names and when they were changed. | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> |
| `pastNames[].name` | The user's name. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `pastNames[].changedAt` | The timestamp the user changed their name to this. `null` if it was the original name of the account. | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)/[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) |

### Looking up user by username

```javascript
var lookupName = require("namemc").lookupName;

// Look up users that have the name or have had the name '3E7'
lookupName("3E7").then(function(users) {

	// Log each user to console
	users.map(function(user) {
		console.log(user);
	});

});

```

### Looking up user by UUID

```javascript
var lookupUUID = require("namemc").lookupUUID;

// Look up the user with the uuid '1eb084b8-588e-43e6-bdd3-e05e53682987' which is 'TehPicix'
lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987").then(function(user) {

	// Log user to console
	console.log(user);

});

```
