# Name MC
## The unofficial Node JS API for looking up Minecraft users on [NameMC](https://namemc.com/)

## Searching by username
```javascript
const { lookupName } = require("namemc");
const users = await lookupName("tehpicix");
// Returns an array of users from search results
// MCUserObject[]
```

## Searching by UUID
```javascript
const { lookupUUID } = require("namemc");
const user = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");
// Returns the user associated with that UUID
// MCUserObject
```

## MCUserObject
```javascript
{
  profileId: 'TehPicix.1',
  currentName: 'TehPicix',
  uuid: '1eb084b8-588e-43e6-bdd3-e05e53682987',
  imageUrls: {
    cape: 'https://crafatar.com/capes/1eb084b8-588e-43e6-bdd3-e05e53682987',
    body: 'https://crafatar.com/renders/body/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    head: 'https://crafatar.com/renders/head/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    face: 'https://crafatar.com/avatars/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay'
	skins: [
      'https://texture.namemc.com/48/4e/484e5a47d950a850.png',
      'https://texture.namemc.com/57/0f/570f92929465e401.png'
    ]
  },
  pastNames: [{
    name: 'TehPicix',
    changedAt: new Date("2017-04-22T00:20:15.000Z")
  }, {
    name: 'TehGoldenPicix48',
    changedAt: new Date("2015-06-14T00:01:16.000Z")
  }, {
    name: 'TehGoldenPicix64',
    changedAt: new Date("2015-02-15T12:09:41.000Z")
  }, {
    name: 'picaxjosh',
    changedAt: null // null because this is the accounts original name
  }]
}
```
