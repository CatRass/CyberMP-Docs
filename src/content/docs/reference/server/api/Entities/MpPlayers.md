---
editUrl: false
next: false
prev: false
title: "MpPlayers"
---

Defined in: players.ts:21

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPlayer`](/reference/server/api/entities/mpplayer/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPlayer;
```

Defined in: entities.ts:110

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) | Entity instance or ID |

#### Returns

[`MpPlayer`](/reference/server/api/entities/mpplayer/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="exists"></a>

### exists()

```ts
exists(entity): boolean;
```

Defined in: entities.ts:100

Checks if an entity exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="kick"></a>

### kick()

```ts
kick(player, reason?): void;
```

Defined in: players.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) |
| `reason?` | `string` |

#### Returns

`void`

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpPlayer[];
```

Defined in: players.ts:23

#### Returns

[`MpPlayer`](/reference/server/api/entities/mpplayer/)[]
