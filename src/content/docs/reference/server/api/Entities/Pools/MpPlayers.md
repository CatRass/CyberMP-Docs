---
editUrl: false
next: false
prev: false
title: "MpPlayers"
---

Defined in: players.d.ts:22

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/pools/mpentities/)\<[`MpPlayer`](/reference/server/api/entities/mpplayer/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPlayer;
```

Defined in: entities.d.ts:95

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

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`at`](/reference/server/api/entities/pools/mpentities/#at)

***

<a id="exists"></a>

### exists()

```ts
exists(entity): boolean;
```

Defined in: entities.d.ts:85

Checks if an entity exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`exists`](/reference/server/api/entities/pools/mpentities/#exists)

***

<a id="getidentifier"></a>

### getIdentifier()

```ts
getIdentifier(player, type): string;
```

Defined in: players.d.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) |
| `type` | [`PlayerIdentifierType`](/reference/server/api/other/playeridentifiertype/) |

#### Returns

`string`

***

<a id="kick"></a>

### kick()

```ts
kick(player, reason?): void;
```

Defined in: players.d.ts:23

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

Defined in: players.d.ts:25

#### Returns

[`MpPlayer`](/reference/server/api/entities/mpplayer/)[]
