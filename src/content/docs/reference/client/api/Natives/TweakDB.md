---
editUrl: false
next: false
prev: false
title: "TweakDB"
---

Defined in: game.d.ts:69

Interface for interacting with the game's TweakDB database.
TweakDB contains static game data, tweaks, and entity configurations.

## Methods

<a id="createrecord"></a>

### createRecord()

> **createRecord**(`key`, `value`): `boolean`

Defined in: game.d.ts:139

Runtime creates a new TweakDB record.

#### Parameters

##### key

`string`

The new record identifier key.

##### value

`string`

The record blueprint or type definition key.

#### Returns

`boolean`

`true` if creation succeeded, otherwise `false`.

***

<a id="getflat"></a>

### getFlat()

> **getFlat**\<`T`\>(`str`): `T`

Defined in: game.d.ts:99

Retrieves a "flat" property value directly from TweakDB.

#### Type Parameters

##### T

`T` = `any`

The expected type of the flat property.

#### Parameters

##### str

`string`

The path to the flat property (e.g., "Items.SomeItem.someProperty").

#### Returns

`T`

The flat property value.

***

<a id="getrecord"></a>

### getRecord()

> **getRecord**\<`T`\>(`str`): `T`

Defined in: game.d.ts:84

Retrieves a single record from TweakDB.

#### Type Parameters

##### T

`T` = `any`

The expected type of the record.

#### Parameters

##### str

`string`

The specific TweakDB ID or path string.

#### Returns

`T`

The requested record.

***

<a id="getrecords"></a>

### getRecords()

> **getRecords**\<`T`\>(`str`): `T`[]

Defined in: game.d.ts:76

Retrieves an array of records matching a specific query or record type.

#### Type Parameters

##### T

`T` = `any`

The expected type of the records.

#### Parameters

##### str

`string`

The TweakDB record path or type identifier.

#### Returns

`T`[]

An array of matching records.

***

<a id="query"></a>

### query()

> **query**(`str`): `string`[]

Defined in: game.d.ts:91

Queries TweakDB paths and returns matching entry keys.

#### Parameters

##### str

`string`

The search or query pattern string.

#### Returns

`string`[]

An array of matching string IDs.

***

<a id="setflat"></a>

### setFlat()

> **setFlat**(`str`, `obj`): `boolean`

Defined in: game.d.ts:115

Overwrites a single flat property value in TweakDB and updates the engine immediately.

#### Parameters

##### str

`string`

The path to the flat property.

##### obj

`any`

The new value to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="setflatnoupdate"></a>

### setFlatNoUpdate()

> **setFlatNoUpdate**(`str`, `obj`): `boolean`

Defined in: game.d.ts:124

Overwrites a flat property value in TweakDB *without* triggering an immediate engine update.
Useful when batching multiple TweakDB edits before a manual refresh.

#### Parameters

##### str

`string`

The path to the flat property.

##### obj

`any`

The new value to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="setflats"></a>

### setFlats()

> **setFlats**(`str`, `arr`): `boolean`

Defined in: game.d.ts:107

Overwrites an array flat property in TweakDB and updates the engine immediately.

#### Parameters

##### str

`string`

The path to the flat property.

##### arr

`any`[]

The new array of values to assign.

#### Returns

`boolean`

`true` if the operation was successful, otherwise `false`.

***

<a id="updaterecord"></a>

### updateRecord()

> **updateRecord**(`str`): `boolean`

Defined in: game.d.ts:131

Forces the engine to re-read and update a specific record from its current TweakDB state.

#### Parameters

##### str

`string`

The path to the record to update.

#### Returns

`boolean`

`true` if the update succeeded, otherwise `false`.
