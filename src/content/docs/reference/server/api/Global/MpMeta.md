---
editUrl: false
next: false
prev: false
title: "MpMeta"
---

Defined in: meta.d.ts:8

Sets/gets metadata for the any entity.

## Methods

<a id="getentitymeta"></a>

### getEntityMeta()

```ts
getEntityMeta<T>(entity, key): T;
```

Defined in: meta.d.ts:26

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `number` \| [`MpEntity`](/reference/server/api/entities/mpentity/) |
| `key` | `string` |

#### Returns

`T`

***

<a id="getglobalmeta"></a>

### getGlobalMeta()

```ts
getGlobalMeta<T>(key): T;
```

Defined in: meta.d.ts:10

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`T`

***

<a id="getplayermeta"></a>

### getPlayerMeta()

```ts
getPlayerMeta<T>(player, key): T;
```

Defined in: meta.d.ts:18

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) |
| `key` | `string` |

#### Returns

`T`

***

<a id="setentitymeta"></a>

### setEntityMeta()

```ts
setEntityMeta(
   entity, 
   key, 
   value, 
   sync?): void;
```

Defined in: meta.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `number` \| [`MpEntity`](/reference/server/api/entities/mpentity/) |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

#### Returns

`void`

***

<a id="setglobalmeta"></a>

### setGlobalMeta()

```ts
setGlobalMeta(
   key, 
   value, 
   sync?): void;
```

Defined in: meta.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

#### Returns

`void`

***

<a id="setplayermeta"></a>

### setPlayerMeta()

```ts
setPlayerMeta(
   player, 
   key, 
   value, 
   sync?): void;
```

Defined in: meta.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

#### Returns

`void`
