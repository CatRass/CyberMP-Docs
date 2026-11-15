---
editUrl: false
next: false
prev: false
title: "MpEntities"
---

Defined in: entities.ts:91

Collection wrapper for managing multiple entities.

## Extended by

- [`MpObjects`](/reference/server/api/entities/objects/mpobjects/)
- [`MpPeds`](/reference/server/api/entities/peds/mppeds/)
- [`MpPickups`](/reference/server/api/entities/pickups/mppickups/)
- [`MpPlayers`](/reference/server/api/entities/players/mpplayers/)
- [`MpVehicles`](/reference/server/api/entities/vehicles/mpvehicles/)

## Type Parameters

<a id="t"></a>

### T

`T` *extends* [`MpEntity`](/reference/server/api/entities/mpentity/) = [`MpEntity`](/reference/server/api/entities/mpentity/)

Specific entity type extending MpEntity

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): `T`

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| `T`

Entity instance or ID

#### Returns

`T`

Entity instance

#### Throws

If entity does not exist

***

<a id="exists"></a>

### exists()

> **exists**(`entity`): `boolean`

Defined in: entities.ts:98

Checks if an entity exists.

#### Parameters

##### entity

`number` \| `T`

Entity instance or ID

#### Returns

`boolean`

True if entity exists
