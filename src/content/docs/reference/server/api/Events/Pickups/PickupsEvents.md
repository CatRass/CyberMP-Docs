---
editUrl: false
next: false
prev: false
title: "PickupsEvents"
---

Defined in: events.ts:465

Events related to Pickups

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="pickupchange"></a>

### pickupChange()

> **pickupChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:469

Triggered when a pickup's state changes.

#### Parameters

##### playerId

`number`

##### data

[`PickupChangeEventData`](/reference/server/api/events/pickups/pickupchangeeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="pickupdespawn"></a>

### pickupDespawn()

> **pickupDespawn**(`id`): `void`

Defined in: events.ts:489

Triggered when a pickup despawns.

#### Parameters

##### id

`number`

#### Returns

`void`

***

<a id="pickupdrop"></a>

### pickupDrop()

> **pickupDrop**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:479

Triggered when a pickup is dropped.

#### Parameters

##### playerId

`number`

##### data

[`PickupCreateEventData`](/reference/server/api/events/pickups/pickupcreateeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="pickupraise"></a>

### pickupRaise()

> **pickupRaise**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:474

Triggered when a pickup is raised.

#### Parameters

##### playerId

`number`

##### data

[`PickupDespawnEventData`](/reference/server/api/events/pickups/pickupdespawneventdata/)

#### Returns

`boolean` \| `void`

***

<a id="pickupspawn"></a>

### pickupSpawn()

> **pickupSpawn**(`id`): `void`

Defined in: events.ts:484

Triggered when a pickup spawns.

#### Parameters

##### id

`number`

#### Returns

`void`
