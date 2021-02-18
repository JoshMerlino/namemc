# Name MC
The unofficial Node JS package for looking up Minecraft users on [Name MC](https://namemc.com/)

*⚠ This package is not affiliated with Name MC or Minecraft in any way*

## Searching by username
```javascript
import { lookupName } from "namemc"; // require works aswell

const name = "tehpicix";

// Search users
const users = await lookupName(name);

// Results are ordered as they are on Name MC so users[0] may not be the most revelant result,
// you can filter the response as seen below to find the most revelant result, this gives you the 
const user = users.filter(({ currentName }) => currentName.toLowerCase() === name.toLowerCase())[0];

```

## Searching by UUID
```javascript
import { lookupUUID } from "namemc"; // require works aswell

// Lookup user
const user = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");
```

## Response breakdown
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

## Example response
```javascript
{
  profileId: 'TehPicix.1',
  currentName: 'TehPicix',
  uuid: '1eb084b8-588e-43e6-bdd3-e05e53682987',
  imageUrls: {
    cape: 'https://crafatar.com/capes/1eb084b8-588e-43e6-bdd3-e05e53682987',
    body: 'https://crafatar.com/renders/body/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    head: 'https://crafatar.com/renders/head/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    face: 'https://crafatar.com/avatars/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    skins: [
      'https://texture.namemc.com/48/4e/484e5a47d950a850.png',
      'https://texture.namemc.com/57/0f/570f92929465e401.png'
    ]
  },
  pastNames: [{
    name: 'TehPicix',
    changedAt: 1492820415000
  }, {
    name: 'TehGoldenPicix48',
    changedAt: 1434240076000
  }, {
    name: 'TehGoldenPicix64',
    changedAt: 1424020181000
  }, {
    name: 'picaxjosh',
    changedAt: null
  }]
}
```

## Caveats
1. This package is powered by [Web Scraping](https://en.wikipedia.org/wiki/Web_scraping), meaning that if Name MC were to suddenly change the HTML layout on their page it would cause the package to break until I were update it.
2. Name MC will rate-limit you after a certian amount of requests. In my opinion, they're very generous about this, after spamming an obscene amount of requests, the most I got limited for was 5 seconds. The package will reject the promise if you are being rate limited.

## API
If you need to use this in a browser and arent using a bundler, you can send API requests to my server to resolve names.
Endpoints and their info can be found on the [wiki](https://github.com/JoshMerlino/namemc/wiki).
