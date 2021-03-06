# Common JS Docs

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

### Object schema
Read about the object format/schema [here](https://github.com/JoshMerlino/namemc/blob/master/docs/user.md).
