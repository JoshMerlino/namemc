# Name MC
The unofficial Node JS API for looking up Minecraft users on [NameMC](https://namemc.com/)

## Searching by username
```javascript
import { lookupName } from "namemc"; // require works aswell

// Search users
const users = await lookupName("tehpicix");
// Returns Array<Object> - an array of users from search results
// Results are ordered as they are on Name MC so you may need to filter your response
```

## Searching by UUID
```javascript
import { lookupUUID } from "namemc"; // require works aswell

// Lookup user
const user = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");
// Returns Object - the user associated with that UUID
```

### Example Object response
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
