---
editUrl: false
next: false
prev: false
title: "game"
---

## Interfaces

### MpGamePrecomputed

Defined in: client-types/out/precomputed/game.d.ts:46

#### Properties

##### CyberMP

> **CyberMP**: [`CyberMP`](/client-reference/classes/#cybermp)

Defined in: client-types/out/precomputed/game.d.ts:47

##### observe

> **observe**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:130

Alias for [observeBefore](/client-reference/game/#mpgameprecomputed).

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### observeAfter

> **observeAfter**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:114

Observes method inside selected class.

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### observeAfterRaw

> **observeAfterRaw**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:139

Observes method inside selected class. Can only call methods from MpGame.
Should be used when it's important for the function to execute quickly (as fast as V8 allows).

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### observeBefore

> **observeBefore**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:122

Observes method inside selected class.

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### observeBeforeRaw

> **observeBeforeRaw**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:148

Observes method inside selected class. Can only call methods from MpGame.
Should be used when it's important for the function to execute quickly (as fast as V8 allows).

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### observeRaw

> **observeRaw**: [`ObserveFunction`](/client-reference/game/#observefunction)

Defined in: client-types/out/precomputed/game.d.ts:156

Alias for [observeBeforeRaw](/client-reference/game/#mpgameprecomputed).

###### Param

Class name

###### Param

Method name inside of class

###### Param

Callback of method function.

##### override

> **override**: [`OverrideFunction`](/client-reference/game/#overridefunction)

Defined in: client-types/out/precomputed/game.d.ts:106

Overrides method function inside selected class.

###### Param

Class name

###### Param

Method name inside of class

###### Param

Function to override instead

##### TweakDB

> **TweakDB**: [`TweakDB`](/client-reference/game/#tweakdb-1)

Defined in: client-types/out/precomputed/game.d.ts:48

#### Methods

##### AddToInventory()

> **AddToInventory**(`itemName`, `count`): `void`

Defined in: client-types/out/precomputed/game.d.ts:90

Add something to inventory.

###### Parameters

###### itemName

`string`

###### count

`number`

###### Returns

`void`

##### fromVariant()

> **fromVariant**\<`R`\>(`obj`): `R`

Defined in: client-types/out/precomputed/game.d.ts:159

###### Type Parameters

###### R

`R` = `any`

###### Parameters

###### obj

`any`

###### Returns

`R`

##### getDisplayResolution()

> **getDisplayResolution**(): \[`number`, `number`\]

Defined in: client-types/out/precomputed/game.d.ts:60

###### Returns

\[`number`, `number`\]

##### getHashFromName()

> **getHashFromName**(`name`, `type`): `string`

Defined in: client-types/out/precomputed/game.d.ts:98

Returns model hash convertable to number.

###### Parameters

###### name

`string`

Model name

###### type

Model name type

`"tweakdbid"` | `"cname"`

###### Returns

`string`

Model hash

##### getSingleton()

> **getSingleton**\<`T`\>(`name`): [`UnwrapMpClass`](/client-reference/primitives/#unwrapmpclass)\<`MpClasses`\[`T`\]\>

Defined in: client-types/out/precomputed/game.d.ts:85

Get singleton.

###### Type Parameters

###### T

`T` *extends* keyof `MpClasses`

###### Parameters

###### name

`T`

###### Returns

[`UnwrapMpClass`](/client-reference/primitives/#unwrapmpclass)\<`MpClasses`\[`T`\]\>

##### isBlackScreenEnded()

> **isBlackScreenEnded**(): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:163

###### Returns

`boolean`

##### isBlackScreenStarted()

> **isBlackScreenStarted**(): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:161

###### Returns

`boolean`

##### onGameLoaded()

> **onGameLoaded**(`callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:65

Event when the game is started.

###### Parameters

###### callback

() => `void`

###### Returns

`void`

##### onInit()

> **onInit**(`callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:75

Event when tweaks is loaded.

###### Parameters

###### callback

() => `void`

###### Returns

`void`

##### onInputKeyEvent()

> **onInputKeyEvent**(`callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:53

Method to retrieve input events.

###### Parameters

###### callback

(`action`, `key`) => `void`

###### Returns

`void`

##### onLocalPlayerSpawned()

> **onLocalPlayerSpawned**(`callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:80

Event when local player has been spawned.

###### Parameters

###### callback

() => `void`

###### Returns

`void`

##### onTweak()

> **onTweak**(`callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:70

Event when tweaks is loaded.

###### Parameters

###### callback

() => `void`

###### Returns

`void`

##### toVariant()

> **toVariant**\<`R`\>(`obj`, `str`): `R`

Defined in: client-types/out/precomputed/game.d.ts:158

###### Type Parameters

###### R

`R` = \{ \}

###### Parameters

###### obj

`any`

###### str

`string`

###### Returns

`R`

***

### ObserveFunction()

Defined in: client-types/out/precomputed/game.d.ts:22

> **ObserveFunction**\<`C`, `I`, `M`\>(`className`, `methodName`, `callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:23

#### Type Parameters

##### C

`C` *extends* keyof `MpClasses`

##### I

`I` *extends* `any`

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### className

`C`

##### methodName

`M`

##### callback

(`self`, ...`args`) => `void`

#### Returns

`void`

***

### OverrideFunction()

Defined in: client-types/out/precomputed/game.d.ts:7

> **OverrideFunction**\<`C`, `I`, `M`\>(`className`, `methodName`, `callback`): `void`

Defined in: client-types/out/precomputed/game.d.ts:8

#### Type Parameters

##### C

`C` *extends* keyof `MpClasses`

##### I

`I` *extends* `any`

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### className

`C`

##### methodName

`M`

##### callback

(`self`, ...`args`) => `ReturnType`\<`I`\[`M`\]\>

#### Returns

`void`

***

### TweakDB

Defined in: client-types/out/precomputed/game.d.ts:34

#### Methods

##### createRecord()

> **createRecord**(`key`, `value`): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:43

###### Parameters

###### key

`string`

###### value

`string`

###### Returns

`boolean`

##### getFlat()

> **getFlat**\<`T`\>(`str`): `T`

Defined in: client-types/out/precomputed/game.d.ts:38

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### str

`string`

###### Returns

`T`

##### getRecord()

> **getRecord**\<`T`\>(`str`): `T`

Defined in: client-types/out/precomputed/game.d.ts:36

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### str

`string`

###### Returns

`T`

##### getRecords()

> **getRecords**\<`T`\>(`str`): `T`[]

Defined in: client-types/out/precomputed/game.d.ts:35

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### str

`string`

###### Returns

`T`[]

##### query()

> **query**(`str`): `string`[]

Defined in: client-types/out/precomputed/game.d.ts:37

###### Parameters

###### str

`string`

###### Returns

`string`[]

##### setFlat()

> **setFlat**(`str`, `obj`): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:40

###### Parameters

###### str

`string`

###### obj

`any`

###### Returns

`boolean`

##### setFlatNoUpdate()

> **setFlatNoUpdate**(`str`, `obj`): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:41

###### Parameters

###### str

`string`

###### obj

`any`

###### Returns

`boolean`

##### setFlats()

> **setFlats**(`str`, `arr`): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:39

###### Parameters

###### str

`string`

###### arr

`any`[]

###### Returns

`boolean`

##### updateRecord()

> **updateRecord**(`str`): `boolean`

Defined in: client-types/out/precomputed/game.d.ts:42

###### Parameters

###### str

`string`

###### Returns

`boolean`
