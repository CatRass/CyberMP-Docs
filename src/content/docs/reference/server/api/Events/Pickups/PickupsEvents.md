---
editUrl: false
next: false
prev: false
title: "PickupsEvents"
---

Defined in: events.ts:455

Events related to Pickups

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="pickupchange"></a>

### pickupChange()

```ts
pickupChange(playerId, data): boolean | void;
```

Defined in: events.ts:459

Triggered when a pickup's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupChangeEventData`](/reference/server/api/events/pickups/pickupchangeeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="pickupdespawn"></a>

### pickupDespawn()

```ts
pickupDespawn(id): void;
```

Defined in: events.ts:479

Triggered when a pickup despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

***

<a id="pickupdrop"></a>

### pickupDrop()

```ts
pickupDrop(playerId, data): boolean | void;
```

Defined in: events.ts:469

Triggered when a pickup is dropped.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupCreateEventData`](/reference/server/api/events/pickups/pickupcreateeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="pickupraise"></a>

### pickupRaise()

```ts
pickupRaise(playerId, data): boolean | void;
```

Defined in: events.ts:464

Triggered when a pickup is raised.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupDespawnEventData`](/reference/server/api/events/pickups/pickupdespawneventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="pickupspawn"></a>

### pickupSpawn()

```ts
pickupSpawn(id): void;
```

Defined in: events.ts:474

Triggered when a pickup spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`
