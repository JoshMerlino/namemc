# JavaScript Docs (ES6)

### Looking up user by username

```javascript
import { lookupName } from "namemc";

// Async function to wrap await methods
(async function(){

	// Look up users that have the name or have had the name '3E7'
	const users = await lookupName("3E7");

	// Log each user to console
	users.map(user => {
		console.log(user);
	});

}())
```

### Looking up user by UUID

```javascript
import { lookupUUID } from "namemc";

// Async function to wrap await methods
(async function(){

	// Look up the user with the uuid '1eb084b8-588e-43e6-bdd3-e05e53682987' which is 'TehPicix'
	const user = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");

	// Log user to console
	console.log(user);

}())
```
