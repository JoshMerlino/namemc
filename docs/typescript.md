# TypeScript Docs

TypeScript Types are in [src/types.ts](https://github.com/JoshMerlino/namemc/blob/master/src/types.ts)

### Looking up user by username

```typescript
import { lookupName, NameMCUser } from "namemc";

// Async function to wrap await methods
(async function(){

	// Look up users that have the name or have had the name '3E7'
	const users: NameMCUser[] = await lookupName("3E7");

	// Log each user to console
	users.map((user: NameMCUser) => {
		console.log(user);
	});

}())

```

### Looking up user by UUID

```typescript
import { lookupUUID, NameMCUser } from "namemc";

// Async function to wrap await methods
(async function(){

	// Look up the user with the uuid '1eb084b8-588e-43e6-bdd3-e05e53682987' which is 'TehPicix'
	const user: NameMCUser = await lookupUUID("1eb084b8-588e-43e6-bdd3-e05e53682987");

	// Log user to console
	console.log(user);

}())

```

### Object schema
Read about the object format/schema [here](https://github.com/JoshMerlino/namemc/blob/master/docs/user.md).
