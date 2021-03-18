### NameMCUser



| Key | Description | Type |
| - | - | - |
| `profileId` | The ID Name MC assigned to this account. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `currentName` | The accounts current Minecraft username. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `uuid` | The accounts static UUID. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins` | An object containing info about the skins the user had. | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `skins.currentSkin` | A link to the current skin the user is using. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins.renders.body` | A URL to the user's standing render PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins.renders.cape` | A URL to the user's cape PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins.renders.face` | A URL to the user's face PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins.renders.head` | A URL to the user's head render PNG. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `skins.pastSkins` | An array of of skins the user has previously used. | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[PastSkin](https://github.com/JoshMerlino/namemc/blob/master/docs/types/PastSkin.md)> |
| `pastNames` | An array of objects containing the user's previous names and when they were changed. | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[PastName](https://github.com/JoshMerlino/namemc/blob/master/docs/types/PastName.md)> |
