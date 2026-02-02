---
editUrl: false
next: false
prev: false
title: "meta"
---

## Interfaces

### MpMeta

Defined in: client-types/out/precomputed/meta.d.ts:1

#### Methods

##### getEntityMeta()

###### Call Signature

> **getEntityMeta**\<`T`\>(`netId`, `key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:12

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### netId

`number`

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getEntityMeta**\<`T`\>(`netId`, `key`): `T`

Defined in: server-types/index.d.ts:111

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### netId

`number`

###### key

`string`

###### Returns

`T`

##### getGlobalMeta()

###### Call Signature

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:3

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: server-types/index.d.ts:102

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

##### getLocalPlayerMeta()

> **getLocalPlayerMeta**\<`T`\>(`key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:14

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

##### getPlayerMeta()

###### Call Signature

> **getPlayerMeta**\<`T`\>(`playerId`, `key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:10

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### playerId

`number`

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getPlayerMeta**\<`T`\>(`playerId`, `key`): `T`

Defined in: server-types/index.d.ts:109

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### playerId

`number`

###### key

`string`

###### Returns

`T`

##### setEntityMeta()

###### Call Signature

> **setEntityMeta**(`netId`, `key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:11

###### Parameters

###### netId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setEntityMeta**(`netId`, `key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:110

###### Parameters

###### netId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

##### setGlobalMeta()

###### Call Signature

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:2

###### Parameters

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:101

###### Parameters

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

##### setLocalPlayerMeta()

> **setLocalPlayerMeta**(`key`, `value`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:13

###### Parameters

###### key

`string`

###### value

`any`

###### Returns

`void`

##### setPlayerMeta()

###### Call Signature

> **setPlayerMeta**(`playerId`, `key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:4

###### Parameters

###### playerId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setPlayerMeta**(`playerId`, `key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:103

###### Parameters

###### playerId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`
