---
editUrl: false
next: false
prev: false
title: "MpEntities"
---

Defined in: entities.d.ts:78

Collection wrapper for managing multiple entities.

## Extended by

- [`MpObjects`](/reference/server/api/entities/pools/mpobjects/)
- [`MpPeds`](/reference/server/api/entities/pools/mppeds/)
- [`MpPickups`](/reference/server/api/entities/pools/mppickups/)
- [`MpPlayers`](/reference/server/api/entities/pools/mpplayers/)
- [`MpVehicles`](/reference/server/api/entities/pools/mpvehicles/)

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* [`MpEntity`](/reference/server/api/entities/mpentity/) | [`MpEntity`](/reference/server/api/entities/mpentity/) | Specific entity type extending MpEntity |

## Methods

<a id="at"></a>

### at()

```ts
at(entity): T;
```

Defined in: entities.d.ts:95

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| `T` | Entity instance or ID |

#### Returns

`T`

Entity instance

#### Throws

If entity does not exist

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
| `entity` | `number` \| `T` | Entity instance or ID |

#### Returns

`boolean`

True if entity exists
