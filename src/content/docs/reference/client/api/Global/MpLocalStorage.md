---
editUrl: false
next: false
prev: false
title: "MpLocalStorage"
---

Defined in: local-storage.d.ts:5

Interface providing access to persistent client-side key-value storage.
Data saved here remains available across different game sessions and server reconnections.

## Methods

<a id="delete"></a>

### delete()

> **delete**(`key`): `void`

Defined in: local-storage.d.ts:25

Permanently removes a specific key-value entry from the storage map.

#### Parameters

##### key

`string`

The unique identifier name of the entry to delete.

#### Returns

`void`

***

<a id="deleteall"></a>

### deleteAll()

> **deleteAll**(): `void`

Defined in: local-storage.d.ts:30

Clears all keys and values currently held in this resource's local storage instance.

#### Returns

`void`

***

<a id="get"></a>

### get()

> **get**(`key`): `string`

Defined in: local-storage.d.ts:19

Retrieves the stored string value associated with the specified key.

#### Parameters

##### key

`string`

The unique identifier name of the entry to fetch.

#### Returns

`string`

The stored string value, or an empty string/null if the key does not exist.

***

<a id="save"></a>

### save()

> **save**(): `void`

Defined in: local-storage.d.ts:36

Explicitly flushes the current state of the in-memory storage data down to the physical disk.
Use this to ensure volatile data isn't lost if the game client unexpectedly crashes.

#### Returns

`void`

***

<a id="set"></a>

### set()

> **set**(`key`, `value`): `void`

Defined in: local-storage.d.ts:12

Associates a string value with a specific key in the storage database.
If the key already exists, its value will be overwritten.

#### Parameters

##### key

`string`

The unique identifier name for the storage entry.

##### value

`string`

The plaintext string data payload to be stored.

#### Returns

`void`
