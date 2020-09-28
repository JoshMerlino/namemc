# Name MC
## The unofficial Node JS API for looking up Minecraft users on [NameMC](https://namemc.com/)

## Searching by username
```javascript
const { lookupName } = require("namemc");
const users = await lookupName("tehpicix");
// Returns an array of users [<MCUserObject>, ...]
```

## Searching by UUID
```javascript
const { lookupUUID } = require("namemc");
const user = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");
// Returns an MCUserObject
```

## MCUserObject
```javascript
{
  profileId: 'TehPicix.1',
  currentName: 'TehPicix',
  uuid: '1eb084b8-588e-43e6-bdd3-e05e53682987',
  imageUrls: {
    skin: 'https://crafatar.com/skins/1eb084b8-588e-43e6-bdd3-e05e53682987',
    cape: 'https://crafatar.com/capes/1eb084b8-588e-43e6-bdd3-e05e53682987',
    body: 'https://crafatar.com/renders/body/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    head: 'https://crafatar.com/renders/head/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay',
    face: 'https://crafatar.com/avatars/1eb084b8-588e-43e6-bdd3-e05e53682987?overlay'
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
    changedAt: null // This is a legacy account, this was the accounts name before name changes were implemented in Feb, 2015
  }]
}
```
