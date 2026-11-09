---
editUrl: false
next: false
prev: false
title: "MpCommands"
---

Defined in: commands.d.ts:4

Manages the registration, handling, and unregistration of runtime client console commands.

## Methods

<a id="add"></a>

### add()

> **add**(`commandName`, `callback`): `void`

Defined in: commands.d.ts:10

Register a command

#### Parameters

##### commandName

`string`

Command name without "/".

##### callback

(`id`, `args`) => `void`

Callback with player and args.

#### Returns

`void`

***

<a id="remove"></a>

### remove()

> **remove**(`commandName`): `void`

Defined in: commands.d.ts:19

Unregister a command

#### Parameters

##### commandName

`string`

Command name without "/".

#### Returns

`void`
